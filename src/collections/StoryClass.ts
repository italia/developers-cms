import type { CollectionConfig } from 'payload'

export const StoryClass: CollectionConfig = {
  slug: 'story-classes',
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
    {
      name: 'sort',
      type: 'text',
    },
  ],
}
