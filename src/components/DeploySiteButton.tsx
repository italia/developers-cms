'use client'
import { Button, toast } from '@payloadcms/ui'
import React, { useState } from 'react'

/**
 * Pulsante in cima alla dashboard: manda online le modifiche salvate facendo ripartire
 * la build del sito (vedi src/endpoints/deploySite.ts).
 */
export const DeploySiteButton: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const publish = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/deploy-site', { method: 'POST', credentials: 'include' })
      const body = (await res.json().catch(() => ({}))) as { message?: string }
      if (res.ok) {
        toast.success('Pubblicazione avviata: il sito si aggiorna tra qualche minuto.')
      } else {
        toast.error(body.message || `Pubblicazione non riuscita (${res.status})`)
      }
    } catch {
      toast.error('Pubblicazione non riuscita: CMS non raggiungibile.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ marginBottom: 'var(--base)' }}>
      <Button disabled={loading} onClick={publish}>
        {loading ? 'Pubblicazione in corso…' : 'Pubblica il sito'}
      </Button>
      <p style={{ margin: 0 }}>
        Manda online tutte le modifiche salvate. La ricostruzione del sito richiede qualche minuto.
      </p>
    </div>
  )
}
