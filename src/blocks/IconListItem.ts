import type { Block } from 'payload'

export const IconListItem: Block = {
  slug: 'icon-list-item',
  labels: { singular: 'Icon List Item', plural: 'Icon List Items' },
  fields: [
    {
      name: 'iconSelect',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: true,
    },
  ],
}
