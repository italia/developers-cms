import type { Block } from 'payload'
import { ExternalLink } from './ExternalLink'

export const ListExternalLink: Block = {
  slug: 'list-external-link',
  labels: { singular: 'List External Link', plural: 'List External Links' },
  fields: [
    {
      name: 'links',
      type: 'blocks',
      blocks: [ExternalLink],
    },
  ],
}
