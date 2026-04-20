import type { Block } from 'payload'
import { AccordionBlock } from './AccordionBlock'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const FaqSection: Block = {
  slug: 'faq-section',
  labels: { singular: 'FAQ Section', plural: 'FAQ Sections' },
  fields: [
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'accordion',
      type: 'blocks',
      blocks: [AccordionBlock],
      maxRows: 1,
      required: true,
    },
  ],
}
