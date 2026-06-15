import type { Block } from 'payload'

export const SettingsChart: Block = {
  slug: 'settings-chart',
  labels: { singular: 'Impostazioni grafico', plural: 'Impostazioni grafico' },
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
      name: 'footerText',
      type: 'text',
    },
    {
      name: 'info',
      type: 'richText',
    },
    {
      name: 'selectChart',
      type: 'relationship',
      relationTo: 'chart-elements',
    },
    {
      name: 'downloadData',
      type: 'checkbox',
    },
    {
      name: 'downloadImage',
      type: 'checkbox',
    },
    {
      name: 'showShare',
      type: 'checkbox',
    },
  ],
}
