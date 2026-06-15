import type { Block } from 'payload'

export const CatalogueTab: Block = {
  slug: 'catalogue-tab',
  labels: { singular: 'Catalogue Tab', plural: 'Catalogue Tabs' },
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
      name: 'filterTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'labelForAll',
      type: 'text',
      required: true,
    },
    {
      name: 'newsPageTabType',
      type: 'text',
      required: true,
    },
    {
      name: 'filterStory',
      type: 'relationship',
      relationTo: 'story-topics',
    },
    {
      name: 'elementPerPage',
      type: 'number',
    },
  ],
}
