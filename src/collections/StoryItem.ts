import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seoField'
import { Hero } from '../blocks/Hero'
import { FaqSection } from '../blocks/FaqSection'
import { TextOnly } from '../blocks/TextOnly'
import { StructuredTextBlock } from '../blocks/StructuredTextBlock'
import { TextImage } from '../blocks/TextImage'
import { SupportChannelsSection } from '../blocks/SupportChannelsSection'
import { TextAccordion } from '../blocks/TextAccordion'
import { ListCollection } from '../blocks/ListCollection'
import { SupportCtaSection } from '../blocks/SupportCtaSection'
import { TextUseCase } from '../blocks/TextUseCase'
import { TextStatistic } from '../blocks/TextStatistic'
import { CardLinkList } from '../blocks/CardLinkList'

export const StoryItem: CollectionConfig = {
  slug: 'story-items',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'topic', 'dateOfPublication', 'updatedAt'],
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
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'richText',
      editor: lexicalEditor(),
      localized: true,
    },
    {
      name: 'articleClassification',
      type: 'relationship',
      relationTo: 'story-classes',
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
      name: 'topic',
      type: 'relationship',
      relationTo: 'story-topics',
      required: true,
      localized: true,
    },
    {
      name: 'dateOfPublication',
      type: 'date',
      localized: true,
    },
    {
      name: 'storyType',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        Hero, FaqSection, TextOnly, StructuredTextBlock, TextImage, SupportChannelsSection,
        TextAccordion, ListCollection, SupportCtaSection, TextUseCase, TextStatistic, CardLinkList,
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
