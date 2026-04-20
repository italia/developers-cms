import type { Block } from 'payload'

export const MenuItem: Block = {
  slug: 'menu-item',
  labels: { singular: 'Menu Item', plural: 'Menu Items' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'pointsTo',
      type: 'relationship',
      relationTo: ['pages', 'articles', 'insights', 'webinar-items', 'story-items', 'catalogues'],
      required: true,
    },
  ],
}
