import type { CollectionConfig } from 'payload'

export const WebinarTopic: CollectionConfig = {
  slug: 'webinar-topics',
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
