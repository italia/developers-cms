import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { requireTargetConfig, targetGet } from './seed-lib'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))

// Snapshots the `users` collection (accounts + API keys, via useAPIKey on the collection) as it
// currently stands on the TARGET Payload instance (SEED_TARGET_URL). seed-wipe.ts/seed-create.ts
// never touch `users` at all, so this isn't part of that pipeline — it's a standalone backup you
// can take before poking at a target's users by hand, so there's a record of what was there.
const OUT_FILE = path.join(scriptDir, '..', '..', 'data', 'remote_users_and_keys.json')

const { url } = requireTargetConfig()
console.log(`Target: ${url}`)

const docs: unknown[] = []
let page = 1
let hasNextPage = true

while (hasNextPage) {
  const res = await targetGet(`/api/users?limit=100&page=${page}&depth=0`)
  docs.push(...(res.docs ?? []))
  hasNextPage = res.hasNextPage
  page++
}

fs.writeFileSync(OUT_FILE, JSON.stringify(docs, null, 2))
console.log(`✓ users: ${docs.length} docs written to ${OUT_FILE}`)
