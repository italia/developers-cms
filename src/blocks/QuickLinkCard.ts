import type { Block } from 'payload'

export const QuickLinkCard: Block = {
  slug: 'quick-link-card',
  labels: { singular: 'Resources List', plural: 'Resources Lists' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'linkToResource',
      type: 'relationship',
      relationTo: ['articles', 'insights', 'webinar-items', 'story-items', 'pages'],
      hasMany: true,
    },
  ],
}
