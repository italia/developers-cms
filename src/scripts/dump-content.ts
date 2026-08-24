import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '../payload.config'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))

// Dumps every collection + global from the LOCAL Payload instance into cms/data/dump/, one
// JSON file per collection/global. Used as the source for seed-create.ts + seed-content.ts,
// which recreate this content on another Payload instance (see cms/README-seed.md).
//
// - locale: 'all' + depth: 0 keeps every localized value and leaves relationships/uploads as
//   raw ids (not populated docs) — the portable, unambiguous shape the seed scripts need.
// - `users` and `feedback` are skipped on purpose: admin accounts (password hashes) and
//   visitor form submissions aren't "content" you want replicated onto another instance.
const EXCLUDED_COLLECTIONS = new Set(['users', 'feedback'])
// Payload's own internal bookkeeping collections (migrations log, admin UI preferences,
// locked-document editing state, key/value store) — not app content, never seed these.
const isSystemCollection = (slug: string) => slug.startsWith('payload-')

const OUT_DIR = path.join(scriptDir, '..', '..', 'data', 'dump')
fs.mkdirSync(OUT_DIR, { recursive: true })

const payload = await getPayload({ config })

for (const collection of payload.config.collections) {
  const slug = collection.slug
  if (EXCLUDED_COLLECTIONS.has(slug) || isSystemCollection(slug)) {
    console.log(`- ${slug}: skipped`)
    continue
  }

  const docs: unknown[] = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const res = await payload.find({
      collection: slug as Parameters<typeof payload.find>[0]['collection'],
      locale: 'all',
      depth: 0,
      limit: 100,
      page,
      pagination: true,
    })
    docs.push(...res.docs)
    hasNextPage = res.hasNextPage
    page++
  }

  fs.writeFileSync(path.join(OUT_DIR, `${slug}.json`), JSON.stringify(docs, null, 2))
  console.log(`✓ ${slug}: ${docs.length} docs`)
}

for (const global of payload.config.globals) {
  const slug = global.slug
  const doc = await payload.findGlobal({
    slug: slug as Parameters<typeof payload.findGlobal>[0]['slug'],
    locale: 'all',
    depth: 0,
  })
  fs.writeFileSync(path.join(OUT_DIR, `global-${slug}.json`), JSON.stringify(doc, null, 2))
  console.log(`✓ global ${slug}`)
}

console.log(`\nDone — dump written to ${OUT_DIR}`)
process.exit(0)
