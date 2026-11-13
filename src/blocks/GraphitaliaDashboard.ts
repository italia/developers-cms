import type { Block } from 'payload'

/**
 * Dashboard di Graphitalia incorporata nella pagina: il sito la disegna lato
 * client a partire dall'identificativo della dashboard.
 */
export const GraphitaliaDashboard: Block = {
  slug: 'graphitalia-dashboard',
  labels: { singular: 'Graphitalia Dashboard', plural: 'Graphitalia Dashboards' },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'dashboardId',
      type: 'text',
      required: true,
    },
  ],
}
