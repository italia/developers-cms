import type { CollectionConfig } from 'payload'
import { seoField } from '../fields/seoField'
import { lastPublishedAtField } from '../fields/lastPublishedAtField'
import { setLastPublishedAt } from '../hooks/setLastPublishedAt'
import { Hero } from '../blocks/Hero'
import { TextOnly } from '../blocks/TextOnly'
import { CalloutLink } from '../blocks/CalloutLink'
import { CatalogueFeed } from '../blocks/CatalogueFeed'

export const Catalogue: CollectionConfig = {
  slug: 'catalogues',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeChange: [setLastPublishedAt],
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
      name: 'parent',
      type: 'relationship',
      relationTo: 'pages',
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
      blocks: [Hero, TextOnly, CalloutLink, CatalogueFeed],
      localized: true,
    },
    seoField(),
    lastPublishedAtField(),
    {
      name: 'localizedSlugs',
      type: 'json',
    }
  ],
}
