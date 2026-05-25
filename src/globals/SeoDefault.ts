import type { GlobalConfig } from 'payload'

export const SeoDefault: GlobalConfig = {
  slug: 'seo-default',
  admin: { group: 'Singletons' },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Used as og:site_name and as fallback brand name' },
    },
    {
      name: 'fallbackTitle',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Page title used when a record has no SEO title' },
    },
    {
      name: 'fallbackDescription',
      type: 'textarea',
      required: true,
      localized: true,
      admin: { description: 'Meta description used when a record has no SEO description' },
    },
    {
      name: 'titleSuffix',
      type: 'text',
      localized: true,
      admin: { description: 'Appended to every page title, e.g. " | My Site"' },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { description: 'Default social card image (og:image / twitter:image)' },
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { description: 'Site favicon (.ico, .png or .svg)' },
    },
  ],
}
