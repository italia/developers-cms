import type { Block } from 'payload'

export const Callout: Block = {
  slug: 'callout',
  labels: { singular: 'Note', plural: 'Notes' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
    },
  ],
}
