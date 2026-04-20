import type { Block } from 'payload'
import { ExternalLink } from './ExternalLink'

export const CalloutLink: Block = {
  slug: 'callout-link',
  labels: { singular: 'Note Link', plural: 'Note Links' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
    },
    {
      name: 'link',
      type: 'blocks',
      blocks: [ExternalLink],
      maxRows: 1,
      required: true,
    },
  ],
}
