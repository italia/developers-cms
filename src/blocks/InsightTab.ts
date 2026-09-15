import type { Block } from 'payload'

export const InsightTab: Block = {
  slug: 'insight-tab',
  labels: { singular: 'Insight Tab', plural: 'Insight Tabs' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Insights',
      type: 'relationship',
      relationTo: 'insights',
      hasMany: true,
    },
  ],
}
