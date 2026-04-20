import type { Block } from 'payload'

export const LinkBlock: Block = {
  slug: 'link-block',
  labels: { singular: 'Link Block', plural: 'Link Blocks' },
  fields: [
    {
      name: 'link',
      type: 'relationship',
      relationTo: ['pages', 'articles', 'insights', 'webinar-items', 'story-items', 'catalogues'],
    },
    {
      name: 'externalUrl',
      type: 'text',
    },
  ],
}
