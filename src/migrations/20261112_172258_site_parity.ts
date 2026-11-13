import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_story_classes_key" AS ENUM('news', 'platforms');
  CREATE TABLE "pages_blocks_mixed_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_graphitalia_dashboard" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"dashboard_id" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_mixed_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_mixed_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "story_classes" ADD COLUMN "key" "enum_story_classes_key";
  ALTER TABLE "news_items" ADD COLUMN "date_of_publication" timestamp(3) with time zone;
  ALTER TABLE "pages" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "articles" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "insights" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "webinar_items" ADD COLUMN "date" timestamp(3) with time zone;
  ALTER TABLE "webinar_items" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "story_items" ADD COLUMN "date_of_publication" timestamp(3) with time zone;
  ALTER TABLE "story_items" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "catalogues" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "homepage" ADD COLUMN "last_published_at" timestamp(3) with time zone;
  ALTER TABLE "pages_blocks_mixed_tab" ADD CONSTRAINT "pages_blocks_mixed_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_graphitalia_dashboard" ADD CONSTRAINT "pages_blocks_graphitalia_dashboard_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_mixed_tab" ADD CONSTRAINT "insights_blocks_mixed_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_mixed_tab" ADD CONSTRAINT "homepage_blocks_mixed_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_mixed_tab_order_idx" ON "pages_blocks_mixed_tab" USING btree ("_order");
  CREATE INDEX "pages_blocks_mixed_tab_parent_id_idx" ON "pages_blocks_mixed_tab" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_mixed_tab_path_idx" ON "pages_blocks_mixed_tab" USING btree ("_path");
  CREATE INDEX "pages_blocks_mixed_tab_locale_idx" ON "pages_blocks_mixed_tab" USING btree ("_locale");
  CREATE INDEX "pages_blocks_graphitalia_dashboard_order_idx" ON "pages_blocks_graphitalia_dashboard" USING btree ("_order");
  CREATE INDEX "pages_blocks_graphitalia_dashboard_parent_id_idx" ON "pages_blocks_graphitalia_dashboard" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_graphitalia_dashboard_path_idx" ON "pages_blocks_graphitalia_dashboard" USING btree ("_path");
  CREATE INDEX "pages_blocks_graphitalia_dashboard_locale_idx" ON "pages_blocks_graphitalia_dashboard" USING btree ("_locale");
  CREATE INDEX "insights_blocks_mixed_tab_order_idx" ON "insights_blocks_mixed_tab" USING btree ("_order");
  CREATE INDEX "insights_blocks_mixed_tab_parent_id_idx" ON "insights_blocks_mixed_tab" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_mixed_tab_path_idx" ON "insights_blocks_mixed_tab" USING btree ("_path");
  CREATE INDEX "insights_blocks_mixed_tab_locale_idx" ON "insights_blocks_mixed_tab" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_mixed_tab_order_idx" ON "homepage_blocks_mixed_tab" USING btree ("_order");
  CREATE INDEX "homepage_blocks_mixed_tab_parent_id_idx" ON "homepage_blocks_mixed_tab" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_mixed_tab_path_idx" ON "homepage_blocks_mixed_tab" USING btree ("_path");
  CREATE INDEX "homepage_blocks_mixed_tab_locale_idx" ON "homepage_blocks_mixed_tab" USING btree ("_locale");

  -- Le date non sono più per lingua: si conserva il valore italiano (o, se
  -- manca, quello dell'altra lingua) prima di eliminare le colonne localizzate.
  UPDATE "news_items" AS t SET "date_of_publication" = COALESCE(
    (SELECT l."date_of_publication" FROM "news_items_locales" l WHERE l."_parent_id" = t."id" AND l."_locale" = 'it' AND l."date_of_publication" IS NOT NULL LIMIT 1),
    (SELECT l."date_of_publication" FROM "news_items_locales" l WHERE l."_parent_id" = t."id" AND l."date_of_publication" IS NOT NULL ORDER BY l."_locale" LIMIT 1)
  );
  UPDATE "news_items" SET "date_of_publication" = "created_at" WHERE "date_of_publication" IS NULL;
  ALTER TABLE "news_items" ALTER COLUMN "date_of_publication" SET NOT NULL;
  UPDATE "webinar_items" AS t SET "date" = COALESCE(
    (SELECT l."date" FROM "webinar_items_locales" l WHERE l."_parent_id" = t."id" AND l."_locale" = 'it' AND l."date" IS NOT NULL LIMIT 1),
    (SELECT l."date" FROM "webinar_items_locales" l WHERE l."_parent_id" = t."id" AND l."date" IS NOT NULL ORDER BY l."_locale" LIMIT 1)
  );
  UPDATE "webinar_items" SET "date" = "created_at" WHERE "date" IS NULL;
  ALTER TABLE "webinar_items" ALTER COLUMN "date" SET NOT NULL;
  UPDATE "story_items" AS t SET "date_of_publication" = COALESCE(
    (SELECT l."date_of_publication" FROM "story_items_locales" l WHERE l."_parent_id" = t."id" AND l."_locale" = 'it' AND l."date_of_publication" IS NOT NULL LIMIT 1),
    (SELECT l."date_of_publication" FROM "story_items_locales" l WHERE l."_parent_id" = t."id" AND l."date_of_publication" IS NOT NULL ORDER BY l."_locale" LIMIT 1)
  );
  ALTER TABLE "news_items_locales" DROP COLUMN "date_of_publication";
  ALTER TABLE "webinar_items_locales" DROP COLUMN "date";
  ALTER TABLE "story_items_locales" DROP COLUMN "date_of_publication";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_mixed_tab" CASCADE;
  DROP TABLE "pages_blocks_graphitalia_dashboard" CASCADE;
  DROP TABLE "insights_blocks_mixed_tab" CASCADE;
  DROP TABLE "homepage_blocks_mixed_tab" CASCADE;
  ALTER TABLE "news_items_locales" ADD COLUMN "date_of_publication" timestamp(3) with time zone;
  ALTER TABLE "webinar_items_locales" ADD COLUMN "date" timestamp(3) with time zone;
  ALTER TABLE "story_items_locales" ADD COLUMN "date_of_publication" timestamp(3) with time zone;
  UPDATE "news_items_locales" l SET "date_of_publication" = t."date_of_publication" FROM "news_items" t WHERE t."id" = l."_parent_id";
  UPDATE "webinar_items_locales" l SET "date" = t."date" FROM "webinar_items" t WHERE t."id" = l."_parent_id";
  UPDATE "story_items_locales" l SET "date_of_publication" = t."date_of_publication" FROM "story_items" t WHERE t."id" = l."_parent_id";
  ALTER TABLE "news_items_locales" ALTER COLUMN "date_of_publication" SET NOT NULL;
  ALTER TABLE "webinar_items_locales" ALTER COLUMN "date" SET NOT NULL;
  ALTER TABLE "story_classes" DROP COLUMN "key";
  ALTER TABLE "news_items" DROP COLUMN "date_of_publication";
  ALTER TABLE "pages" DROP COLUMN "last_published_at";
  ALTER TABLE "articles" DROP COLUMN "last_published_at";
  ALTER TABLE "insights" DROP COLUMN "last_published_at";
  ALTER TABLE "webinar_items" DROP COLUMN "date";
  ALTER TABLE "webinar_items" DROP COLUMN "last_published_at";
  ALTER TABLE "story_items" DROP COLUMN "date_of_publication";
  ALTER TABLE "story_items" DROP COLUMN "last_published_at";
  ALTER TABLE "catalogues" DROP COLUMN "last_published_at";
  ALTER TABLE "homepage" DROP COLUMN "last_published_at";
  DROP TYPE "public"."enum_story_classes_key";`)
}
