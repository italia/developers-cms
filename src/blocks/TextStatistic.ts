import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { StatisticBlock } from './StatisticBlock'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const TextStatistic: Block = {
  slug: 'text-statistic',
  labels: { singular: 'Text + Statistics', plural: 'Text + Statistics' },
  fields: [
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
      required: true,
    },
    {
      name: 'showInline',
      type: 'checkbox',
    },
    {
      name: 'text',
      type: 'blocks',
      blocks: [TextBlock],
      maxRows: 1,
      required: true,
    },
    {
      name: 'statistics',
      type: 'blocks',
      blocks: [StatisticBlock],
      maxRows: 1,
      required: true,
    },
  ],
}
