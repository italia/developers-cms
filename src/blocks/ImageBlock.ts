import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'image-block',
  labels: { singular: 'Image', plural: 'Images' },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ratio',
      type: 'text',
    },
  ],
}
