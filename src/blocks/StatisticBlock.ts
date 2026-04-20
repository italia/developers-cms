import type { Block } from 'payload'
import { DataContainer } from './DataContainer'

export const StatisticBlock: Block = {
  slug: 'statistic-block',
  labels: { singular: 'Statistic Block', plural: 'Statistic Blocks' },
  fields: [
    {
      name: 'statistics',
      type: 'blocks',
      blocks: [DataContainer],
    },
    {
      name: 'kpiElement',
      type: 'relationship',
      relationTo: 'kpi-elements',
      hasMany: true,
    },
  ],
}
