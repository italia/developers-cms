import type { GlobalConfig } from 'payload'
import { AccordionMenu } from '../blocks/AccordionMenu'
import { MenuArticleItem } from '../blocks/MenuArticleItem'

export const SidebarForArticle: GlobalConfig = {
  slug: 'sidebar-for-article',
  admin: { group: 'Singletons' },
  fields: [
    {
      name: 'headerLabel',
      type: 'text',
      localized: true,
    },
    {
      name: 'openLabel',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'closeLabel',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'menu',
      type: 'blocks',
      blocks: [AccordionMenu, MenuArticleItem],
      localized: true,
    },
  ],
}
