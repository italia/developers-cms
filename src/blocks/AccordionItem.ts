import type { Block } from 'payload'

export const AccordionItem: Block = {
  slug: 'accordion-item',
  labels: { singular: 'Accordion Item', plural: 'Accordion Items' },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
  ],
}
