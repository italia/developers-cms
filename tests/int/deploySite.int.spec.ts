import type { PayloadRequest } from 'payload'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { deploySite } from '@/endpoints/deploySite'

const HOOK = 'https://api.vercel.com/v1/integrations/deploy/prj_test/secret'

const makeReq = (user: unknown) =>
  ({
    user,
    payload: { logger: { info: vi.fn(), error: vi.fn() } },
  }) as unknown as PayloadRequest

describe('POST /api/deploy-site', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('rifiuta chi non e autenticato senza chiamare Vercel', async () => {
    vi.stubEnv('VERCEL_DEPLOY_HOOK_URL', HOOK)
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const res = await deploySite.handler(makeReq(null))

    expect(res.status).toBe(401)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('risponde 503 se l hook non e configurato', async () => {
    vi.stubEnv('VERCEL_DEPLOY_HOOK_URL', '')
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const res = await deploySite.handler(makeReq({ email: 'a@b.it' }))

    expect(res.status).toBe(503)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('chiama l hook in POST e non ne rivela l indirizzo', async () => {
    vi.stubEnv('VERCEL_DEPLOY_HOOK_URL', HOOK)
    const fetchMock = vi.fn().mockResolvedValue(new Response('{}', { status: 201 }))
    vi.stubGlobal('fetch', fetchMock)
    const req = makeReq({ email: 'a@b.it' })

    const res = await deploySite.handler(req)

    expect(res.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock.mock.calls[0][0]).toBe(HOOK)
    expect(fetchMock.mock.calls[0][1].method).toBe('POST')
    expect(JSON.stringify(await res.json())).not.toContain('prj_test')
    const logged = JSON.stringify((req.payload.logger.info as ReturnType<typeof vi.fn>).mock.calls)
    expect(logged).not.toContain('prj_test')
  })

  it('risponde 502 se Vercel rifiuta o non e raggiungibile', async () => {
    vi.stubEnv('VERCEL_DEPLOY_HOOK_URL', HOOK)
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('no', { status: 404 })))
    expect((await deploySite.handler(makeReq({ email: 'a@b.it' }))).status).toBe(502)

    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error(`connect failed ${HOOK}`)))
    const req = makeReq({ email: 'a@b.it' })
    const res = await deploySite.handler(req)
    expect(res.status).toBe(502)
    const logged = JSON.stringify((req.payload.logger.error as ReturnType<typeof vi.fn>).mock.calls)
    expect(logged).not.toContain('prj_test')
  })
})
