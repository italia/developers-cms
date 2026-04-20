import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { FeatureList } from './FeatureList'
import { QuickLinkCard } from './QuickLinkCard'

export const WebinarDescription: Block = {
  slug: 'webinar-description',
  labels: { singular: 'Webinar Description', plural: 'Webinar Descriptions' },
  fields: [
    {
      name: 'text',
      type: 'blocks',
      blocks: [TextBlock],
      maxRows: 1,
      required: true,
    },
    {
      name: 'subjects',
      type: 'blocks',
      blocks: [FeatureList],
      maxRows: 1,
      required: true,
    },
    {
      name: 'resources',
      type: 'blocks',
      blocks: [QuickLinkCard],
      maxRows: 1,
    },
  ],
}
