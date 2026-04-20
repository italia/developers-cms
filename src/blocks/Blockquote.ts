import type { Block } from 'payload'

export const Blockquote: Block = {
  slug: 'blockquote',
  labels: { singular: 'Blockquote', plural: 'Blockquotes' },
  fields: [
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
  ],
}
