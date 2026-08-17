import type { CollectionConfig } from 'payload'

export const Feedback: CollectionConfig = {
  slug: 'feedback',
  admin: {
    useAsTitle: 'url',
    defaultColumns: ['feedback', 'url', 'expertise', 'reachedFrom', 'createdAt'],
  },
  access: {
    // Submitted anonymously from the public feedback widget on every page.
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'feedback',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'text',
    },
    {
      name: 'expertise',
      type: 'text',
    },
    {
      name: 'reachedFrom',
      type: 'text',
    },
  ],
}
