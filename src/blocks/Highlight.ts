import type { Block } from 'payload'

export const Highlight: Block = {
  slug: 'highlight',
  labels: { singular: 'Highlight', plural: 'Highlights' },
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
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'kpiElement',
      type: 'relationship',
      relationTo: 'kpi-elements',
      hasMany: true,
    },
  ],
}
