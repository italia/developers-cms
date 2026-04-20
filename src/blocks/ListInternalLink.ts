import type { Block } from 'payload'
import { InternalLink } from './InternalLink'

export const ListInternalLink: Block = {
  slug: 'list-internal-link',
  labels: { singular: 'List Internal Link', plural: 'List Internal Links' },
  fields: [
    {
      name: 'links',
      type: 'blocks',
      blocks: [InternalLink],
    },
  ],
}
