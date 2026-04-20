import type { Block } from 'payload'

export const InternalLink: Block = {
  slug: 'internal-link',
  labels: { singular: 'Internal Link', plural: 'Internal Links' },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'linkTo',
      type: 'relationship',
      relationTo: ['pages', 'articles', 'insights', 'webinar-items', 'story-items', 'catalogues'],
      required: true,
    },
  ],
}
