import type { Block } from 'payload'
import { ListItem } from './ListItem'

export const ListCardInfo: Block = {
  slug: 'list-card-info',
  labels: { singular: 'Cards Info', plural: 'Cards Info' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [ListItem],
    },
  ],
}
