import type { Block } from 'payload'
import { ListItemResource } from './ListItemResource'
import { ListItem } from './ListItem'

export const OrderedList: Block = {
  slug: 'ordered-list',
  labels: { singular: 'Ordered List', plural: 'Ordered Lists' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [ListItemResource, ListItem],
    },
  ],
}
