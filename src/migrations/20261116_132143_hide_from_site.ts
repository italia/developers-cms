import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "hide_from_site" boolean DEFAULT false;
  ALTER TABLE "articles" ADD COLUMN "hide_from_site" boolean DEFAULT false;
  ALTER TABLE "insights" ADD COLUMN "hide_from_site" boolean DEFAULT false;
  ALTER TABLE "webinar_items" ADD COLUMN "hide_from_site" boolean DEFAULT false;
  ALTER TABLE "story_items" ADD COLUMN "hide_from_site" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN "hide_from_site";
  ALTER TABLE "articles" DROP COLUMN "hide_from_site";
  ALTER TABLE "insights" DROP COLUMN "hide_from_site";
  ALTER TABLE "webinar_items" DROP COLUMN "hide_from_site";
  ALTER TABLE "story_items" DROP COLUMN "hide_from_site";`)
}
