import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '../payload.config'
import { type IdMaps, remapForCreate, requireTargetConfig, targetGet, targetPost } from './seed-lib'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))

// Phase 1 of seeding cms/data/dump/ onto SEED_TARGET_URL: creates a shell doc for every
// dumped record (relationships/uploads that can't resolve yet — i.e. point at a collection
// not seeded so far — are dropped, not sent broken) and records local id -> online id into
// cms/data/seedIdMap.json. seed-content.ts then does a second pass with every id resolvable,
// patching in the fields this phase had to drop. Run seed-wipe.ts first if the target already
// has content from a previous run.
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

const { url } = requireTargetConfig()
console.log(`Target: ${url}\n`)

const idMaps: IdMaps = fs.existsSync(ID_MAP_FILE) ? JSON.parse(fs.readFileSync(ID_MAP_FILE, 'utf-8')) : {}

function saveIdMaps() {
  fs.writeFileSync(ID_MAP_FILE, JSON.stringify(idMaps, null, 2))
}

// ─── Media: matched by filename on the target, never created here ─────────
const mediaDumpFile = path.join(DUMP_DIR, 'media.json')
if (fs.existsSync(mediaDumpFile)) {
  const localMedia: { id: string; filename: string }[] = JSON.parse(fs.readFileSync(mediaDumpFile, 'utf-8'))

  const onlineByFilename = new Map<string, string>()
  let page = 1
  let hasNextPage = true
  while (hasNextPage) {
    const res = await targetGet(`/api/media?limit=200&page=${page}&depth=0`)
    for (const doc of res.docs ?? []) onlineByFilename.set(doc.filename, doc.id)
    hasNextPage = res.hasNextPage
    page++
  }

  idMaps.media = {}
  let matched = 0
  for (const m of localMedia) {
    const onlineId = onlineByFilename.get(m.filename)
    if (onlineId) {
      idMaps.media[m.id] = onlineId
      matched++
    } else {
      console.warn(`  ⚠ media "${m.filename}" not found on target — references to it will be left unresolved`)
    }
  }
  console.log(`✓ media: matched ${matched}/${localMedia.length} by filename`)
  saveIdMaps()
}

// ─── Everything else: create a shell doc per record ────────────────────────
// Processed in payload.config.ts's own declared collection order (taxonomies, then entities,
// then content — see the "Taxonomies" / "Entities" / "Content" comments there), not
// alphabetically: a required relationship (e.g. StoryItem.topic -> story-topics) needs its
// target collection's idMap populated *before* the referencing collection is created, or
// create fails outright rather than just missing that one field.
const payloadForOrder = await getPayload({ config })
const declaredOrder = payloadForOrder.config.collections.map((c) => c.slug)

const availableFiles = new Set(
  fs.readdirSync(DUMP_DIR).filter((f) => f.endsWith('.json') && !f.startsWith('global-') && f !== 'media.json'),
)
const collectionFiles = declaredOrder
  .map((slug) => `${slug}.json`)
  .filter((f) => availableFiles.has(f))
// Any dump file for a collection not found in the current local config (shouldn't normally
// happen — dump-content.ts derives its file list from this same config) goes last.
for (const f of availableFiles) {
  if (!collectionFiles.includes(f)) collectionFiles.push(f)
}

for (const file of collectionFiles) {
  const slug = file.replace(/\.json$/, '')
  const docs: Record<string, unknown>[] = JSON.parse(fs.readFileSync(path.join(DUMP_DIR, file), 'utf-8'))
  if (docs.length === 0) {
    console.log(`- ${slug}: no docs`)
    continue
  }

  idMaps[slug] ??= {}
  let created = 0
  let failed = 0

  for (const doc of docs) {
    const localId = doc.id as string
    let onlineId: string | undefined

    for (const locale of LOCALES) {
      const body = remapForCreate(forLocale(doc, locale), idMaps) as Record<string, unknown>

      if (!onlineId) {
        const res = await targetPost(`/api/${slug}?locale=${locale}`, body)
        if (!res.ok) {
          console.error(`  ✗ ${slug} [${localId}] (${locale}): ${res.status} ${JSON.stringify(res.data?.errors ?? res.data)}`)
          failed++;
          break
        }
        onlineId = res.data.doc.id
      } else {
        const res = await fetch(`${url}/api/${slug}/${onlineId}?locale=${locale}`, {
          method: 'PATCH',
          headers: { Authorization: `users API-Key ${requireTargetConfig().apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
        if (!res.ok) {
          console.error(`  ✗ ${slug} [${localId}] (${locale}): ${res.status} ${JSON.stringify(await res.json())}`)
        }
      }
    }

    if (onlineId) {
      idMaps[slug][localId] = onlineId
      created++
    }
  }

  console.log(`✓ ${slug}: ${created}/${docs.length} created${failed ? `, ${failed} failed` : ''}`)
  saveIdMaps()
}

console.log(`\nDone — id map written to ${ID_MAP_FILE}`)
console.log('Next: bun run src/scripts/seed-content.ts')
process.exit(0)
