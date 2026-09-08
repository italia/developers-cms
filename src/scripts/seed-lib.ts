// Shared helpers for seed-create.ts / seed-content.ts / seed-wipe.ts — pushing a local
// Payload instance's dumped content (cms/data/dump/, from dump-content.ts) onto another
// Payload instance reachable only via its REST API.

// ─── Target config ──────────────────────────────────────────────────────
// Deliberately NOT named PAYLOAD_URL/PAYLOAD_API_KEY — those are this app's own local .env
// vars (DATABASE_URL-adjacent), and reusing the name here would make it too easy to point a
// destructive script at the wrong instance by accident.
export const TARGET_URL = process.env.SEED_TARGET_URL
export const TARGET_API_KEY = process.env.SEED_TARGET_API_KEY

export function requireTargetConfig(): { url: string; apiKey: string } {
  if (!TARGET_URL || !TARGET_API_KEY) {
    console.error('Missing SEED_TARGET_URL and/or SEED_TARGET_API_KEY env vars.')
    process.exit(1)
  }
  return { url: TARGET_URL.replace(/\/$/, ''), apiKey: TARGET_API_KEY }
}

const AUTH = () => ({
  Authorization: `users API-Key ${requireTargetConfig().apiKey}`,
  'Content-Type': 'application/json',
})

// The target isn't always guaranteed to answer with JSON — an empty 204 body, an auth failure
// or gateway timeout returning an HTML error page, etc. Parsing those with res.json() throws an
// opaque "Failed to parse JSON" with no indication of what the target actually sent back, so
// read the body as text first and fall back to surfacing it raw.
async function readBody(res: Response): Promise<any> {
  const text = await res.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return { raw: text.slice(0, 2000) }
  }
}

export async function targetGet(path: string): Promise<any> {
  const { url } = requireTargetConfig()
  const res = await fetch(`${url}${path}`, { headers: AUTH() })
  return readBody(res)
}

export async function targetPost(path: string, body: object): Promise<{ ok: boolean; status: number; data: any }> {
  const { url } = requireTargetConfig()
  const res = await fetch(`${url}${path}`, { method: 'POST', headers: AUTH(), body: JSON.stringify(body) })
  return { ok: res.ok, status: res.status, data: await readBody(res) }
}

export async function targetPatch(path: string, body: object): Promise<{ ok: boolean; status: number; data: any }> {
  const { url } = requireTargetConfig()
  const res = await fetch(`${url}${path}`, { method: 'PATCH', headers: AUTH(), body: JSON.stringify(body) })
  return { ok: res.ok, status: res.status, data: await readBody(res) }
}

// Payload's REST API updates globals via POST, not PATCH (unlike collections) — see
// import/lib/utils.ts's updateGlobal, which uses the same convention.
export async function targetPostGlobal(slug: string, body: object, locale: string): Promise<{ ok: boolean; status: number; data: any }> {
  return targetPost(`/api/globals/${slug}?locale=${locale}`, body)
}

export async function targetDelete(path: string): Promise<{ ok: boolean; status: number; data: any }> {
  const { url } = requireTargetConfig()
  const res = await fetch(`${url}${path}`, { method: 'DELETE', headers: AUTH() })
  return { ok: res.ok, status: res.status, data: await readBody(res) }
}

// ─── Id remapping ────────────────────────────────────────────────────────
// idMaps[collectionSlug][localId] = onlineId, filled in as each collection is seeded.
export type IdMaps = Record<string, Record<string, string>>

// Payload's uuid id type — real document ids look like this. Sub-document row ids inside
// blocks/array fields use a different (varchar, non-uuid) scheme, so this regex only ever
// matches genuine top-level document ids, never a block's own row id or prose text.
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

// A local id is effectively globally unique across all collections (random uuids), so a
// plain membership test — "does this string exist as a local id in *any* collection we've
// mapped so far" — is enough to safely recognize a relationship/upload reference without
// needing to know each collection's exact field schema up front.
function findOnlineId(localId: string, idMaps: IdMaps): string | undefined {
  for (const slug of Object.keys(idMaps)) {
    const hit = idMaps[slug]?.[localId]
    if (hit) return hit
  }
  return undefined
}

const DROP = Symbol('drop')

function walk(value: unknown, idMaps: IdMaps, dropUnresolved: boolean, onUnresolved?: (id: string) => void): unknown {
  if (typeof value === 'string') {
    if (!UUID_RE.test(value)) return value
    const mapped = findOnlineId(value, idMaps)
    if (mapped) return mapped
    onUnresolved?.(value)
    return dropUnresolved ? DROP : value
  }
  if (Array.isArray(value)) {
    return value.map((v) => walk(v, idMaps, dropUnresolved, onUnresolved)).filter((v) => v !== DROP)
  }
  if (value !== null && typeof value === 'object') {
    const obj = value as Record<string, unknown>
    // Polymorphic relationship shape: { relationTo: "<collection>", value: "<local id>" }
    if (typeof obj.relationTo === 'string' && typeof obj.value === 'string' && UUID_RE.test(obj.value)) {
      const mapped = idMaps[obj.relationTo]?.[obj.value]
      if (mapped) return { ...obj, value: mapped }
      onUnresolved?.(obj.value)
      return dropUnresolved ? DROP : obj
    }
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj)) {
      const walked = walk(v, idMaps, dropUnresolved, onUnresolved)
      if (walked !== DROP) out[k] = walked
    }
    return out
  }
  return value
}

// For building a create-phase body: any relationship/upload reference that can't be resolved
// *yet* (points to a collection not seeded so far) is dropped entirely — sending a bogus id
// would fail Postgres's real FK constraint. seed-content.ts's second pass fills it back in
// once every collection has been seeded and every id is resolvable.
export function remapForCreate(doc: unknown, idMaps: IdMaps): unknown {
  return walk(doc, idMaps, true)
}

// For the content-patch phase: everything should resolve by now; logs (via onUnresolved)
// anything that still doesn't, rather than silently dropping real content.
export function remapForPatch(doc: unknown, idMaps: IdMaps, onUnresolved: (id: string) => void): unknown {
  return walk(doc, idMaps, false, onUnresolved)
}
