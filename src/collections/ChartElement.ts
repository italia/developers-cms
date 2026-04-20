import type { CollectionConfig } from 'payload'

export const ChartElement: CollectionConfig = {
  slug: 'chart-elements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'chartData',
      type: 'json',
    },
  ],
}
