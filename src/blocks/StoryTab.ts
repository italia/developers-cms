import type { Block } from 'payload'

export const StoryTab: Block = {
  slug: 'story-tab',
  labels: { singular: 'Story Tab', plural: 'Story Tabs' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'news',
      type: 'relationship',
      relationTo: 'story-items',
      hasMany: true,
    },
  ],
}
