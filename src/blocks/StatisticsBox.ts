import type { Block } from 'payload'

export const StatisticsBox: Block = {
  slug: 'statistics-box',
  labels: { singular: 'Statistics Box', plural: 'Statistics Boxes' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
  ],
}
