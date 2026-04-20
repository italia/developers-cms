import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { AuthorList } from './AuthorList'

export const Speaker: Block = {
  slug: 'speaker',
  labels: { singular: 'Text + Speakers', plural: 'Text + Speakers' },
  fields: [
    {
      name: 'text',
      type: 'blocks',
      blocks: [TextBlock],
      maxRows: 1,
      required: true,
    },
    {
      name: 'list',
      type: 'blocks',
      blocks: [AuthorList],
      maxRows: 1,
      required: true,
    },
  ],
}
