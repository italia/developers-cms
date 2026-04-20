import type { Block } from 'payload'
import { InternalLink } from './InternalLink'
import { ExternalLink } from './ExternalLink'

export const TextBlock: Block = {
  slug: 'text-block',
  labels: { singular: 'Text Block', plural: 'Text Blocks' },
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
      name: 'cta',
      type: 'blocks',
      blocks: [InternalLink, ExternalLink],
      maxRows: 1,
    },
  ],
}
