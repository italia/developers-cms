import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { UseCaseBlock } from './UseCaseBlock'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const TextUseCase: Block = {
  slug: 'text-use-case',
  labels: { singular: 'Text + Cards', plural: 'Text + Cards' },
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
      name: 'useCases',
      type: 'blocks',
      blocks: [UseCaseBlock],
      maxRows: 1,
      required: true,
    },
  ],
}
