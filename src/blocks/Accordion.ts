import type { Block } from 'payload'
import { AccordionItem } from './AccordionItem'

export const Accordion: Block = {
  slug: 'accordion',
  labels: { singular: 'Accordion', plural: 'Accordions' },
  fields: [
    {
      name: 'items',
      type: 'blocks',
      blocks: [AccordionItem],
    },
  ],
}
