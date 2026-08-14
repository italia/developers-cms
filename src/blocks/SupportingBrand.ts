import type { Block } from 'payload'

export const SupportingBrand: Block = {
  slug: 'supporting-brand',
  labels: { singular: 'Supporting Brand', plural: 'Supporting Brands' },
  fields: [
    {
      name: 'brandLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { equals: 'image/svg+xml' },
      },
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
