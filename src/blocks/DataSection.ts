import type { Block } from 'payload'
import { Highlight } from './Highlight'
import { Panel } from './Panel'
import { Result } from './Result'

export const DataSection: Block = {
  slug: 'data-section',
  labels: { singular: 'Data Section', plural: 'Data Sections' },
  fields: [
    {
      name: 'highlights',
      type: 'blocks',
      blocks: [Highlight],
      maxRows: 1,
      required: true,
    },
    {
      name: 'panel',
      type: 'blocks',
      blocks: [Panel],
      maxRows: 1,
      required: true,
    },
    {
      name: 'result',
      type: 'blocks',
      blocks: [Result],
      maxRows: 1,
      required: true,
    },
  ],
}
