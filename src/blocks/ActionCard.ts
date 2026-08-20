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
      name: 'videoUrl',
      type: 'text',
      admin: {
        description: 'If set, a video player is shown instead of the download card.',
      },
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
      type: 'richText',
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
