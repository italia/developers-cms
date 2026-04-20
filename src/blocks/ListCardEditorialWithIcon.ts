import type { Block } from 'payload'
import { CardEditorialWithIcon } from './CardEditorialWithIcon'

export const ListCardEditorialWithIcon: Block = {
  slug: 'list-card-editorial-with-icon',
  labels: { singular: 'Cards Editorial with Icon', plural: 'Cards Editorial with Icons' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [CardEditorialWithIcon],
    },
  ],
}
