import type { Block } from 'payload'
import { Accordion } from './Accordion'

export const AccordionBlock: Block = {
  slug: 'accordion-block',
  labels: { singular: 'Accordion Block', plural: 'Accordion Blocks' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'accordion',
      type: 'blocks',
      blocks: [Accordion],
      maxRows: 1,
      required: true,
    },
  ],
}
