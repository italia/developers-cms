import type { Endpoint } from 'payload'

/**
 * POST /api/deploy-site
 *
 * Fa ripartire la build del sito chiamando il Deploy Hook di Vercel.
 * Il sito e' statico: senza una nuova build le modifiche salvate nel CMS non vanno online.
 *
 * L'indirizzo dell'hook e' un segreto (chi lo conosce puo' far partire una build): sta solo
 * in VERCEL_DEPLOY_HOOK_URL e non viene mai restituito al client ne' scritto nei log.
 */
export const deploySite: Endpoint = {
  path: '/deploy-site',
  method: 'post',
  handler: async (req) => {
    if (!req.user) {
      return Response.json({ message: 'Non autorizzato' }, { status: 401 })
    }

    const hookUrl = process.env.VERCEL_DEPLOY_HOOK_URL
    if (!hookUrl) {
      return Response.json(
        { message: 'Pubblicazione non configurata: manca VERCEL_DEPLOY_HOOK_URL' },
        { status: 503 },
      )
    }

    try {
      const res = await fetch(hookUrl, { method: 'POST', signal: AbortSignal.timeout(15_000) })
      if (!res.ok) {
        req.payload.logger.error(`deploy-site: Vercel ha risposto ${res.status}`)
        return Response.json(
          { message: `Vercel ha rifiutato la richiesta (${res.status})` },
          { status: 502 },
        )
      }
    } catch (err) {
      const reason = err instanceof Error ? err.name : 'errore sconosciuto'
      req.payload.logger.error(`deploy-site: chiamata a Vercel fallita (${reason})`)
      return Response.json({ message: 'Vercel non raggiungibile' }, { status: 502 })
    }

    req.payload.logger.info(`deploy-site: build richiesta da ${req.user.email}`)
    return Response.json({ message: 'Build avviata' })
  },
}
