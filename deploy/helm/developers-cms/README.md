# developers-cms (Helm chart)

Chart per il deploy di **Developers CMS** (Payload 3 / Next.js) su Kubernetes.
PostgreSQL e media (PVC) sono gestiti esternamente al chart.

I valori reali per ogni ambiente (DATABASE_URL, PAYLOAD_SECRET, seed/apiKey, ingress)
**non** stanno qui: vivono nel repo `k8s-configuration` sotto
`helm/developers-cms/{test,prod}/values.yaml` e si passano con `-f`.

## Cosa fa il chart

| Risorsa | Note |
|---|---|
| Deployment + Service | Next/Payload sulla porta `app.port` (3000). `SITE_URL` per CORS/CSRF derivato dall'ingress se non impostato. |
| Ingress | opzionale, con annotazioni cert-manager (HTTP-01). |
| Secret `-env` | `DATABASE_URL`, `PAYLOAD_SECRET` (hook pre-install, montato come `envFrom`). |
| PVC `-media` | persistenza dei media (`upload: true`). `resource-policy: keep`. |
| Job `-migrate` | hook **pre-install/pre-upgrade**: esegue `payload migrate`, poi verifica che ogni file di `src/migrations` sia registrato in `payload_migrations` (altrimenti il Job fallisce e l'upgrade si ferma). |
| Job `-seed` | hook **post-install/post-upgrade**: crea il primo utente e gli assegna una **API key** deterministica. Idempotente. |

## Installazione (prima volta, a mano)

```sh
helm upgrade --install developers-cms-test deploy/helm/developers-cms \
  -n developers-cms-test --create-namespace \
  -f /path/to/k8s-configuration/helm/developers-cms/test/values.yaml
```

## Deploy automatico (CI)

Dopo la prima installazione i deploy li fa la CI (`.github/workflows/ci.yml`):

| Evento | Ambiente | Release / namespace | Immagine |
|---|---|---|---|
| push su `main` (merge di una PR) | test — https://cms-test.developers.italia.it | `developers-cms-test` | `sha-<commit>` |
| tag `vX.Y.Z` | produzione — https://cms.developers.italia.it | `developers-cms` | `X.Y.Z` |

Per rilasciare in produzione basta il tag:

```sh
git tag v1.2.3 && git push origin v1.2.3
```

Il deploy parte solo se integration ed E2E passano. La CI esegue
`helm upgrade --reset-then-reuse-values --set-string app.image.tag=...` con il chart
pubblicato su `oci://ghcr.io/italia/charts/developers-cms`: cambia solo l'immagine,
i values dell'ambiente restano quelli applicati a mano da `k8s-configuration`. Il job
`-migrate` gira a ogni deploy; se fallisce l'upgrade si ferma (`--atomic`) e il
Deployment resta sulla versione precedente.

Credenziali: secret `KUBECONFIG_DEVELOPERS_CMS_TEST` e `KUBECONFIG_DEVELOPERS_CMS` negli
environment GitHub `test` (solo branch `main`) e `production` (solo tag `v*`), kubeconfig
del ServiceAccount `gh-deployer` con ruolo `admin` sul solo namespace
(`k8s-configuration/manifests/developers-cms-rbac-ci.yaml`).

Per cambiare i values di un ambiente si rifà l'upgrade a mano con `-f`, mantenendo
l'immagine in esercizio (altrimenti si torna al tag scritto nel file):

```sh
TAG=$(helm get values developers-cms -n developers-cms -o json | jq -r .app.image.tag)
helm upgrade developers-cms oci://ghcr.io/italia/charts/developers-cms --version "$TAG" \
  -n developers-cms -f /path/to/k8s-configuration/helm/developers-cms/prod/values.yaml \
  --set-string app.image.tag="$TAG"
```

## Seed: utente + API key

Con `seed.enabled=true` il job post-deploy:

1. crea il primo utente (`POST /api/users/first-register`) con `seed.user.email` / `seed.user.password` — no-op se esiste già;
2. fa login e abilita la API key sull'utente impostando **`seed.apiKey`** come valore in chiaro.

Quella `apiKey` è la credenziale che il repo di import (e qualunque client) usa per le API
in lettura e scrittura:

```
Authorization: users API-Key <seed.apiKey>
```

```sh
curl -H "Authorization: users API-Key <apiKey>" https://<host>/api/articles      # lettura
curl -X POST -H "Authorization: users API-Key <apiKey>" -H "Content-Type: application/json" \
  -d '{"title":"..."}' https://<host>/api/articles                               # scrittura
```

## Migrations (baseline)

Lo schema viene creato dal job `-migrate` (`payload migrate`) come hook pre-deploy.

> Nota storica: le migration originali contenevano solo `ALTER TABLE` (idType → uuid),
> senza `CREATE TABLE`, e fallivano su DB vuoto. Sono state sostituite da una **baseline
> completa** (`src/migrations/2026..._initial.ts`, 283 `CREATE TABLE`) verificata in locale
> su Postgres vuoto. Per rigenerarla da zero:
>
> ```sh
> # contro un Postgres VUOTO dedicato
> DATABASE_URL=postgres://... node node_modules/.bin/payload migrate:create initial --force-accept-warning
> ```

## ⚠️ Path dei media

`media.persistence.mountPath` (default `/app/media`) deve coincidere con la `staticDir`
effettiva della collection `Media`. Il Dockerfile in questo repo crea `/app/media` e l'app
gira con WORKDIR `/app`. Se in futuro si imposta una `staticDir` esplicita nella collection,
aggiornare di conseguenza il `mountPath`. Per scenari multi-replica passare a object storage
(`@payloadcms/storage-azure` / `-s3`) invece del PVC `ReadWriteOnce`.

## Immagine

L'immagine (`Dockerfile` in root) NON è una build standalone: include `node_modules` + `src`
così la CLI `payload` può girare in cluster (migrate/seed). Runtime: **node** (la CLI `payload`
fa comunque `spawn node`, quindi node deve essere presente). Le dipendenze si installano con
bun (lockfile `bun.lock`); build e runtime girano su node. Tutte le stage sono glibc per
compatibilità dei moduli nativi (sharp).

## Valori principali

Vedi `values.yaml`. I più rilevanti: `app.image.*`, `app.databaseUrl`, `app.payloadSecret`,
`app.siteUrl`, `media.persistence.*`, `migrate.*`, `seed.*`, `ingress.*`, `imagePullSecrets`.
