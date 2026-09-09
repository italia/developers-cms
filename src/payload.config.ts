import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// System
import { Users } from './collections/Users'
import { Media } from './collections/Media'

// Taxonomy collections
import { ArticleTopic } from './collections/ArticleTopic'
import { NewsTopic } from './collections/NewsTopic'
import { StoryTopic } from './collections/StoryTopic'
import { InsightTopic } from './collections/InsightTopic'
import { ResourceTopic } from './collections/ResourceTopic'
import { WebinarTopic } from './collections/WebinarTopic'
import { MacroTopic } from './collections/MacroTopic'
import { StoryClass } from './collections/StoryClass'

// Entity collections
import { WebinarAuthor } from './collections/WebinarAuthor'
import { ChartElement } from './collections/ChartElement'
import { KpiElement } from './collections/KpiElement'
import { NewsItem } from './collections/NewsItem'
import { Resource } from './collections/Resource'
import { Feedback } from './collections/Feedback'

// Content collections
import { Article } from './collections/Article'
import { Page } from './collections/Page'
import { Insight } from './collections/Insight'
import { WebinarItem } from './collections/WebinarItem'
import { StoryItem } from './collections/StoryItem'
import { Catalogue } from './collections/Catalogue'

// Globals
import { Layout } from './globals/Layout'
import { Homepage } from './globals/Homepage'
import { Search } from './globals/Search'
import { GlobalSetting } from './globals/GlobalSetting'
import { SidebarForArticle } from './globals/SidebarForArticle'
import { SeoDefault } from './globals/SeoDefault'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Adapter email (Mailgun SMTP EU). Senza, Payload logga le mail in console e il reset
// password non funziona: gli account vanno creati a mano da un admin.
//
// Configurato solo se SMTP_HOST e' valorizzato, cosi' dev locale e CI partono senza SMTP.
//
// ATTENZIONE al mittente (post-mortem 12/06/2026, vedi helm/videocall/prod/values.yaml nel
// gitops): developers.italia.it ha DMARC p=reject, e Mailgun firma col dominio del suo
// account (org innovazione.gov.it). Un From @developers.italia.it NON si allinea, DMARC
// fallisce e le mail vengono RIFIUTATE — risultando "SENT" lato Mailgun ma senza mai
// arrivare. EMAIL_FROM_ADDRESS deve quindi restare su innovazione.gov.it.
const email = process.env.SMTP_HOST
  ? nodemailerAdapter({
      defaultFromAddress: process.env.EMAIL_FROM_ADDRESS || 'no-reply@innovazione.gov.it',
      defaultFromName: process.env.EMAIL_FROM_NAME || 'Developers Italia CMS',
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: false, // STARTTLS sulla 587
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
    })
  : undefined

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4321',
  process.env.SITE_URL,
].filter(Boolean) as string[]

export default buildConfig({
  cors: allowedOrigins,
  csrf: allowedOrigins,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      { label: 'Italiano', code: 'it' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'it',
    fallback: true,
  },
  collections: [
    Users,
    Media,
    // Taxonomies
    ArticleTopic,
    NewsTopic,
    StoryTopic,
    InsightTopic,
    ResourceTopic,
    WebinarTopic,
    MacroTopic,
    StoryClass,
    // Entities
    WebinarAuthor,
    ChartElement,
    KpiElement,
    NewsItem,
    Resource,
    Feedback,
    // Content
    Page,
    Article,
    Insight,
    WebinarItem,
    StoryItem,
    Catalogue,
  ],
  globals: [
    Layout,
    Homepage,
    Search,
    GlobalSetting,
    SidebarForArticle,
    SeoDefault,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  ...(email ? { email } : {}),
  plugins: [],
})
