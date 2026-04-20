import type { Block } from 'payload'
import { CatalogueTab } from './CatalogueTab'

export const CatalogueFeed: Block = {
  slug: 'catalogue-feed',
  labels: { singular: 'Cards Hub with Filter', plural: 'Cards Hubs with Filter' },
  fields: [
    {
      name: 'tabs',
      type: 'blocks',
      blocks: [CatalogueTab],
    },
  ],
}
