import type { CollectionConfig } from 'payload'

export const StoryTopic: CollectionConfig = {
  slug: 'story-topics',
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
