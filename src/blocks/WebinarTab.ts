import type { Block } from 'payload'

export const WebinarTab: Block = {
  slug: 'Webinar-tab',
  labels: { singular: 'Webinar Tab', plural: 'Webinar Tabs' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Webinars',
      type: 'relationship',
      relationTo: 'webinar-items',
      hasMany: true,
    },
  ],
}
