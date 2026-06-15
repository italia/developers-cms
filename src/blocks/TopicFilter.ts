import type { Block } from 'payload'
import { ListCollection } from './ListCollection'

export const TopicFilter: Block = {
  slug: 'topic-filter',
  labels: { singular: 'Cards Container with Filter', plural: 'Cards Containers with Filter' },
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
      name: 'titleFilter',
      type: 'text',
      required: true,
    },
    {
      name: 'labelForAll',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [ListCollection],
    },
  ],
}
