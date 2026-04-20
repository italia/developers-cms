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
      type: 'textarea',
      required: true,
    },
    {
      name: 'iconSelect',
      type: 'text',
      required: true,
    },
    {
      name: 'linkTo',
      type: 'text',
      required: true,
    },
  ],
}
