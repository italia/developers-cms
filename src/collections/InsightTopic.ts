import type { CollectionConfig } from 'payload'

export const InsightTopic: CollectionConfig = {
  slug: 'insight-topics',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label'],
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
