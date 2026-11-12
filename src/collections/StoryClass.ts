import type { CollectionConfig } from 'payload'

export const StoryClass: CollectionConfig = {
  slug: 'story-classes',
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label'],
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'sort',
      type: 'text',
    },
    {
      // Chiave stabile usata dal sito per distinguere Notizie e Piattaforme:
      // gli id dei documenti cambiano da un ambiente all'altro.
      name: 'key',
      type: 'select',
      options: [
        { label: 'Notizie', value: 'news' },
        { label: 'Piattaforme', value: 'platforms' },
      ],
    },
  ],
}
