import type { Block } from 'payload'

export const SupportingBrand: Block = {
  slug: 'supporting-brand',
  labels: { singular: 'Supporting Brand', plural: 'Supporting Brands' },
  fields: [
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
