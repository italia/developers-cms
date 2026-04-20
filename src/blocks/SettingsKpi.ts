import type { Block } from 'payload'

export const SettingsKpi: Block = {
  slug: 'settings-kpi',
  labels: { singular: 'Impostazioni Kpi', plural: 'Impostazioni Kpi' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'selectKpi',
      type: 'relationship',
      relationTo: 'kpi-elements',
      hasMany: true,
    },
  ],
}
