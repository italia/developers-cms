import type { CollectionConfig } from 'payload'

export const WebinarAuthor: CollectionConfig = {
  slug: 'webinar-authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
    },
  ],
}
