import type { CollectionConfig } from 'payload'

export const ArticleTopic: CollectionConfig = {
  slug: 'article-topics',
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
