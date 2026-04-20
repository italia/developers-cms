import type { Block } from 'payload'
import { Blockquote } from './Blockquote'

export const ListBlockquote: Block = {
  slug: 'list-blockquote',
  labels: { singular: 'Cards Blockquote', plural: 'Cards Blockquotes' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [Blockquote],
    },
  ],
}
