import type { Field } from 'payload'

/**
 * Casella "Non pubblicare sul sito": il documento resta nel CMS ma il sito non
 * ne crea la pagina e non lo mostra in elenchi, ricerca, sitemap e feed.
 */
export const hideFromSiteField = (): Field => ({
  name: 'hideFromSite',
  type: 'checkbox',
  label: 'Non pubblicare sul sito',
  defaultValue: false,
  admin: {
    position: 'sidebar',
    description:
      'Se attiva, il documento non ha una pagina sul sito e non compare in elenchi, ricerca e sitemap.',
  },
})
