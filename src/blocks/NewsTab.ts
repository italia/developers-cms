import type { Block } from 'payload'

export const NewsTab: Block = {
  slug: 'news-tab',
  labels: { singular: 'News Tab', plural: 'News Tabs' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'news',
      type: 'relationship',
      relationTo: 'news-items',
      hasMany: true,
    },
  ],
}
