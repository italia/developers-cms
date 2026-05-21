import type { CollectionConfig } from 'payload'
import { seoField } from '../fields/seoField'
import { Hero } from '../blocks/Hero'
import { ActionCard } from '../blocks/ActionCard'
import { Speaker } from '../blocks/Speaker'
import { WebinarDescription } from '../blocks/WebinarDescription'

export const WebinarItem: CollectionConfig = {
  slug: 'webinar-items',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'date', 'updatedAt'],
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
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
      index: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
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
      name: 'date',
      type: 'date',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [Hero, ActionCard, Speaker, WebinarDescription],
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'topic',
      type: 'relationship',
      relationTo: 'webinar-topics',
      required: true,
      localized: true,
    },
    seoField(),
    {
      name: 'localizedSlugs',
      type: 'json',
      hidden: true,
    }
  ],
}
