import type { Block } from 'payload'
import { MenuArticleItem } from './MenuArticleItem'

export const ArticleNavigation: Block = {
  slug: 'article-navigation',
  labels: { singular: 'Article Navigation', plural: 'Article Navigations' },
  fields: [
    {
      name: 'previousLabel',
      type: 'text',
    },
    {
      name: 'previousArticle',
      type: 'blocks',
      blocks: [MenuArticleItem],
      maxRows: 1,
    },
    {
      name: 'nextLabel',
      type: 'text',
    },
    {
      name: 'nextArticle',
      type: 'blocks',
      blocks: [MenuArticleItem],
      maxRows: 1,
    },
  ],
}
