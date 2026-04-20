import type { Block } from 'payload'
import { ExternalLink } from './ExternalLink'

export const CardService: Block = {
  slug: 'card-service',
  labels: { singular: 'Card External Link', plural: 'Cards External Links' },
  fields: [
    {
      name: 'card',
      type: 'blocks',
      blocks: [ExternalLink],
      maxRows: 1,
      required: true,
    },
  ],
}
