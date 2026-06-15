import type { Block } from 'payload'
import { InternalLink } from './InternalLink'
import { DownloadLink } from './DownloadLink'
import { ExternalLink } from './ExternalLink'

export const ListItemResource: Block = {
  slug: 'list-item-resource',
  labels: { singular: 'List Item with Resources', plural: 'List Items with Resources' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'richText',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'links',
      type: 'blocks',
      blocks: [InternalLink, DownloadLink, ExternalLink],
    },
  ],
}
