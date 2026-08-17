import { existsSync, renameSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const cmsRoot = join(scriptDir, '..', '..')
const source = join(cmsRoot, 'schema.graphql')
const destination = join(cmsRoot, '..', 'website', 'src', 'graphql', 'schema.graphql')

if (!existsSync(source)) {
  console.error(`Source file not found: ${source}`)
  process.exit(1)
}

renameSync(source, destination)
console.log(`Moved ${source} -> ${destination}`)
