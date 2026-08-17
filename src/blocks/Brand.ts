import type { Block } from 'payload'

export const Brand: Block = {
  slug: 'brand',
  labels: { singular: 'Brand', plural: 'Brands' },
  fields: [
    {
      name: 'logo',
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
