import type { Block } from 'payload'

export const CardEditorialWithIcon: Block = {
  slug: 'card-editorial-with-icon',
  labels: { singular: 'Card Editorial with Icon', plural: 'Cards Editorial with Icon' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'iconSelect',
      type: 'text',
      required: true,
    },
  ],
}
