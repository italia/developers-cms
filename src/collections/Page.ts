import type { CollectionConfig } from 'payload'
import { seoField } from '../fields/seoField'
import { Hero } from '../blocks/Hero'
import { FaqSection } from '../blocks/FaqSection'
import { TextOnly } from '../blocks/TextOnly'
import { StructuredTextBlock } from '../blocks/StructuredTextBlock'
import { DataSection } from '../blocks/DataSection'
import { TextImage } from '../blocks/TextImage'
import { NewsFeed } from '../blocks/NewsFeed'
import { SupportChannelsSection } from '../blocks/SupportChannelsSection'
import { TextAccordion } from '../blocks/TextAccordion'
import { SupportCtaSection } from '../blocks/SupportCtaSection'
import { TextStatistic } from '../blocks/TextStatistic'
import { TopicFilter } from '../blocks/TopicFilter'
import { CardLinkList } from '../blocks/CardLinkList'
import { UseCaseContainer } from '../blocks/UseCaseContainer'

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeRead: [
      ({ doc }) => {
        doc.localizedSlugs = JSON.stringify(doc.slug);
        return doc;
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      index: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        Hero, FaqSection, TextOnly, StructuredTextBlock, DataSection, TextImage,
        NewsFeed, SupportChannelsSection, TextAccordion, SupportCtaSection,
        TextStatistic, TopicFilter, CardLinkList, UseCaseContainer,
      ],
      localized: true,
    },
    seoField(),
    {
      name: 'localizedSlugs',
      type: 'json',
    }
  ],
}
