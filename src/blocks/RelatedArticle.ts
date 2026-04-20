import type { Block } from 'payload'
import { ArticleNavigation } from './ArticleNavigation'
import { ArticleList } from './ArticleList'

export const RelatedArticle: Block = {
  slug: 'related-article',
  labels: { singular: 'Related List', plural: 'Related Lists' },
  fields: [
    {
      name: 'relatedBlock',
      type: 'blocks',
      blocks: [ArticleNavigation, ArticleList],
      maxRows: 1,
      required: true,
    },
  ],
}
