import type { Block } from 'payload'

export const UseCaseBlock: Block = {
  slug: 'use-case-block',
  labels: { singular: 'Use Case Block', plural: 'Use Case Blocks' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'useCases',
      type: 'relationship',
      relationTo: ['articles', 'insights', 'webinar-items', 'story-items', 'pages'],
      hasMany: true,
    },
  ],
}
