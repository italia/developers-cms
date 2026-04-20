import type { Block } from 'payload'

export const SearchBar: Block = {
  slug: 'search-bar',
  labels: { singular: 'Search Bar', plural: 'Search Bars' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'labelButton',
      type: 'text',
      required: true,
    },
    {
      name: 'labelForAllResult',
      type: 'text',
      required: true,
    },
    {
      name: 'labelForNoResult',
      type: 'text',
      required: true,
    },
    {
      name: 'inputPlaceholder',
      type: 'text',
      required: true,
    },
  ],
}
