import type { Block } from 'payload'

export const ListItem: Block = {
  slug: 'list-item',
  labels: { singular: 'List Item', plural: 'List Items' },
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
