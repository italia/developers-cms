import type { Block } from 'payload'

export const ListCollection: Block = {
  slug: 'list-collection',
  labels: { singular: 'Section Related Article', plural: 'Sections Related Articles' },
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
      name: 'content',
      type: 'relationship',
      relationTo: ['articles', 'insights', 'webinar-items', 'story-items', 'pages'],
      hasMany: true,
    },
  ],
}
