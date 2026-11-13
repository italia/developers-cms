import type { GlobalConfig } from 'payload'
import { seoField } from '../fields/seoField'
import { lastPublishedAtField } from '../fields/lastPublishedAtField'
import { setLastPublishedAt } from '../hooks/setLastPublishedAt'
import { Hero } from '../blocks/Hero'
import { TextOnly } from '../blocks/TextOnly'
import { TextImage } from '../blocks/TextImage'
import { NewsFeed } from '../blocks/NewsFeed'
import { SupportChannelsSection } from '../blocks/SupportChannelsSection'
import { TextUseCase } from '../blocks/TextUseCase'
import { TextStatistic } from '../blocks/TextStatistic'
import { CardLinkList } from '../blocks/CardLinkList'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  admin: { group: 'Singletons' },
  hooks: {
    beforeChange: [setLastPublishedAt],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [Hero, TextOnly, TextImage, NewsFeed, SupportChannelsSection, TextUseCase, TextStatistic, CardLinkList],
      localized: true,
    },
    seoField(),
    lastPublishedAtField(),
  ],
}
