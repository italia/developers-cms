import type { Block } from 'payload'
import { IconListItem } from './IconListItem'

export const IconList: Block = {
  slug: 'icon-list',
  labels: { singular: 'Icon List', plural: 'Icon Lists' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [IconListItem],
    },
  ],
}
