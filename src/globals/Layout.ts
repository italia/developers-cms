import type { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Brand } from '../blocks/Brand'
import { BrandHeader } from '../blocks/BrandHeader'
import { SupportingBrand } from '../blocks/SupportingBrand'
import { ExternalLink } from '../blocks/ExternalLink'
import { InternalLink } from '../blocks/InternalLink'
import { MenuItem } from '../blocks/MenuItem'
import { MegaMenuItem } from '../blocks/MegaMenuItem'
import { MailingListSignupBlock } from '../blocks/MailingListSignupBlock'

export const Layout: GlobalConfig = {
  slug: 'layout',
  admin: { group: 'Singletons' },
  fields: [
    {
      label: 'Header Variant',
      name: 'variant',
      type: 'text',
      required: true,
    },
    {
      label: 'Header Logo',
      name: 'logoSelect',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { equals: 'image/svg+xml' },
      },
    },
    {
      label: 'Header Site Name',
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      label: 'Header Tagline',
      name: 'tagline',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'listNavbarBrand',
      label: 'Brand Header',
      type: 'blocks',
      blocks: [BrandHeader],
      localized: true,
    },
    {
      label: 'Sibiling Websites',
      name: 'metaNavigation',
      type: 'blocks',
      blocks: [ExternalLink],
      localized: true,
    },
    {
      label: 'Main Navigation',
      name: 'navigationBar',
      type: 'blocks',
      blocks: [MenuItem, MegaMenuItem],
      localized: true,
    },
    {
      label: 'Secondary (right) Navigation',
      name: 'navigationBarSecondary',
      type: 'blocks',
      blocks: [MenuItem, MegaMenuItem],
      localized: true,
    },
    {
      label: 'Footer Heading',
      name: 'heading',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
      localized: true,
    },
    {
      label: 'Footer Orgs',
      name: 'organizations',
      type: 'blocks',
      blocks: [Brand],
      localized: true,
    },
    {
      label: 'Footer Topic Title',
      name: 'topicTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Footer Topic links',
      name: 'topicLink',
      type: 'blocks',
      blocks: [InternalLink],
      localized: true,
    },
    {
      label: 'Footer Utility Title',
      name: 'utilityTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      label: 'Footer Utility links',
      name: 'utility',
      type: 'blocks',
      blocks: [SupportingBrand, ExternalLink],
      localized: true,
    },
    {
      label: 'Footer Mailing List Form',
      name: 'mailingListForm',
      type: 'blocks',
      blocks: [MailingListSignupBlock],
      maxRows: 1,
      localized: true,
    },
    {
      label: 'Footer Show Sitemap Link',
      name: 'showSitemapLink',
      type: 'checkbox',
    },
    {
      label: 'Footer small print links',
      name: 'smallPrint',
      type: 'blocks',
      blocks: [InternalLink, ExternalLink],
      localized: true,
    },
  ],
}
