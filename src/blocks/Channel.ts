import type { Block } from 'payload'

export const Channel: Block = {
  slug: 'channel',
  labels: { singular: 'Channel', plural: 'Channels' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'iconSelect',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { equals: 'image/svg+xml' },
      },
    },
    {
      name: 'linkTo',
      type: 'text',
      required: true,
    },
  ],
}
