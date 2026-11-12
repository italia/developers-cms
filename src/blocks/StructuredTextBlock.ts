import type { Block } from 'payload'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { ExternalLink } from './ExternalLink'
import { ListExternalLink } from './ListExternalLink'

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
      // Dentro il testo si possono inserire gli elenchi di link esterni (con
      // etichetta, es. "Sito:") e i singoli link esterni, come nel sito
      // precedente: il frontend li disegna come card di collegamento.
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({ blocks: [ListExternalLink, ExternalLink] }),
        ],
      }),
      required: true,
    },
  ],
}
