type Args = {
  data?: Record<string, unknown>
  originalDoc?: Record<string, unknown> | null
}

const sameInstant = (a: unknown, b: unknown): boolean => {
  if (!a || !b) return !a && !b
  return new Date(a as string).getTime() === new Date(b as string).getTime()
}

/**
 * Hook `beforeChange` (collezioni e global): porta `lastPublishedAt` al
 * momento del salvataggio, a meno che chi salva non l'abbia impostata
 * esplicitamente a un valore diverso da quello già memorizzato.
 */
export const setLastPublishedAt = ({ data, originalDoc }: Args) => {
  if (!data) return data

  const incoming = data.lastPublishedAt
  const stored = originalDoc?.lastPublishedAt
  const setByHand = !!incoming && !sameInstant(incoming, stored)

  if (!setByHand) {
    data.lastPublishedAt = new Date().toISOString()
  }
  return data
}
