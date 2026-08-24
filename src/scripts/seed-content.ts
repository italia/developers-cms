import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { type IdMaps, remapForPatch, requireTargetConfig, targetPatch, targetPostGlobal } from './seed-lib'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))

// Phase 2: re-patches every doc created by seed-create.ts with its full data, now that every
// collection has been seeded and every relationship/upload/reference is resolvable via
// cms/data/seedIdMap.json. Also seeds globals (skipped in phase 1 since they're not
// per-record and commonly reference content docs, e.g. sidebar-for-article's menu).
const DUMP_DIR = path.join(scriptDir, '..', '..', 'data', 'dump')
const ID_MAP_FILE = path.join(scriptDir, '..', '..', 'data', 'seedIdMap.json')
const LOCALES = ['it', 'en'] as const
const ALWAYS_OMIT = new Set(['id', 'createdAt', 'updatedAt', 'localizedSlugs'])

function isLocaleMap(v: unknown): v is Record<string, unknown> {
  return (
    v !== null &&
    typeof v === 'object' &&
    !Array.isArray(v) &&
    Object.keys(v as object).length > 0 &&
    Object.keys(v as object).every((k) => (LOCALES as readonly string[]).includes(k))
  )
}

function forLocale(doc: Record<string, unknown>, locale: string): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(doc)) {
    if (ALWAYS_OMIT.has(k)) continue
    out[k] = isLocaleMap(v) ? v[locale] : v
  }
  return out
}

if (!fs.existsSync(ID_MAP_FILE)) {
  console.error(`${ID_MAP_FILE} not found — run seed-create.ts first.`)
  process.exit(1)
}
const idMaps: IdMaps = JSON.parse(fs.readFileSync(ID_MAP_FILE, 'utf-8'))

requireTargetConfig()
console.log(`Target: ${process.env.SEED_TARGET_URL}\n`)

let unresolvedCount = 0
const onUnresolved = (id: string) => {
  unresolvedCount++
  console.warn(`  ⚠ unresolved reference: ${id}`)
}

const collectionFiles = fs
  .readdirSync(DUMP_DIR)
  .filter((f) => f.endsWith('.json') && !f.startsWith('global-') && f !== 'media.json')
  .sort()

for (const file of collectionFiles) {
  const slug = file.replace(/\.json$/, '')
  const docs: Record<string, unknown>[] = JSON.parse(fs.readFileSync(path.join(DUMP_DIR, file), 'utf-8'))
  const map = idMaps[slug] ?? {}
  if (docs.length === 0) continue

  let patched = 0
  let failed = 0

  for (const doc of docs) {
    const localId = doc.id as string
    const onlineId = map[localId]
    if (!onlineId) {
      console.error(`  ✗ ${slug} [${localId}]: no online id — was it created in seed-create.ts?`)
      failed++
      continue
    }

    let ok = true
    for (const locale of LOCALES) {
      const body = remapForPatch(forLocale(doc, locale), idMaps, onUnresolved) as Record<string, unknown>
      const res = await targetPatch(`/api/${slug}/${onlineId}?locale=${locale}`, body)
      if (!res.ok) {
        console.error(`  ✗ ${slug} [${localId}] (${locale}): ${res.status} ${JSON.stringify(res.data?.errors ?? res.data)}`)
        ok = false
      }
    }
    if (ok) patched++
    else failed++
  }

  console.log(`✓ ${slug}: ${patched}/${docs.length} patched${failed ? `, ${failed} failed` : ''}`)
}

// ─── Globals ─────────────────────────────────────────────────────────────
const globalFiles = fs.readdirSync(DUMP_DIR).filter((f) => f.startsWith('global-') && f.endsWith('.json'))

for (const file of globalFiles) {
  const slug = file.replace(/^global-/, '').replace(/\.json$/, '')
  const doc: Record<string, unknown> = JSON.parse(fs.readFileSync(path.join(DUMP_DIR, file), 'utf-8'))

  let ok = true
  for (const locale of LOCALES) {
    const body = remapForPatch(forLocale(doc, locale), idMaps, onUnresolved) as Record<string, unknown>
    const res = await targetPostGlobal(slug, body, locale)
    if (!res.ok) {
      console.error(`  ✗ global ${slug} (${locale}): ${res.status} ${JSON.stringify(res.data?.errors ?? res.data)}`)
      ok = false
    }
  }
  console.log(`${ok ? '✓' : '✗'} global ${slug}`)
}

console.log(`\nDone${unresolvedCount ? ` — ${unresolvedCount} unresolved references logged above` : ''}.`)
