import type { Block } from 'payload'
import { MenuItem } from './MenuItem'

export const MegaMenuItem: Block = {
  slug: 'mega-menu-item',
  labels: { singular: 'Mega Menu Item', plural: 'Mega Menu Items' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'pointsTo',
      type: 'relationship',
      relationTo: ['pages', 'articles', 'insights', 'webinar-items', 'story-items', 'catalogues'],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
      required: true,
    },
    {
      name: 'subMenu',
      type: 'blocks',
      blocks: [MenuItem],
    },
  ],
}
