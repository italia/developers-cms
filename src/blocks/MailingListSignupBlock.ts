import type { Block } from 'payload'
import { InternalLink } from './InternalLink'

export const MailingListSignupBlock: Block = {
  slug: 'mailing-list-signup-block',
  labels: { singular: 'Mailing List Signup', plural: 'Mailing List Signups' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'privacyPolicy',
      type: 'blocks',
      blocks: [InternalLink],
      maxRows: 1,
      required: true,
    },
  ],
}
