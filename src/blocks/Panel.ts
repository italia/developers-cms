import type { Block } from 'payload'
import { SettingsChart } from './SettingsChart'
import { ExternalLink } from './ExternalLink'

export const Panel: Block = {
  slug: 'panel',
  labels: { singular: 'Panel', plural: 'Panels' },
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
      name: 'chart',
      type: 'blocks',
      blocks: [SettingsChart],
      maxRows: 1,
      required: true,
    },
    {
      name: 'externalLink',
      type: 'blocks',
      blocks: [ExternalLink],
      maxRows: 1,
      required: true,
    },
  ],
}
