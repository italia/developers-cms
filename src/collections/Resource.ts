import type { CollectionConfig } from 'payload'
import { DownloadLink } from '../blocks/DownloadLink'
import { ExternalLink } from '../blocks/ExternalLink'

export const Resource: CollectionConfig = {
  slug: 'resources',
  admin: {
    useAsTitle: 'id',
    defaultColumns: ['typeResource', 'updatedAt'],
  },
  fields: [
    {
      name: 'resource',
      type: 'blocks',
      blocks: [DownloadLink, ExternalLink],
      maxRows: 1,
      required: true,
      localized: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'resource-topics',
      hasMany: true,
      localized: true,
    },
    {
      name: 'typeResource',
      type: 'relationship',
      relationTo: 'resource-topics',
      required: true,
      localized: true,
    },
  ],
}
