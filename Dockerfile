# Immagine di produzione per Developers CMS (Payload 3 / Next.js).
#
# Una sola immagine usata per tre scopi (vedi chart Helm in deploy/helm/developers-cms):
#   - web:     `next start`                              (default CMD)
#   - migrate: `node node_modules/.bin/payload migrate`   (job pre-deploy)
#   - seed:    `node /seed/seed.mjs`                       (job post-deploy: utente + API key)
#
# Runtime: node (la CLI `payload` richiede node anche se lanciata da bun → spawn node).
# Le dipendenze si installano con bun (lockfile bun.lock); build e runtime girano su node.
# Tutte le stage sono glibc (debian) per compatibilità dei moduli nativi (es. sharp).
# NON è una build "standalone" trimmata: servono node_modules + src (config Payload +
# migrations) per poter eseguire la CLI `payload` in cluster.

FROM oven/bun:1.3-debian AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM node:22-bookworm-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_OPTIONS=--max-old-space-size=4000
RUN node_modules/.bin/next build

FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -m nextjs

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/src ./src

# La collection Media scrive i media qui (montare un PVC su /app/media in produzione).
RUN mkdir -p /app/media && chown -R nextjs:nodejs /app/media /app/.next

USER nextjs
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
