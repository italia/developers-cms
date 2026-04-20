import type { Block } from 'payload'

export const TopicsBlock: Block = {
  slug: 'topics-block',
  labels: { singular: 'Metadata Content Container', plural: 'Metadata Content Containers' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'topics',
      type: 'relationship',
      relationTo: ['article-topics', 'news-topics', 'story-topics', 'insight-topics', 'resource-topics', 'webinar-topics'],
      hasMany: true,
    },
  ],
}
