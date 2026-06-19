import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { AdditionalContent } from './AdditionalContent'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const TextImage: Block = {
  slug: 'text-image',
  imageURL: '/api/media/file/text-image-deafult-3.png',
  labels: { singular: 'Text + Image', plural: 'Text + Images' },
  fields: [
    {
      name: 'variant',
      type: 'text',
      required: true,
    },
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
      required: true,
    },
    {
      name: 'heading',
      type: 'select',
      options: [
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
      ],
    },
    {
      name: 'text',
      type: 'blocks',
      blocks: [TextBlock],
      maxRows: 1,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'additionalContent',
      type: 'blocks',
      blocks: [AdditionalContent],
      maxRows: 1,
    },
  ],
}
