import type { Block } from 'payload'
import { DownloadLink } from './DownloadLink'

export const ActionCard: Block = {
  slug: 'action-card',
  labels: { singular: 'Webinar Transcript', plural: 'Webinar Transcripts' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
    },
    {
      name: 'cta',
      type: 'blocks',
      blocks: [DownloadLink],
      maxRows: 1,
      required: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      required: true,
    },
    {
      name: 'readMoreLabel',
      type: 'text',
      required: true,
    },
    {
      name: 'readLessLabel',
      type: 'text',
      required: true,
    },
  ],
}
