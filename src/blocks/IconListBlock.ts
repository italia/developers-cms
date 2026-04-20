import type { Block } from 'payload'
import { IconList } from './IconList'

export const IconListBlock: Block = {
  slug: 'icon-list-block',
  labels: { singular: 'Icon List Block', plural: 'Icon List Blocks' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'items',
      type: 'blocks',
      blocks: [IconList],
      maxRows: 1,
    },
  ],
}
