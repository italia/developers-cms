import type { GlobalConfig } from 'payload'
import { ExternalLink } from '../blocks/ExternalLink'

export const GlobalSetting: GlobalConfig = {
  slug: 'global-setting',
  admin: { group: 'Singletons' },
  fields: [
    {
      name: 'lastUpdateLabel',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'links',
      type: 'blocks',
      blocks: [ExternalLink],
      localized: true,
    },
    {
      name: 'paragraph',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'siteName',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'labelCta',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
}
