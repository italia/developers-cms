import type { CollectionConfig } from 'payload'

export const MacroTopic: CollectionConfig = {
  slug: 'macro-topics',
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
