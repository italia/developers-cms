import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { IconListBlock } from './IconListBlock'

export const IntroArticle: Block = {
  slug: 'intro-article',
  labels: { singular: 'Intro Article', plural: 'Intro Articles' },
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
      blocks: [IconListBlock],
      maxRows: 1,
      required: true,
    },
  ],
}
