import type { Block } from 'payload'

export const DataContainer: Block = {
  slug: 'data-container',
  labels: { singular: 'Data Container', plural: 'Data Containers' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'info',
      type: 'text',
      required: true,
    },
    {
      name: 'iconSelect',
      type: 'text',
      required: true,
    },
  ],
}
