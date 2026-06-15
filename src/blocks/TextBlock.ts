import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
      type: 'richText',
      editor: lexicalEditor(),
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
