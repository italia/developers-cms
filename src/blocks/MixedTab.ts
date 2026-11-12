import type { Block } from 'payload'

/**
 * Scheda che mescola contenuti interni (notizie, eventi, guide, articoli) e
 * notizie con link esterno, nell'ordine scelto dalla redazione.
 */
export const MixedTab: Block = {
  slug: 'mixed-tab',
  labels: { singular: 'Mixed Tab', plural: 'Mixed Tabs' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: ['story-items', 'webinar-items', 'insights', 'articles', 'news-items'],
      hasMany: true,
    },
  ],
}
