import type { Block } from 'payload'
import { TextBlock } from './TextBlock'
import { AuthorList } from './AuthorList'
import { QuickLinkCard } from './QuickLinkCard'
import { StatisticBlock } from './StatisticBlock'
import { ImageBlock } from './ImageBlock'
import { IconListBlock } from './IconListBlock'
import { AccordionBlock } from './AccordionBlock'
import { UseCaseBlock } from './UseCaseBlock'
import { AdditionalContent } from './AdditionalContent'

export const Section: Block = {
  slug: 'section',
  labels: { singular: 'Section', plural: 'Sections' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'background',
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Primary', value: 'primary' },
        { label: 'Dark', value: 'dark' },
        { label: 'Lighter', value: 'lighter' },
      ],
    },
    {
      name: 'alignItems',
      type: 'select',
      options: [
        { label: 'Top', value: 'top' },
        { label: 'Center', value: 'center' },
      ],
    },
    {
      name: 'columnLeftSize',
      type: 'number',
      required: true,
    },
    {
      name: 'left',
      type: 'blocks',
      blocks: [TextBlock],
      maxRows: 1,
      required: true,
    },
    {
      name: 'columnRightSize',
      type: 'number',
      required: true,
    },
    {
      name: 'right',
      type: 'blocks',
      blocks: [AuthorList, QuickLinkCard, StatisticBlock, ImageBlock, IconListBlock, AccordionBlock, UseCaseBlock],
      maxRows: 1,
      required: true,
    },
    {
      name: 'additionalContent',
      type: 'blocks',
      blocks: [AdditionalContent],
      maxRows: 1,
    },
  ],
}
