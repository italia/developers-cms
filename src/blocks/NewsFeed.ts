import type { Block } from 'payload'
import { NewsTab } from './NewsTab'
import { StoryTab } from './StoryTab'
import { WebinarTab } from './WebinarTab'
import { InternalLink } from './InternalLink'
import { ExternalLink } from './ExternalLink'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const NewsFeed: Block = {
  slug: 'news-feed',
  labels: { singular: 'Cards Section with Tab', plural: 'Cards Sections with Tab' },
  fields: [
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
    },
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
      name: 'tabs',
      type: 'blocks',
      blocks: [NewsTab, StoryTab, WebinarTab],
    },
    {
      name: 'cta',
      type: 'blocks',
      blocks: [InternalLink, ExternalLink],
      maxRows: 1,
    },
  ],
}
