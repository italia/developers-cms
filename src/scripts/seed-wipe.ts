import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline/promises'
import { fileURLToPath } from 'node:url'
import { requireTargetConfig, targetDelete } from './seed-lib'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))

// Deletes every doc in every dumped collection on the TARGET Payload instance (SEED_TARGET_URL),
// so seed-create.ts + seed-content.ts can recreate everything fresh with new ids. `media` is
// never touched here — see dump-content.ts / seed-create.ts for why media is matched by
// filename instead of wiped and recreated.
const DUMP_DIR = path.join(scriptDir, '..', '..', 'data', 'dump')

// `users` (which also carries each account's API key, via useAPIKey on the collection) is
// never wiped on the target — dump-content.ts never dumps it in the first place, but this is
// enforced here too, explicitly, so this script stays safe even if a users.json ever ends up
// in the dump dir.
const NEVER_WIPE = new Set(['users'])

const { url } = requireTargetConfig()

const slugs = fs
  .readdirSync(DUMP_DIR)
  .filter((f) => f.endsWith('.json') && !f.startsWith('global-') && f !== 'media.json')
  .map((f) => f.replace(/\.json$/, ''))
  .filter((slug) => !NEVER_WIPE.has(slug))

console.log(`Target: ${url}`)
console.log(`About to permanently delete ALL docs in: ${slugs.join(', ')}`)
console.log('(media, globals, users/api keys are left alone by this script)')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const answer = await rl.question('Type "yes" to proceed: ')
rl.close()

if (answer.trim().toLowerCase() !== 'yes') {
  console.log('Aborted.')
  process.exit(1)
}

for (const slug of slugs) {
  const res = await targetDelete(`/api/${slug}?where[id][exists]=true`)
  if (!res.ok) {
    console.error(`✗ ${slug}: ${res.status} ${JSON.stringify(res.data)}`)
  } else {
    console.log(`✓ ${slug}: ${res.data?.message ?? 'deleted'}`)
  }
}

console.log('\nDone.')
