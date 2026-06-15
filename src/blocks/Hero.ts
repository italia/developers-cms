import type { Block } from 'payload'
import { InternalLink } from './InternalLink'
import { ExternalLink } from './ExternalLink'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary', value: 'primary' },
]

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Heroes' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Small', value: 'small' },
        { label: 'XSmall Full', value: 'xsmall-full' },
        { label: 'XSmall Compact', value: 'xsmall-compact' },
      ],
    },
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'backgroundImageForMobile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'showBreadcrumb',
      type: 'checkbox',
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
      name: 'cta',
      type: 'blocks',
      blocks: [InternalLink, ExternalLink],
      maxRows: 1,
    },
  ],
}
