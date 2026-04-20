import type { Block } from 'payload'

export const ExternalLink: Block = {
  slug: 'external-link',
  labels: { singular: 'External Link', plural: 'External Links' },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}
