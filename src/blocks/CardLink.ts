import type { Block } from 'payload'
import { LinkBlock } from './LinkBlock'

export const CardLink: Block = {
  slug: 'card-link',
  labels: { singular: 'Card Link', plural: 'Card Links' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'blocks',
      blocks: [LinkBlock],
      maxRows: 1,
      required: true,
    },
  ],
}
