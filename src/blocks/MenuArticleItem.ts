import type { Block } from 'payload'

export const MenuArticleItem: Block = {
  slug: 'menu-article-item',
  labels: { singular: 'Menu Article Item', plural: 'Menu Article Items' },
  fields: [
    {
      name: 'label',
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
