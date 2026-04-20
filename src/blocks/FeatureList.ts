import type { Block } from 'payload'
import { ListItem } from './ListItem'

export const FeatureList: Block = {
  slug: 'feature-list',
  labels: { singular: 'Feature List', plural: 'Feature Lists' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [ListItem],
    },
  ],
}
