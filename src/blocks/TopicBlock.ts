import type { Block } from 'payload'

export const TopicBlock: Block = {
  slug: 'topic-block',
  labels: { singular: 'Topic', plural: 'Topics' },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
  ],
}
