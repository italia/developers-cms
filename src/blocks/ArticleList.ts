import type { Block } from 'payload'
import { MenuArticleItem } from './MenuArticleItem'

export const ArticleList: Block = {
  slug: 'article-list',
  labels: { singular: 'Article List', plural: 'Article Lists' },
  fields: [
    {
      name: 'relatedArticles',
      type: 'blocks',
      blocks: [MenuArticleItem],
    },
  ],
}
