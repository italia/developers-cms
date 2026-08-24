# Dump & seed content to another Payload instance

Copies this instance's content (not schema — that's handled by the normal `payload migrate`
workflow) onto another Payload instance reachable only via its REST API, e.g. the online CMS.

## How it works

Payload's REST create endpoint doesn't honor a client-supplied `id`, so documents can't be
copied 1:1 by id — every relationship/upload/internal-link-in-rich-text reference has to be
remapped from "local id" to "the id the target assigned when it created that doc". This mirrors
the two-phase pattern `import/` already uses for the DatoCMS migration (create shells + build an
id map, then patch in the full content once every id is resolvable) — just Payload→Payload here,
so there's no content-shape conversion needed, only id remapping. See `src/scripts/seed-lib.ts`
for the remapper itself.

Media is a special case: creating a media doc via REST requires uploading the file, and the
target's media library is assumed to already have the right files (e.g. from its own asset
import). So media is never wiped/recreated — `seed-create.ts` matches local media docs to the
target's existing ones **by filename** and uses that id wherever something references an upload.
If a local file has no filename match on the target, references to it are left unresolved
(logged, not fatal) rather than silently broken.

## Usage

```bash
# 1. Dump this instance's content
bun run src/scripts/dump-content.ts        # writes cms/data/dump/*.json

# 2. Point at the target instance
export SEED_TARGET_URL=https://your-online-cms.example.com
export SEED_TARGET_API_KEY=...

# 3. (only if the target already has content you want replaced) wipe it —
#    asks for a typed "yes" confirmation before deleting anything; never touches media or globals
bun run src/scripts/seed-wipe.ts

# 4. Create shells + build cms/data/seedIdMap.json
bun run src/scripts/seed-create.ts

# 5. Patch in full content now that every id is resolvable, and seed globals
bun run src/scripts/seed-content.ts
```

Re-running `seed-create.ts`/`seed-content.ts` is not idempotent (they always create new docs) —
run `seed-wipe.ts` first if repeating a run against a target that already has a previous
attempt's docs on it.

`SEED_TARGET_URL`/`SEED_TARGET_API_KEY` are deliberately separate from this app's own `.env`
(`DATABASE_URL`, etc.) so there's no chance of a destructive script accidentally targeting the
wrong instance.

`users` and `feedback` are excluded from the dump on purpose (admin accounts / visitor form
submissions aren't content to replicate).
