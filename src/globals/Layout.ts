import type { GlobalConfig } from 'payload'
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
      name: 'variant',
      type: 'text',
      required: true,
    },
    {
      name: 'heading',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'logoSelect',
      type: 'text',
      required: true,
    },
    {
      name: 'organizations',
      type: 'blocks',
      blocks: [Brand],
      localized: true,
    },
    {
      name: 'listNavbarBrand',
      type: 'blocks',
      blocks: [BrandHeader],
      localized: true,
    },
    {
      name: 'topicTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'metaNavigation',
      type: 'blocks',
      blocks: [ExternalLink],
      localized: true,
    },
    {
      name: 'topicLink',
      type: 'blocks',
      blocks: [InternalLink],
      localized: true,
    },
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'utilityTitle',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'utility',
      type: 'blocks',
      blocks: [SupportingBrand, ExternalLink],
      localized: true,
    },
    {
      name: 'mailingListForm',
      type: 'blocks',
      blocks: [MailingListSignupBlock],
      maxRows: 1,
      localized: true,
    },
    {
      name: 'navigationBar',
      type: 'blocks',
      blocks: [MenuItem, MegaMenuItem],
      localized: true,
    },
    {
      name: 'navigationBarSecondary',
      type: 'blocks',
      blocks: [MenuItem, MegaMenuItem],
      localized: true,
    },
    {
      name: 'showSitemapLink',
      type: 'checkbox',
    },
    {
      name: 'smallPrint',
      type: 'blocks',
      blocks: [InternalLink, ExternalLink],
      localized: true,
    },
  ],
}
