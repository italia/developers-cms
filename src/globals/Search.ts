import type { GlobalConfig } from 'payload'
import { seoField } from '../fields/seoField'
import { Hero } from '../blocks/Hero'
import { SearchBar } from '../blocks/SearchBar'

export const Search: GlobalConfig = {
  slug: 'search',
  admin: { group: 'Singletons' },
  fields: [
    {
      name: 'isSearchEnabled',
      type: 'checkbox',
    },
    {
      name: 'searchLabel',
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
      name: 'slug',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [Hero, SearchBar],
      localized: true,
    },
    seoField(),
  ],
}
