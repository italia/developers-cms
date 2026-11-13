import type { Field } from 'payload'

/**
 * Data mostrata dal sito come "Ultimo aggiornamento".
 *
 * Viene aggiornata a ogni salvataggio (vedi `setLastPublishedAt`); la
 * redazione può comunque impostarla a mano, ad esempio per conservare la data
 * di pubblicazione originale di un contenuto migrato.
 */
export const lastPublishedAtField = (): Field => ({
  name: 'lastPublishedAt',
  type: 'date',
  admin: {
    position: 'sidebar',
    date: { pickerAppearance: 'dayAndTime' },
    description:
      'Mostrata sul sito come "Ultimo aggiornamento". Si aggiorna da sola a ogni salvataggio, a meno che non venga modificata a mano.',
  },
})
