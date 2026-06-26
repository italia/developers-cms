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
| Job `-migrate` | hook **pre-install/pre-upgrade**: esegue `payload migrate`. |
| Job `-seed` | hook **post-install/post-upgrade**: crea il primo utente e gli assegna una **API key** deterministica. Idempotente. |

## Installazione

```sh
helm upgrade --install developers-cms-test deploy/helm/developers-cms \
  -n developers-cms-test --create-namespace \
  -f /path/to/k8s-configuration/helm/developers-cms/test/values.yaml
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
