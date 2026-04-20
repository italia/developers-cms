import type { Block } from 'payload'
import { CardEditorialWithIcon } from './CardEditorialWithIcon'

export const AdditionalContent: Block = {
  slug: 'additional-content',
  labels: { singular: 'Additional Content', plural: 'Additional Contents' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [CardEditorialWithIcon],
    },
  ],
}
