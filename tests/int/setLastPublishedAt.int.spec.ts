import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { setLastPublishedAt } from '@/hooks/setLastPublishedAt'

const NOW = '2026-11-12T10:00:00.000Z'

describe('setLastPublishedAt', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(NOW))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('imposta la data al momento del salvataggio su un documento nuovo', () => {
    const data = setLastPublishedAt({ data: { title: 'x' } })
    expect(data?.lastPublishedAt).toBe(NOW)
  })

  it('aggiorna la data quando il form rimanda il valore già memorizzato', () => {
    const stored = '2026-07-22T08:00:00.000Z'
    const data = setLastPublishedAt({
      data: { title: 'x', lastPublishedAt: stored },
      originalDoc: { lastPublishedAt: stored },
    })
    expect(data?.lastPublishedAt).toBe(NOW)
  })

  it('considera uguali due scritture diverse dello stesso istante', () => {
    const data = setLastPublishedAt({
      data: { lastPublishedAt: '2026-07-22T10:00:00.000+02:00' },
      originalDoc: { lastPublishedAt: '2026-07-22T08:00:00.000Z' },
    })
    expect(data?.lastPublishedAt).toBe(NOW)
  })

  it('aggiorna la data quando il campo non viene inviato', () => {
    const data = setLastPublishedAt({
      data: { title: 'y' },
      originalDoc: { lastPublishedAt: '2026-07-22T08:00:00.000Z' },
    })
    expect(data?.lastPublishedAt).toBe(NOW)
  })

  it('conserva una data impostata a mano', () => {
    const manual = '2026-07-01T00:00:00.000Z'
    const data = setLastPublishedAt({
      data: { lastPublishedAt: manual },
      originalDoc: { lastPublishedAt: '2026-09-09T13:38:00.000Z' },
    })
    expect(data?.lastPublishedAt).toBe(manual)
  })

  it('conserva una data impostata a mano su un documento che non ne aveva', () => {
    const manual = '2026-07-01T00:00:00.000Z'
    const data = setLastPublishedAt({ data: { lastPublishedAt: manual }, originalDoc: {} })
    expect(data?.lastPublishedAt).toBe(manual)
  })
})
