import type { Block } from 'payload'

export const UseCaseContainer: Block = {
  slug: 'use-case-container',
  labels: { singular: 'Cards Container', plural: 'Cards Containers' },
  fields: [
    {
      name: 'useCases',
      type: 'relationship',
      relationTo: ['articles', 'insights', 'webinar-items', 'story-items', 'pages'],
      hasMany: true,
    },
  ],
}
