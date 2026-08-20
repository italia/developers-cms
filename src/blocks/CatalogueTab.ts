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
      // Despite the name, this filters by StoryClass (e.g. "Notizie"/"Piattaforme"),
      // not StoryTopic — relationTo was wrong (story-topics) before, so it never
      // resolved to anything since the source data always references story-classes.
      relationTo: 'story-classes',
    },
    {
      name: 'sortMode',
      type: 'select',
      options: [
        { label: 'Date (newest first)', value: 'date_desc' },
        { label: 'Date (oldest first)', value: 'date_asc' },
        { label: 'Title (A-Z)', value: 'title_asc' },
        { label: 'Title (Z-A)', value: 'title_desc' },
        { label: 'Last updated', value: 'updated_desc' },
      ],
      defaultValue: 'date_desc',
    },
    {
      name: 'elementPerPage',
      type: 'number',
    },
  ],
}
