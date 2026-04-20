import type { CollectionConfig } from 'payload'

export const NewsItem: CollectionConfig = {
  slug: 'news-items',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'dateOfPublication', 'topic'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'topic',
      type: 'relationship',
      relationTo: 'news-topics',
      required: true,
      localized: true,
    },
    {
      name: 'dateOfPublication',
      type: 'date',
      required: true,
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
