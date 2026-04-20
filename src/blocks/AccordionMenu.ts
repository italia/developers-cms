import type { Block } from 'payload'
import { MenuArticleItem } from './MenuArticleItem'

export const AccordionMenu: Block = {
  slug: 'accordion-menu',
  labels: { singular: 'Accordion Menu', plural: 'Accordion Menus' },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'menu',
      type: 'blocks',
      blocks: [MenuArticleItem],
    },
  ],
}
