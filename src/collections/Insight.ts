import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seoField'
import { Hero } from '../blocks/Hero'
import { TextOnly } from '../blocks/TextOnly'
import { TextImage } from '../blocks/TextImage'
import { NewsFeed } from '../blocks/NewsFeed'
import { SupportChannelsSection } from '../blocks/SupportChannelsSection'
import { TextUseCase } from '../blocks/TextUseCase'
import { TextStatistic } from '../blocks/TextStatistic'
import { CardLinkList } from '../blocks/CardLinkList'

export const Insight: CollectionConfig = {
  slug: 'insights',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'topic', 'updatedAt'],
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
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
      name: 'abstract',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [Hero, TextOnly, TextImage, NewsFeed, SupportChannelsSection, TextUseCase, TextStatistic, CardLinkList],
      localized: true,
    },
    {
      name: 'topic',
      type: 'relationship',
      relationTo: 'insight-topics',
      localized: true,
    },
    seoField(),
    {
      name: 'localizedSlugs',
      type: 'json',
    }
  ],
}
