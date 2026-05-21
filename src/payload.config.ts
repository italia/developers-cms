import { postgresAdapter } from '@payloadcms/db-postgres'
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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    // idType: 'uuid',
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
