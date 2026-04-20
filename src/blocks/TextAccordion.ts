import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { AccordionBlock } from './AccordionBlock'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const TextAccordion: Block = {
  slug: 'text-accordion',
  labels: { singular: 'Text + Accordion', plural: 'Text + Accordions' },
  fields: [
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
      required: true,
    },
    {
      name: 'text',
      type: 'blocks',
      blocks: [TextBlock],
      maxRows: 1,
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
