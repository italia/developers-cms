import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ExternalLink } from '../blocks/ExternalLink'

export const GlobalSetting: GlobalConfig = {
  slug: 'global-setting',
  admin: { group: 'Singletons' },
  fields: [
    {
      label: 'Website Name',
      name: 'siteName',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Error 404 Page Title',
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Error 404 Page text',
      name: 'paragraph',
      type: 'richText',
      editor: lexicalEditor(),
      localized: true,
    },
    {
      label: 'Error 404 Page Image',
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      label: 'Error 404 Page Link Label',
      name: 'labelCta',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Pre-Footer Last Update Label',
      name: 'lastUpdateLabel',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Pre-Footer Links',
      name: 'links',
      type: 'blocks',
      blocks: [ExternalLink],
      localized: true,
    },
  ],
}
