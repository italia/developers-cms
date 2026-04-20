import type { Block } from 'payload'

export const AuthorList: Block = {
  slug: 'author-list',
  labels: { singular: 'Author List', plural: 'Author Lists' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'webinar-authors',
      hasMany: true,
    },
  ],
}
