import type { Block } from 'payload'
import { Channel } from './Channel'

export const SupportChannelsSection: Block = {
  slug: 'support-channels-section',
  labels: { singular: 'Support Channels Section', plural: 'Support Channels Sections' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      type: 'richText',
      required: true,
    },
    {
      name: 'channels',
      type: 'blocks',
      blocks: [Channel],
    },
    {
      name: 'bg',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Lighter', value: 'lighter' },
        { label: 'Primary light', value: 'primary-light' },
        { label: 'Primary', value: 'primary' },
        { label: 'Dark', value: 'dark' },
      ],
    },
  ],
}
