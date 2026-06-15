import type { Block } from 'payload'
import { CardLink } from './CardLink'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const CardLinkList: Block = {
  slug: 'card-link-list',
  labels: { singular: 'Section Card Link List', plural: 'Section Card Link Lists' },
  fields: [
    {
      name: 'showInlineCard',
      type: 'checkbox',
    },
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
      name: 'paragraph',
      type: 'richText',
    },
    {
      name: 'listContent',
      type: 'blocks',
      blocks: [CardLink],
    },
  ],
}
