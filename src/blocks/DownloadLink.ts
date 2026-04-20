import type { Block } from 'payload'

export const DownloadLink: Block = {
  slug: 'download-link',
  labels: { singular: 'Download Link', plural: 'Download Links' },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'doc',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
