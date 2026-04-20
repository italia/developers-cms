import type { Block } from 'payload'

export const BrandHeader: Block = {
  slug: 'brand-header',
  labels: { singular: 'Brand Header', plural: 'Brand Headers' },
  fields: [
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
    {
      name: 'shortLabel',
      type: 'text',
      required: true,
    },
  ],
}
