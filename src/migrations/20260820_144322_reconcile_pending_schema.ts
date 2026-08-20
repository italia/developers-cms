import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_text_image_variant" AS ENUM('variant-1', 'variant-2', 'variant-3');
  CREATE TYPE "public"."enum_insights_blocks_text_image_variant" AS ENUM('variant-1', 'variant-2', 'variant-3');
  CREATE TYPE "public"."enum_insights_blocks_structured_text_block_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_image_variant" AS ENUM('variant-1', 'variant-2', 'variant-3');
  CREATE TYPE "public"."enum_catalogues_blocks_catalogue_tab_sort_mode" AS ENUM('date_desc', 'date_asc', 'title_asc', 'title_desc', 'updated_desc');
  CREATE TYPE "public"."enum_homepage_blocks_text_image_variant" AS ENUM('variant-1', 'variant-2', 'variant-3');
  CREATE TABLE "pages_blocks_webinar_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_webinar_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_structured_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_insights_blocks_structured_text_block_bg",
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_list_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_8" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_8" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_text_block_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_icon_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_icon_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_icon_list_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_intro_article" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_webinar_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "catalogues_blocks_catalogue_tab" DROP CONSTRAINT "catalogues_blocks_catalogue_tab_filter_story_id_story_topics_id_fk";

  -- filterStory now points at story-classes instead of story-topics (it always
  -- meant to). Any existing value that isn't a valid story_classes id would
  -- violate the new FK below, so those get cleared rather than failing the
  -- migration; editors can re-pick the filter in the admin.
  UPDATE "catalogues_blocks_catalogue_tab" SET "filter_story_id" = NULL WHERE "filter_story_id" IS NOT NULL AND "filter_story_id" NOT IN (SELECT "id" FROM "story_classes");

  -- variant changed from free text to a fixed select. Existing rows with a
  -- value outside the new option set can't be cast to the enum below, so they
  -- get normalized to the field's own default first.
  UPDATE "pages_blocks_text_image" SET "variant" = 'variant-1' WHERE "variant" IS NOT NULL AND "variant" NOT IN ('variant-1', 'variant-2', 'variant-3');
  UPDATE "insights_blocks_text_image" SET "variant" = 'variant-1' WHERE "variant" IS NOT NULL AND "variant" NOT IN ('variant-1', 'variant-2', 'variant-3');
  UPDATE "story_items_blocks_text_image" SET "variant" = 'variant-1' WHERE "variant" IS NOT NULL AND "variant" NOT IN ('variant-1', 'variant-2', 'variant-3');
  UPDATE "homepage_blocks_text_image" SET "variant" = 'variant-1' WHERE "variant" IS NOT NULL AND "variant" NOT IN ('variant-1', 'variant-2', 'variant-3');

  ALTER TABLE "pages_blocks_text_image" ALTER COLUMN "variant" SET DEFAULT 'variant-1'::"public"."enum_pages_blocks_text_image_variant";
  ALTER TABLE "pages_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_pages_blocks_text_image_variant" USING "variant"::"public"."enum_pages_blocks_text_image_variant";
  ALTER TABLE "insights_blocks_text_image" ALTER COLUMN "variant" SET DEFAULT 'variant-1'::"public"."enum_insights_blocks_text_image_variant";
  ALTER TABLE "insights_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_insights_blocks_text_image_variant" USING "variant"::"public"."enum_insights_blocks_text_image_variant";
  ALTER TABLE "story_items_blocks_text_image" ALTER COLUMN "variant" SET DEFAULT 'variant-1'::"public"."enum_story_items_blocks_text_image_variant";
  ALTER TABLE "story_items_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_story_items_blocks_text_image_variant" USING "variant"::"public"."enum_story_items_blocks_text_image_variant";
  ALTER TABLE "story_items" ALTER COLUMN "image_id" DROP NOT NULL;
  ALTER TABLE "homepage_blocks_text_image" ALTER COLUMN "variant" SET DEFAULT 'variant-1'::"public"."enum_homepage_blocks_text_image_variant";
  ALTER TABLE "homepage_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_homepage_blocks_text_image_variant" USING "variant"::"public"."enum_homepage_blocks_text_image_variant";
  -- iconSelect moved from a free-text value to a real media upload. A text
  -- filename can't be auto-converted into a media relationship, so the new
  -- column stays nullable here even though the field config marks it
  -- required; existing rows will need their icon re-selected in the admin.
  ALTER TABLE "pages_blocks_channel" ADD COLUMN "icon_select_id" uuid;
  ALTER TABLE "insights_blocks_channel" ADD COLUMN "icon_select_id" uuid;
  ALTER TABLE "webinar_items_blocks_action_card" ADD COLUMN "video_url" varchar;
  ALTER TABLE "story_items_blocks_channel" ADD COLUMN "icon_select_id" uuid;
  ALTER TABLE "catalogues_blocks_catalogue_tab" ADD COLUMN "sort_mode" "enum_catalogues_blocks_catalogue_tab_sort_mode" DEFAULT 'date_desc';
  ALTER TABLE "homepage_blocks_channel" ADD COLUMN "icon_select_id" uuid;
  ALTER TABLE "pages_blocks_webinar_tab" ADD CONSTRAINT "pages_blocks_webinar_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_webinar_tab" ADD CONSTRAINT "insights_blocks_webinar_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_structured_text_block" ADD CONSTRAINT "insights_blocks_structured_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_list_collection" ADD CONSTRAINT "insights_blocks_list_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_8" ADD CONSTRAINT "story_items_blocks_internal_link_8_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_8" ADD CONSTRAINT "story_items_blocks_external_link_8_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_block_6" ADD CONSTRAINT "story_items_blocks_text_block_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_icon_list_item" ADD CONSTRAINT "story_items_blocks_icon_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_icon_list" ADD CONSTRAINT "story_items_blocks_icon_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_icon_list_block" ADD CONSTRAINT "story_items_blocks_icon_list_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_intro_article" ADD CONSTRAINT "story_items_blocks_intro_article_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_webinar_tab" ADD CONSTRAINT "homepage_blocks_webinar_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_webinar_tab_order_idx" ON "pages_blocks_webinar_tab" USING btree ("_order");
  CREATE INDEX "pages_blocks_webinar_tab_parent_id_idx" ON "pages_blocks_webinar_tab" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_webinar_tab_path_idx" ON "pages_blocks_webinar_tab" USING btree ("_path");
  CREATE INDEX "pages_blocks_webinar_tab_locale_idx" ON "pages_blocks_webinar_tab" USING btree ("_locale");
  CREATE INDEX "insights_blocks_webinar_tab_order_idx" ON "insights_blocks_webinar_tab" USING btree ("_order");
  CREATE INDEX "insights_blocks_webinar_tab_parent_id_idx" ON "insights_blocks_webinar_tab" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_webinar_tab_path_idx" ON "insights_blocks_webinar_tab" USING btree ("_path");
  CREATE INDEX "insights_blocks_webinar_tab_locale_idx" ON "insights_blocks_webinar_tab" USING btree ("_locale");
  CREATE INDEX "insights_blocks_structured_text_block_order_idx" ON "insights_blocks_structured_text_block" USING btree ("_order");
  CREATE INDEX "insights_blocks_structured_text_block_parent_id_idx" ON "insights_blocks_structured_text_block" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_structured_text_block_path_idx" ON "insights_blocks_structured_text_block" USING btree ("_path");
  CREATE INDEX "insights_blocks_structured_text_block_locale_idx" ON "insights_blocks_structured_text_block" USING btree ("_locale");
  CREATE INDEX "insights_blocks_list_collection_order_idx" ON "insights_blocks_list_collection" USING btree ("_order");
  CREATE INDEX "insights_blocks_list_collection_parent_id_idx" ON "insights_blocks_list_collection" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_list_collection_path_idx" ON "insights_blocks_list_collection" USING btree ("_path");
  CREATE INDEX "insights_blocks_list_collection_locale_idx" ON "insights_blocks_list_collection" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_internal_link_8_order_idx" ON "story_items_blocks_internal_link_8" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_8_parent_id_idx" ON "story_items_blocks_internal_link_8" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_8_path_idx" ON "story_items_blocks_internal_link_8" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_8_locale_idx" ON "story_items_blocks_internal_link_8" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_8_order_idx" ON "story_items_blocks_external_link_8" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_8_parent_id_idx" ON "story_items_blocks_external_link_8" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_8_path_idx" ON "story_items_blocks_external_link_8" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_8_locale_idx" ON "story_items_blocks_external_link_8" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_block_6_order_idx" ON "story_items_blocks_text_block_6" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_block_6_parent_id_idx" ON "story_items_blocks_text_block_6" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_block_6_path_idx" ON "story_items_blocks_text_block_6" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_block_6_locale_idx" ON "story_items_blocks_text_block_6" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_icon_list_item_order_idx" ON "story_items_blocks_icon_list_item" USING btree ("_order");
  CREATE INDEX "story_items_blocks_icon_list_item_parent_id_idx" ON "story_items_blocks_icon_list_item" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_icon_list_item_path_idx" ON "story_items_blocks_icon_list_item" USING btree ("_path");
  CREATE INDEX "story_items_blocks_icon_list_item_locale_idx" ON "story_items_blocks_icon_list_item" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_icon_list_order_idx" ON "story_items_blocks_icon_list" USING btree ("_order");
  CREATE INDEX "story_items_blocks_icon_list_parent_id_idx" ON "story_items_blocks_icon_list" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_icon_list_path_idx" ON "story_items_blocks_icon_list" USING btree ("_path");
  CREATE INDEX "story_items_blocks_icon_list_locale_idx" ON "story_items_blocks_icon_list" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_icon_list_block_order_idx" ON "story_items_blocks_icon_list_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_icon_list_block_parent_id_idx" ON "story_items_blocks_icon_list_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_icon_list_block_path_idx" ON "story_items_blocks_icon_list_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_icon_list_block_locale_idx" ON "story_items_blocks_icon_list_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_intro_article_order_idx" ON "story_items_blocks_intro_article" USING btree ("_order");
  CREATE INDEX "story_items_blocks_intro_article_parent_id_idx" ON "story_items_blocks_intro_article" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_intro_article_path_idx" ON "story_items_blocks_intro_article" USING btree ("_path");
  CREATE INDEX "story_items_blocks_intro_article_locale_idx" ON "story_items_blocks_intro_article" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_webinar_tab_order_idx" ON "homepage_blocks_webinar_tab" USING btree ("_order");
  CREATE INDEX "homepage_blocks_webinar_tab_parent_id_idx" ON "homepage_blocks_webinar_tab" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_webinar_tab_path_idx" ON "homepage_blocks_webinar_tab" USING btree ("_path");
  CREATE INDEX "homepage_blocks_webinar_tab_locale_idx" ON "homepage_blocks_webinar_tab" USING btree ("_locale");
  ALTER TABLE "pages_blocks_channel" ADD CONSTRAINT "pages_blocks_channel_icon_select_id_media_id_fk" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_blocks_channel" ADD CONSTRAINT "insights_blocks_channel_icon_select_id_media_id_fk" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_blocks_channel" ADD CONSTRAINT "story_items_blocks_channel_icon_select_id_media_id_fk" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_catalogue_tab" ADD CONSTRAINT "catalogues_blocks_catalogue_tab_filter_story_id_story_classes_id_fk" FOREIGN KEY ("filter_story_id") REFERENCES "public"."story_classes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_channel" ADD CONSTRAINT "homepage_blocks_channel_icon_select_id_media_id_fk" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_channel_icon_select_idx" ON "pages_blocks_channel" USING btree ("icon_select_id");
  CREATE INDEX "insights_blocks_channel_icon_select_idx" ON "insights_blocks_channel" USING btree ("icon_select_id");
  CREATE INDEX "story_items_blocks_channel_icon_select_idx" ON "story_items_blocks_channel" USING btree ("icon_select_id");
  CREATE INDEX "homepage_blocks_channel_icon_select_idx" ON "homepage_blocks_channel" USING btree ("icon_select_id");
  ALTER TABLE "pages_blocks_channel" DROP COLUMN "icon_select";
  ALTER TABLE "insights_blocks_channel" DROP COLUMN "icon_select";
  ALTER TABLE "story_items_blocks_channel" DROP COLUMN "icon_select";
  ALTER TABLE "homepage_blocks_channel" DROP COLUMN "icon_select";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_webinar_tab" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "insights_blocks_webinar_tab" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "insights_blocks_structured_text_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "insights_blocks_list_collection" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_internal_link_8" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_external_link_8" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_text_block_6" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_icon_list_item" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_icon_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_icon_list_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "story_items_blocks_intro_article" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "homepage_blocks_webinar_tab" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_webinar_tab" CASCADE;
  DROP TABLE "insights_blocks_webinar_tab" CASCADE;
  DROP TABLE "insights_blocks_structured_text_block" CASCADE;
  DROP TABLE "insights_blocks_list_collection" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_8" CASCADE;
  DROP TABLE "story_items_blocks_external_link_8" CASCADE;
  DROP TABLE "story_items_blocks_text_block_6" CASCADE;
  DROP TABLE "story_items_blocks_icon_list_item" CASCADE;
  DROP TABLE "story_items_blocks_icon_list" CASCADE;
  DROP TABLE "story_items_blocks_icon_list_block" CASCADE;
  DROP TABLE "story_items_blocks_intro_article" CASCADE;
  DROP TABLE "homepage_blocks_webinar_tab" CASCADE;
  ALTER TABLE "pages_blocks_channel" DROP CONSTRAINT "pages_blocks_channel_icon_select_id_media_id_fk";
  
  ALTER TABLE "insights_blocks_channel" DROP CONSTRAINT "insights_blocks_channel_icon_select_id_media_id_fk";
  
  ALTER TABLE "story_items_blocks_channel" DROP CONSTRAINT "story_items_blocks_channel_icon_select_id_media_id_fk";
  
  ALTER TABLE "catalogues_blocks_catalogue_tab" DROP CONSTRAINT "catalogues_blocks_catalogue_tab_filter_story_id_story_classes_id_fk";
  
  ALTER TABLE "homepage_blocks_channel" DROP CONSTRAINT "homepage_blocks_channel_icon_select_id_media_id_fk";
  
  DROP INDEX "pages_blocks_channel_icon_select_idx";
  DROP INDEX "insights_blocks_channel_icon_select_idx";
  DROP INDEX "story_items_blocks_channel_icon_select_idx";
  DROP INDEX "homepage_blocks_channel_icon_select_idx";
  ALTER TABLE "pages_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "pages_blocks_text_image" ALTER COLUMN "variant" DROP DEFAULT;
  ALTER TABLE "insights_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "insights_blocks_text_image" ALTER COLUMN "variant" DROP DEFAULT;
  ALTER TABLE "story_items_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "story_items_blocks_text_image" ALTER COLUMN "variant" DROP DEFAULT;
  ALTER TABLE "story_items" ALTER COLUMN "image_id" SET NOT NULL;
  ALTER TABLE "homepage_blocks_text_image" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "homepage_blocks_text_image" ALTER COLUMN "variant" DROP DEFAULT;
  ALTER TABLE "pages_blocks_channel" ADD COLUMN "icon_select" varchar NOT NULL;
  ALTER TABLE "insights_blocks_channel" ADD COLUMN "icon_select" varchar NOT NULL;
  ALTER TABLE "story_items_blocks_channel" ADD COLUMN "icon_select" varchar NOT NULL;
  ALTER TABLE "homepage_blocks_channel" ADD COLUMN "icon_select" varchar NOT NULL;
  ALTER TABLE "catalogues_blocks_catalogue_tab" ADD CONSTRAINT "catalogues_blocks_catalogue_tab_filter_story_id_story_topics_id_fk" FOREIGN KEY ("filter_story_id") REFERENCES "public"."story_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_channel" DROP COLUMN "icon_select_id";
  ALTER TABLE "insights_blocks_channel" DROP COLUMN "icon_select_id";
  ALTER TABLE "webinar_items_blocks_action_card" DROP COLUMN "video_url";
  ALTER TABLE "story_items_blocks_channel" DROP COLUMN "icon_select_id";
  ALTER TABLE "catalogues_blocks_catalogue_tab" DROP COLUMN "sort_mode";
  ALTER TABLE "homepage_blocks_channel" DROP COLUMN "icon_select_id";
  DROP TYPE "public"."enum_pages_blocks_text_image_variant";
  DROP TYPE "public"."enum_insights_blocks_text_image_variant";
  DROP TYPE "public"."enum_insights_blocks_structured_text_block_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_image_variant";
  DROP TYPE "public"."enum_catalogues_blocks_catalogue_tab_sort_mode";
  DROP TYPE "public"."enum_homepage_blocks_text_image_variant";`)
}
