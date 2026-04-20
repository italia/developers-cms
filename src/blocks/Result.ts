import type { Block } from 'payload'
import { ListItem } from './ListItem'

export const Result: Block = {
  slug: 'result',
  labels: { singular: 'Result', plural: 'Results' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'blocks',
      blocks: [ListItem],
    },
    {
      name: 'titleListUseCases',
      type: 'text',
    },
    {
      name: 'useCases',
      type: 'relationship',
      relationTo: ['pages', 'articles', 'insights', 'webinar-items', 'story-items'],
      hasMany: true,
    },
  ],
}
