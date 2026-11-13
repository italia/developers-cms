import type { Block } from 'payload'

/**
 * Gestione dei cookie di terze parti (in fondo alla privacy policy): il sito
 * mostra il servizio per cui l'utente ha dato il consenso e il pulsante per
 * revocarlo.
 */
export const ThirdPartyCookie: Block = {
  slug: 'third-party-cookie',
  labels: { singular: 'Third Party Cookies', plural: 'Third Party Cookies' },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: { description: 'Nome del servizio, es. "YouTube".' },
    },
    {
      name: 'description',
      type: 'text',
      admin: { description: 'Dettaglio del servizio, es. "per la visualizzazione di video".' },
    },
    {
      name: 'cookiePrefix',
      type: 'text',
      admin: {
        description:
          'Chiave del servizio usata dal sito per ricordare il consenso (predefinita: "youtube").',
      },
    },
  ],
}
