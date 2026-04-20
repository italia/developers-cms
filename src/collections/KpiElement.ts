import type { CollectionConfig } from 'payload'

const bgColors = [
  { label: 'Default', value: 'default' },
  { label: 'Lighter', value: 'lighter' },
  { label: 'Primary light', value: 'primary-light' },
  { label: 'Primary', value: 'primary' },
  { label: 'Dark', value: 'dark' },
]

export const KpiElement: CollectionConfig = {
  slug: 'kpi-elements',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'value'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
    },
    {
      name: 'valuePrefix',
      type: 'text',
    },
    {
      name: 'valueSuffix',
      type: 'text',
    },
    {
      name: 'showFlow',
      type: 'checkbox',
    },
    {
      name: 'flowDirection',
      type: 'text',
    },
    {
      name: 'flowValue',
      type: 'text',
    },
    {
      name: 'flowDetail',
      type: 'text',
    },
    {
      name: 'percentage',
      type: 'text',
    },
    {
      name: 'footerText',
      type: 'text',
    },
    {
      name: 'openDataPath',
      type: 'text',
    },
    {
      name: 'bg',
      type: 'select',
      options: bgColors,
    },
  ],
}
