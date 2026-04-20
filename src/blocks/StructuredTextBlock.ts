import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const StructuredTextBlock: Block = {
  slug: 'structured-text-block',
  labels: { singular: 'Article Structured Text', plural: 'Article Structured Texts' },
  fields: [
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
  ],
}
