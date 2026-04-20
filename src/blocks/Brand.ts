import type { Block } from 'payload'

export const Brand: Block = {
  slug: 'brand',
  labels: { singular: 'Brand', plural: 'Brands' },
  fields: [
    {
      name: 'mainLogo',
      type: 'text',
      required: true,
    },
    {
      name: 'brandLogo',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
}
