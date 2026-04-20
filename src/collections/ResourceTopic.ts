import type { CollectionConfig } from 'payload'

export const ResourceTopic: CollectionConfig = {
  slug: 'resource-topics',
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
