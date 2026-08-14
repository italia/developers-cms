import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('it', 'en');
  CREATE TYPE "public"."enum_pages_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_pages_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TYPE "public"."enum_pages_blocks_faq_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_text_only_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_text_only_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_pages_blocks_structured_text_block_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_text_image_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_text_image_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_pages_blocks_news_feed_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_support_channels_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_text_accordion_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_support_cta_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_text_statistic_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_pages_blocks_card_link_list_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_insights_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TYPE "public"."enum_insights_blocks_text_only_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_text_only_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_insights_blocks_text_image_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_text_image_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_insights_blocks_news_feed_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_support_channels_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_text_use_case_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_text_statistic_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_insights_blocks_card_link_list_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_webinar_items_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_webinar_items_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TYPE "public"."enum_story_items_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_story_items_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TYPE "public"."enum_story_items_blocks_faq_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_only_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_only_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_story_items_blocks_structured_text_block_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_image_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_image_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_story_items_blocks_support_channels_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_accordion_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_support_cta_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_use_case_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_text_statistic_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_story_items_blocks_card_link_list_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_catalogues_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_catalogues_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TYPE "public"."enum_catalogues_blocks_text_only_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_catalogues_blocks_text_only_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_homepage_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_homepage_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TYPE "public"."enum_homepage_blocks_text_only_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_text_only_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_homepage_blocks_text_image_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_text_image_heading" AS ENUM('h2', 'h3', 'h4', 'h5');
  CREATE TYPE "public"."enum_homepage_blocks_news_feed_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_support_channels_section_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_text_use_case_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_text_statistic_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_homepage_blocks_card_link_list_bg" AS ENUM('default', 'lighter', 'primary-light', 'primary', 'dark');
  CREATE TYPE "public"."enum_search_blocks_hero_variant" AS ENUM('default', 'small', 'xsmall-full', 'xsmall-compact');
  CREATE TYPE "public"."enum_search_blocks_hero_bg" AS ENUM('default', 'lighter', 'primary');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"enable_a_p_i_key" boolean,
  	"api_key" varchar,
  	"api_key_index" varchar,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "article_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "article_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "news_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "story_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "story_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "insight_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "insight_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "resource_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "resource_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "webinar_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "webinar_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "macro_topics" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "macro_topics_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "story_classes" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"sort" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "story_classes_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "webinar_authors" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"photo_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "webinar_authors_locales" (
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "chart_elements" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"chart_data" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "kpi_elements" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"value" varchar,
  	"value_prefix" varchar,
  	"value_suffix" varchar,
  	"show_flow" boolean,
  	"flow_direction" varchar,
  	"flow_value" varchar,
  	"flow_detail" varchar,
  	"percentage" varchar,
  	"footer_text" varchar,
  	"open_data_path" varchar,
  	"background_color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news_items" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "news_items_locales" (
  	"title" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"topic_id" uuid NOT NULL,
  	"date_of_publication" timestamp(3) with time zone NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "resources_blocks_download_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"doc_id" uuid NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "resources_blocks_external_link" (
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
  
  CREATE TABLE "resources" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "resources_locales" (
  	"type_resource_id" uuid NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "resources_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"resource_topics_id" uuid
  );
  
  CREATE TABLE "pages_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link" (
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
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_hero_variant",
  	"bg" "enum_pages_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header" varchar NOT NULL,
  	"body" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_pages_blocks_faq_section_bg" NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_2" (
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
  
  CREATE TABLE "pages_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_only" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_pages_blocks_text_only_bg" NOT NULL,
  	"heading" "enum_pages_blocks_text_only_heading",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_structured_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_pages_blocks_structured_text_block_bg",
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_highlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"image_id" uuid NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_settings_chart" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"footer_text" varchar,
  	"info" jsonb,
  	"select_chart_id" uuid,
  	"download_data" boolean,
  	"download_image" boolean,
  	"show_share" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_3" (
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
  
  CREATE TABLE "pages_blocks_panel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_result" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" varchar NOT NULL,
  	"title_list_use_cases" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_data_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_internal_link_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_4" (
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
  
  CREATE TABLE "pages_blocks_text_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_editorial_with_icon" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_additional_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" varchar NOT NULL,
  	"bg" "enum_pages_blocks_text_image_bg" NOT NULL,
  	"heading" "enum_pages_blocks_text_image_heading",
  	"image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_news_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_story_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_internal_link_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_5" (
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
  
  CREATE TABLE "pages_blocks_news_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_pages_blocks_news_feed_bg",
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_channel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"link_to" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_support_channels_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"bg" "enum_pages_blocks_support_channels_section_bg",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_internal_link_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_6" (
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
  
  CREATE TABLE "pages_blocks_text_block_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_item_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header" varchar NOT NULL,
  	"body" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_pages_blocks_text_accordion_bg" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_internal_link_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_7" (
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
  
  CREATE TABLE "pages_blocks_support_cta_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" varchar NOT NULL,
  	"image_id" uuid NOT NULL,
  	"bg" "enum_pages_blocks_support_cta_section_bg",
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_internal_link_7" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_external_link_8" (
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
  
  CREATE TABLE "pages_blocks_text_block_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_data_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"info" varchar NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_statistic_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_pages_blocks_text_statistic_bg" NOT NULL,
  	"show_inline" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_list_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_topic_filter" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"title_filter" varchar NOT NULL,
  	"label_for_all" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"external_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"image_id" uuid NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_link_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_inline_card" boolean,
  	"bg" "enum_pages_blocks_card_link_list_bg" NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_use_case_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"seo_image_id" uuid,
  	"localized_slugs" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid,
  	"kpi_elements_id" uuid,
  	"news_items_id" uuid
  );
  
  CREATE TABLE "articles_blocks_topics_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "articles" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"seo_image_id" uuid,
  	"localized_slugs" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "articles_locales" (
  	"parent_id" uuid,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"slug" varchar NOT NULL,
  	"image_id" uuid,
  	"content" jsonb,
  	"description_title" varchar,
  	"description" jsonb,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "articles_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"article_topics_id" uuid,
  	"news_topics_id" uuid,
  	"story_topics_id" uuid,
  	"insight_topics_id" uuid,
  	"resource_topics_id" uuid,
  	"webinar_topics_id" uuid
  );
  
  CREATE TABLE "insights_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_external_link" (
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
  
  CREATE TABLE "insights_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_insights_blocks_hero_variant",
  	"bg" "enum_insights_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_external_link_2" (
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
  
  CREATE TABLE "insights_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_text_only" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_insights_blocks_text_only_bg" NOT NULL,
  	"heading" "enum_insights_blocks_text_only_heading",
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_internal_link_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_external_link_3" (
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
  
  CREATE TABLE "insights_blocks_text_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_card_editorial_with_icon" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_additional_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" varchar NOT NULL,
  	"bg" "enum_insights_blocks_text_image_bg" NOT NULL,
  	"heading" "enum_insights_blocks_text_image_heading",
  	"image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_news_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_story_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_internal_link_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_external_link_4" (
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
  
  CREATE TABLE "insights_blocks_news_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_insights_blocks_news_feed_bg",
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_channel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"link_to" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_support_channels_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"bg" "enum_insights_blocks_support_channels_section_bg",
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_internal_link_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_external_link_5" (
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
  
  CREATE TABLE "insights_blocks_text_block_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_use_case_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_text_use_case" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_insights_blocks_text_use_case_bg" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_internal_link_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_external_link_6" (
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
  
  CREATE TABLE "insights_blocks_text_block_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_data_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"info" varchar NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_statistic_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_text_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_insights_blocks_text_statistic_bg" NOT NULL,
  	"show_inline" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"external_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_card_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"image_id" uuid NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_card_link_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_inline_card" boolean,
  	"bg" "enum_insights_blocks_card_link_list_bg" NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"seo_image_id" uuid,
  	"localized_slugs" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "insights_locales" (
  	"parent_id" uuid,
  	"title" varchar NOT NULL,
  	"image_id" uuid NOT NULL,
  	"slug" varchar NOT NULL,
  	"abstract" jsonb NOT NULL,
  	"topic_id" uuid,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "insights_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid,
  	"news_items_id" uuid,
  	"kpi_elements_id" uuid
  );
  
  CREATE TABLE "webinar_items_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_external_link" (
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
  
  CREATE TABLE "webinar_items_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_webinar_items_blocks_hero_variant",
  	"bg" "enum_webinar_items_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_download_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"doc_id" uuid NOT NULL,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_action_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"category" varchar,
  	"paragraph" jsonb NOT NULL,
  	"read_more_label" varchar NOT NULL,
  	"read_less_label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_external_link_2" (
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
  
  CREATE TABLE "webinar_items_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_author_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_speaker" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_internal_link_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_external_link_3" (
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
  
  CREATE TABLE "webinar_items_blocks_text_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_feature_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_quick_link_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items_blocks_webinar_description" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "webinar_items" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid NOT NULL,
  	"event_body" jsonb,
  	"seo_image_id" uuid,
  	"localized_slugs" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "webinar_items_locales" (
  	"slug" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"parent_id" uuid,
  	"date" timestamp(3) with time zone NOT NULL,
  	"topic_id" uuid NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "webinar_items_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid,
  	"webinar_authors_id" uuid
  );
  
  CREATE TABLE "story_items_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link" (
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
  
  CREATE TABLE "story_items_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_story_items_blocks_hero_variant",
  	"bg" "enum_story_items_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_accordion_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header" varchar NOT NULL,
  	"body" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_accordion_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_faq_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_story_items_blocks_faq_section_bg" NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_2" (
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
  
  CREATE TABLE "story_items_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_text_only" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_story_items_blocks_text_only_bg" NOT NULL,
  	"heading" "enum_story_items_blocks_text_only_heading",
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_structured_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_story_items_blocks_structured_text_block_bg",
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_3" (
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
  
  CREATE TABLE "story_items_blocks_text_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_card_editorial_with_icon" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_additional_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" varchar NOT NULL,
  	"bg" "enum_story_items_blocks_text_image_bg" NOT NULL,
  	"heading" "enum_story_items_blocks_text_image_heading",
  	"image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_channel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"link_to" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_support_channels_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"bg" "enum_story_items_blocks_support_channels_section_bg",
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_4" (
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
  
  CREATE TABLE "story_items_blocks_text_block_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_accordion_item_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header" varchar NOT NULL,
  	"body" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_accordion_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_accordion_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_text_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_story_items_blocks_text_accordion_bg" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_list_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_5" (
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
  
  CREATE TABLE "story_items_blocks_support_cta_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" varchar NOT NULL,
  	"image_id" uuid NOT NULL,
  	"bg" "enum_story_items_blocks_support_cta_section_bg",
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_6" (
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
  
  CREATE TABLE "story_items_blocks_text_block_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_use_case_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_text_use_case" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_story_items_blocks_text_use_case_bg" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_internal_link_7" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_external_link_7" (
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
  
  CREATE TABLE "story_items_blocks_text_block_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_data_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"info" varchar NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_statistic_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_text_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_story_items_blocks_text_statistic_bg" NOT NULL,
  	"show_inline" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"external_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_card_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"image_id" uuid NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items_blocks_card_link_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_inline_card" boolean,
  	"bg" "enum_story_items_blocks_card_link_list_bg" NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "story_items" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"story_type" varchar,
  	"image_id" uuid NOT NULL,
  	"seo_image_id" uuid,
  	"localized_slugs" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "story_items_locales" (
  	"parent_id" uuid,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"article_classification_id" uuid,
  	"slug" varchar NOT NULL,
  	"topic_id" uuid NOT NULL,
  	"date_of_publication" timestamp(3) with time zone,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "story_items_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid,
  	"kpi_elements_id" uuid
  );
  
  CREATE TABLE "catalogues_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_external_link" (
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
  
  CREATE TABLE "catalogues_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_catalogues_blocks_hero_variant",
  	"bg" "enum_catalogues_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_external_link_2" (
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
  
  CREATE TABLE "catalogues_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_text_only" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_catalogues_blocks_text_only_bg" NOT NULL,
  	"heading" "enum_catalogues_blocks_text_only_heading",
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_external_link_3" (
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
  
  CREATE TABLE "catalogues_blocks_callout_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_catalogue_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"filter_title" varchar NOT NULL,
  	"label_for_all" varchar NOT NULL,
  	"news_page_tab_type" varchar NOT NULL,
  	"filter_story_id" uuid,
  	"element_per_page" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues_blocks_catalogue_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "catalogues" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"seo_image_id" uuid,
  	"localized_slugs" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "catalogues_locales" (
  	"title" varchar NOT NULL,
  	"parent_id" uuid,
  	"slug" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "catalogues_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid
  );
  
  CREATE TABLE "payload_kv" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid,
  	"media_id" uuid,
  	"article_topics_id" uuid,
  	"news_topics_id" uuid,
  	"story_topics_id" uuid,
  	"insight_topics_id" uuid,
  	"resource_topics_id" uuid,
  	"webinar_topics_id" uuid,
  	"macro_topics_id" uuid,
  	"story_classes_id" uuid,
  	"webinar_authors_id" uuid,
  	"chart_elements_id" uuid,
  	"kpi_elements_id" uuid,
  	"news_items_id" uuid,
  	"resources_id" uuid,
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "layout_blocks_brand" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_logo" varchar NOT NULL,
  	"brand_logo" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_brand_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"short_label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_external_link" (
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
  
  CREATE TABLE "layout_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_supporting_brand" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"brand_logo" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_mailing_list_signup_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_menu_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_menu_item_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_mega_menu_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"image_id" uuid NOT NULL,
  	"caption" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"variant" varchar NOT NULL,
  	"logo_select" varchar NOT NULL,
  	"site_name" varchar NOT NULL,
  	"show_sitemap_link" boolean,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "layout_locales" (
  	"heading" jsonb NOT NULL,
  	"topic_title" varchar NOT NULL,
  	"utility_title" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "layout_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid
  );
  
  CREATE TABLE "homepage_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_external_link" (
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
  
  CREATE TABLE "homepage_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_homepage_blocks_hero_variant",
  	"bg" "enum_homepage_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_internal_link_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_external_link_2" (
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
  
  CREATE TABLE "homepage_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_text_only" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_homepage_blocks_text_only_bg" NOT NULL,
  	"heading" "enum_homepage_blocks_text_only_heading",
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_internal_link_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_external_link_3" (
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
  
  CREATE TABLE "homepage_blocks_text_block_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_card_editorial_with_icon" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_additional_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_text_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" varchar NOT NULL,
  	"bg" "enum_homepage_blocks_text_image_bg" NOT NULL,
  	"heading" "enum_homepage_blocks_text_image_heading",
  	"image_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_news_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_story_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_internal_link_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_external_link_4" (
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
  
  CREATE TABLE "homepage_blocks_news_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_homepage_blocks_news_feed_bg",
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_channel" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"link_to" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_support_channels_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"bg" "enum_homepage_blocks_support_channels_section_bg",
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_internal_link_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_external_link_5" (
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
  
  CREATE TABLE "homepage_blocks_text_block_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_use_case_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_text_use_case" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_homepage_blocks_text_use_case_bg" NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_internal_link_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_external_link_6" (
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
  
  CREATE TABLE "homepage_blocks_text_block_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_data_container" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"info" varchar NOT NULL,
  	"icon_select" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_statistic_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_text_statistic" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bg" "enum_homepage_blocks_text_statistic_bg" NOT NULL,
  	"show_inline" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_link_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"external_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_card_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"image_id" uuid NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_card_link_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_inline_card" boolean,
  	"bg" "enum_homepage_blocks_card_link_list_bg" NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"seo_image_id" uuid,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_locales" (
  	"title" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid,
  	"news_items_id" uuid,
  	"kpi_elements_id" uuid
  );
  
  CREATE TABLE "search_blocks_internal_link" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "search_blocks_external_link" (
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
  
  CREATE TABLE "search_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_search_blocks_hero_variant",
  	"bg" "enum_search_blocks_hero_bg",
  	"background_image_id" uuid,
  	"background_image_for_mobile_id" uuid,
  	"show_breadcrumb" boolean,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "search_blocks_search_bar" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"label_button" varchar NOT NULL,
  	"label_for_all_result" varchar NOT NULL,
  	"label_for_no_result" varchar NOT NULL,
  	"input_placeholder" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "search" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"is_search_enabled" boolean,
  	"seo_image_id" uuid,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "search_locales" (
  	"search_label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid
  );
  
  CREATE TABLE "global_setting_blocks_external_link" (
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
  
  CREATE TABLE "global_setting" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "global_setting_locales" (
  	"last_update_label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb,
  	"site_name" varchar NOT NULL,
  	"label_cta" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "sidebar_for_article_blocks_menu_article_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "sidebar_for_article_blocks_accordion_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "sidebar_for_article" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "sidebar_for_article_locales" (
  	"header_label" varchar,
  	"open_label" varchar NOT NULL,
  	"close_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE "sidebar_for_article_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" uuid,
  	"articles_id" uuid,
  	"insights_id" uuid,
  	"webinar_items_id" uuid,
  	"story_items_id" uuid,
  	"catalogues_id" uuid
  );
  
  CREATE TABLE "seo_default" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"og_image_id" uuid NOT NULL,
  	"favicon_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_default_locales" (
  	"site_name" varchar NOT NULL,
  	"fallback_title" varchar NOT NULL,
  	"fallback_description" varchar NOT NULL,
  	"title_suffix" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "article_topics_locales" ADD CONSTRAINT "article_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."article_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_topics_locales" ADD CONSTRAINT "news_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_topics_locales" ADD CONSTRAINT "story_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insight_topics_locales" ADD CONSTRAINT "insight_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insight_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resource_topics_locales" ADD CONSTRAINT "resource_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resource_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_topics_locales" ADD CONSTRAINT "webinar_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "macro_topics_locales" ADD CONSTRAINT "macro_topics_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."macro_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_classes_locales" ADD CONSTRAINT "story_classes_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_classes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_authors" ADD CONSTRAINT "webinar_authors_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_authors_locales" ADD CONSTRAINT "webinar_authors_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "news_items" ADD CONSTRAINT "news_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_items_locales" ADD CONSTRAINT "news_items_locales_topic_id_news_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."news_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "news_items_locales" ADD CONSTRAINT "news_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."news_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_download_link" ADD CONSTRAINT "resources_blocks_download_link_doc_id_media_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_blocks_download_link" ADD CONSTRAINT "resources_blocks_download_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_blocks_external_link" ADD CONSTRAINT "resources_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_locales" ADD CONSTRAINT "resources_locales_type_resource_id_resource_topics_id_fk" FOREIGN KEY ("type_resource_id") REFERENCES "public"."resource_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "resources_locales" ADD CONSTRAINT "resources_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "resources_rels" ADD CONSTRAINT "resources_rels_resource_topics_fk" FOREIGN KEY ("resource_topics_id") REFERENCES "public"."resource_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link" ADD CONSTRAINT "pages_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link" ADD CONSTRAINT "pages_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_item" ADD CONSTRAINT "pages_blocks_accordion_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion" ADD CONSTRAINT "pages_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_block" ADD CONSTRAINT "pages_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_section" ADD CONSTRAINT "pages_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link_2" ADD CONSTRAINT "pages_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_2" ADD CONSTRAINT "pages_blocks_external_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_block" ADD CONSTRAINT "pages_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_only" ADD CONSTRAINT "pages_blocks_text_only_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_structured_text_block" ADD CONSTRAINT "pages_blocks_structured_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_highlight" ADD CONSTRAINT "pages_blocks_highlight_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_highlight" ADD CONSTRAINT "pages_blocks_highlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_settings_chart" ADD CONSTRAINT "pages_blocks_settings_chart_select_chart_id_chart_elements_id_fk" FOREIGN KEY ("select_chart_id") REFERENCES "public"."chart_elements"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_settings_chart" ADD CONSTRAINT "pages_blocks_settings_chart_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_3" ADD CONSTRAINT "pages_blocks_external_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_panel" ADD CONSTRAINT "pages_blocks_panel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_list_item" ADD CONSTRAINT "pages_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_result" ADD CONSTRAINT "pages_blocks_result_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_section" ADD CONSTRAINT "pages_blocks_data_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link_3" ADD CONSTRAINT "pages_blocks_internal_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_4" ADD CONSTRAINT "pages_blocks_external_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_block_2" ADD CONSTRAINT "pages_blocks_text_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_editorial_with_icon" ADD CONSTRAINT "pages_blocks_card_editorial_with_icon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_additional_content" ADD CONSTRAINT "pages_blocks_additional_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_image" ADD CONSTRAINT "pages_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_news_tab" ADD CONSTRAINT "pages_blocks_news_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_story_tab" ADD CONSTRAINT "pages_blocks_story_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link_4" ADD CONSTRAINT "pages_blocks_internal_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_5" ADD CONSTRAINT "pages_blocks_external_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_news_feed" ADD CONSTRAINT "pages_blocks_news_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_channel" ADD CONSTRAINT "pages_blocks_channel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_support_channels_section" ADD CONSTRAINT "pages_blocks_support_channels_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link_5" ADD CONSTRAINT "pages_blocks_internal_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_6" ADD CONSTRAINT "pages_blocks_external_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_block_3" ADD CONSTRAINT "pages_blocks_text_block_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_item_2" ADD CONSTRAINT "pages_blocks_accordion_item_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_2" ADD CONSTRAINT "pages_blocks_accordion_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_block_2" ADD CONSTRAINT "pages_blocks_accordion_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_accordion" ADD CONSTRAINT "pages_blocks_text_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link_6" ADD CONSTRAINT "pages_blocks_internal_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_7" ADD CONSTRAINT "pages_blocks_external_link_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_support_cta_section" ADD CONSTRAINT "pages_blocks_support_cta_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_support_cta_section" ADD CONSTRAINT "pages_blocks_support_cta_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_internal_link_7" ADD CONSTRAINT "pages_blocks_internal_link_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_external_link_8" ADD CONSTRAINT "pages_blocks_external_link_8_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_block_4" ADD CONSTRAINT "pages_blocks_text_block_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_container" ADD CONSTRAINT "pages_blocks_data_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_statistic_block" ADD CONSTRAINT "pages_blocks_statistic_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_statistic" ADD CONSTRAINT "pages_blocks_text_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_list_collection" ADD CONSTRAINT "pages_blocks_list_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_topic_filter" ADD CONSTRAINT "pages_blocks_topic_filter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_link_block" ADD CONSTRAINT "pages_blocks_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_link" ADD CONSTRAINT "pages_blocks_card_link_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_link" ADD CONSTRAINT "pages_blocks_card_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_link_list" ADD CONSTRAINT "pages_blocks_card_link_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_use_case_container" ADD CONSTRAINT "pages_blocks_use_case_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_kpi_elements_fk" FOREIGN KEY ("kpi_elements_id") REFERENCES "public"."kpi_elements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_news_items_fk" FOREIGN KEY ("news_items_id") REFERENCES "public"."news_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_blocks_topics_block" ADD CONSTRAINT "articles_blocks_topics_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles" ADD CONSTRAINT "articles_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_locales" ADD CONSTRAINT "articles_locales_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_locales" ADD CONSTRAINT "articles_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "articles_locales" ADD CONSTRAINT "articles_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_article_topics_fk" FOREIGN KEY ("article_topics_id") REFERENCES "public"."article_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_news_topics_fk" FOREIGN KEY ("news_topics_id") REFERENCES "public"."news_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_story_topics_fk" FOREIGN KEY ("story_topics_id") REFERENCES "public"."story_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_insight_topics_fk" FOREIGN KEY ("insight_topics_id") REFERENCES "public"."insight_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_resource_topics_fk" FOREIGN KEY ("resource_topics_id") REFERENCES "public"."resource_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_webinar_topics_fk" FOREIGN KEY ("webinar_topics_id") REFERENCES "public"."webinar_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link" ADD CONSTRAINT "insights_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link" ADD CONSTRAINT "insights_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_hero" ADD CONSTRAINT "insights_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_blocks_hero" ADD CONSTRAINT "insights_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_blocks_hero" ADD CONSTRAINT "insights_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link_2" ADD CONSTRAINT "insights_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link_2" ADD CONSTRAINT "insights_blocks_external_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_block" ADD CONSTRAINT "insights_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_only" ADD CONSTRAINT "insights_blocks_text_only_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link_3" ADD CONSTRAINT "insights_blocks_internal_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link_3" ADD CONSTRAINT "insights_blocks_external_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_block_2" ADD CONSTRAINT "insights_blocks_text_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_card_editorial_with_icon" ADD CONSTRAINT "insights_blocks_card_editorial_with_icon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_additional_content" ADD CONSTRAINT "insights_blocks_additional_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_image" ADD CONSTRAINT "insights_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_image" ADD CONSTRAINT "insights_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_news_tab" ADD CONSTRAINT "insights_blocks_news_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_story_tab" ADD CONSTRAINT "insights_blocks_story_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link_4" ADD CONSTRAINT "insights_blocks_internal_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link_4" ADD CONSTRAINT "insights_blocks_external_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_news_feed" ADD CONSTRAINT "insights_blocks_news_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_channel" ADD CONSTRAINT "insights_blocks_channel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_support_channels_section" ADD CONSTRAINT "insights_blocks_support_channels_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link_5" ADD CONSTRAINT "insights_blocks_internal_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link_5" ADD CONSTRAINT "insights_blocks_external_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_block_3" ADD CONSTRAINT "insights_blocks_text_block_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_use_case_block" ADD CONSTRAINT "insights_blocks_use_case_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_use_case" ADD CONSTRAINT "insights_blocks_text_use_case_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link_6" ADD CONSTRAINT "insights_blocks_internal_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link_6" ADD CONSTRAINT "insights_blocks_external_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_block_4" ADD CONSTRAINT "insights_blocks_text_block_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_data_container" ADD CONSTRAINT "insights_blocks_data_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_statistic_block" ADD CONSTRAINT "insights_blocks_statistic_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_text_statistic" ADD CONSTRAINT "insights_blocks_text_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_link_block" ADD CONSTRAINT "insights_blocks_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_card_link" ADD CONSTRAINT "insights_blocks_card_link_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_blocks_card_link" ADD CONSTRAINT "insights_blocks_card_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_card_link_list" ADD CONSTRAINT "insights_blocks_card_link_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights" ADD CONSTRAINT "insights_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_locales" ADD CONSTRAINT "insights_locales_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_locales" ADD CONSTRAINT "insights_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_locales" ADD CONSTRAINT "insights_locales_topic_id_insight_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."insight_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_locales" ADD CONSTRAINT "insights_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_news_items_fk" FOREIGN KEY ("news_items_id") REFERENCES "public"."news_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_rels" ADD CONSTRAINT "insights_rels_kpi_elements_fk" FOREIGN KEY ("kpi_elements_id") REFERENCES "public"."kpi_elements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_internal_link" ADD CONSTRAINT "webinar_items_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_external_link" ADD CONSTRAINT "webinar_items_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_hero" ADD CONSTRAINT "webinar_items_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_hero" ADD CONSTRAINT "webinar_items_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_hero" ADD CONSTRAINT "webinar_items_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_download_link" ADD CONSTRAINT "webinar_items_blocks_download_link_doc_id_media_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_download_link" ADD CONSTRAINT "webinar_items_blocks_download_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_action_card" ADD CONSTRAINT "webinar_items_blocks_action_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_internal_link_2" ADD CONSTRAINT "webinar_items_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_external_link_2" ADD CONSTRAINT "webinar_items_blocks_external_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_text_block" ADD CONSTRAINT "webinar_items_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_author_list" ADD CONSTRAINT "webinar_items_blocks_author_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_speaker" ADD CONSTRAINT "webinar_items_blocks_speaker_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_internal_link_3" ADD CONSTRAINT "webinar_items_blocks_internal_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_external_link_3" ADD CONSTRAINT "webinar_items_blocks_external_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_text_block_2" ADD CONSTRAINT "webinar_items_blocks_text_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_list_item" ADD CONSTRAINT "webinar_items_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_feature_list" ADD CONSTRAINT "webinar_items_blocks_feature_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_quick_link_card" ADD CONSTRAINT "webinar_items_blocks_quick_link_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_blocks_webinar_description" ADD CONSTRAINT "webinar_items_blocks_webinar_description_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items" ADD CONSTRAINT "webinar_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items" ADD CONSTRAINT "webinar_items_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items_locales" ADD CONSTRAINT "webinar_items_locales_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items_locales" ADD CONSTRAINT "webinar_items_locales_topic_id_webinar_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."webinar_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "webinar_items_locales" ADD CONSTRAINT "webinar_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "webinar_items_rels" ADD CONSTRAINT "webinar_items_rels_webinar_authors_fk" FOREIGN KEY ("webinar_authors_id") REFERENCES "public"."webinar_authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link" ADD CONSTRAINT "story_items_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link" ADD CONSTRAINT "story_items_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_hero" ADD CONSTRAINT "story_items_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_blocks_hero" ADD CONSTRAINT "story_items_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_blocks_hero" ADD CONSTRAINT "story_items_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_accordion_item" ADD CONSTRAINT "story_items_blocks_accordion_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_accordion" ADD CONSTRAINT "story_items_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_accordion_block" ADD CONSTRAINT "story_items_blocks_accordion_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_faq_section" ADD CONSTRAINT "story_items_blocks_faq_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_2" ADD CONSTRAINT "story_items_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_2" ADD CONSTRAINT "story_items_blocks_external_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_block" ADD CONSTRAINT "story_items_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_only" ADD CONSTRAINT "story_items_blocks_text_only_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_structured_text_block" ADD CONSTRAINT "story_items_blocks_structured_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_3" ADD CONSTRAINT "story_items_blocks_internal_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_3" ADD CONSTRAINT "story_items_blocks_external_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_block_2" ADD CONSTRAINT "story_items_blocks_text_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_card_editorial_with_icon" ADD CONSTRAINT "story_items_blocks_card_editorial_with_icon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_additional_content" ADD CONSTRAINT "story_items_blocks_additional_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_image" ADD CONSTRAINT "story_items_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_image" ADD CONSTRAINT "story_items_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_channel" ADD CONSTRAINT "story_items_blocks_channel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_support_channels_section" ADD CONSTRAINT "story_items_blocks_support_channels_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_4" ADD CONSTRAINT "story_items_blocks_internal_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_4" ADD CONSTRAINT "story_items_blocks_external_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_block_3" ADD CONSTRAINT "story_items_blocks_text_block_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_accordion_item_2" ADD CONSTRAINT "story_items_blocks_accordion_item_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_accordion_2" ADD CONSTRAINT "story_items_blocks_accordion_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_accordion_block_2" ADD CONSTRAINT "story_items_blocks_accordion_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_accordion" ADD CONSTRAINT "story_items_blocks_text_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_list_collection" ADD CONSTRAINT "story_items_blocks_list_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_5" ADD CONSTRAINT "story_items_blocks_internal_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_5" ADD CONSTRAINT "story_items_blocks_external_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_support_cta_section" ADD CONSTRAINT "story_items_blocks_support_cta_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_blocks_support_cta_section" ADD CONSTRAINT "story_items_blocks_support_cta_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_6" ADD CONSTRAINT "story_items_blocks_internal_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_6" ADD CONSTRAINT "story_items_blocks_external_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_block_4" ADD CONSTRAINT "story_items_blocks_text_block_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_use_case_block" ADD CONSTRAINT "story_items_blocks_use_case_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_use_case" ADD CONSTRAINT "story_items_blocks_text_use_case_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_internal_link_7" ADD CONSTRAINT "story_items_blocks_internal_link_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_external_link_7" ADD CONSTRAINT "story_items_blocks_external_link_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_block_5" ADD CONSTRAINT "story_items_blocks_text_block_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_data_container" ADD CONSTRAINT "story_items_blocks_data_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_statistic_block" ADD CONSTRAINT "story_items_blocks_statistic_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_text_statistic" ADD CONSTRAINT "story_items_blocks_text_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_link_block" ADD CONSTRAINT "story_items_blocks_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_card_link" ADD CONSTRAINT "story_items_blocks_card_link_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_blocks_card_link" ADD CONSTRAINT "story_items_blocks_card_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_blocks_card_link_list" ADD CONSTRAINT "story_items_blocks_card_link_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items" ADD CONSTRAINT "story_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items" ADD CONSTRAINT "story_items_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_locales" ADD CONSTRAINT "story_items_locales_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_locales" ADD CONSTRAINT "story_items_locales_article_classification_id_story_classes_id_fk" FOREIGN KEY ("article_classification_id") REFERENCES "public"."story_classes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_locales" ADD CONSTRAINT "story_items_locales_topic_id_story_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."story_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_items_locales" ADD CONSTRAINT "story_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_items_rels" ADD CONSTRAINT "story_items_rels_kpi_elements_fk" FOREIGN KEY ("kpi_elements_id") REFERENCES "public"."kpi_elements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_internal_link" ADD CONSTRAINT "catalogues_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_external_link" ADD CONSTRAINT "catalogues_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_hero" ADD CONSTRAINT "catalogues_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_hero" ADD CONSTRAINT "catalogues_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_hero" ADD CONSTRAINT "catalogues_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_internal_link_2" ADD CONSTRAINT "catalogues_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_external_link_2" ADD CONSTRAINT "catalogues_blocks_external_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_text_block" ADD CONSTRAINT "catalogues_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_text_only" ADD CONSTRAINT "catalogues_blocks_text_only_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_external_link_3" ADD CONSTRAINT "catalogues_blocks_external_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_callout_link" ADD CONSTRAINT "catalogues_blocks_callout_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_catalogue_tab" ADD CONSTRAINT "catalogues_blocks_catalogue_tab_filter_story_id_story_topics_id_fk" FOREIGN KEY ("filter_story_id") REFERENCES "public"."story_topics"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_catalogue_tab" ADD CONSTRAINT "catalogues_blocks_catalogue_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_blocks_catalogue_feed" ADD CONSTRAINT "catalogues_blocks_catalogue_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues" ADD CONSTRAINT "catalogues_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "catalogues_locales" ADD CONSTRAINT "catalogues_locales_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "catalogues_locales" ADD CONSTRAINT "catalogues_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "catalogues_rels" ADD CONSTRAINT "catalogues_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_article_topics_fk" FOREIGN KEY ("article_topics_id") REFERENCES "public"."article_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_topics_fk" FOREIGN KEY ("news_topics_id") REFERENCES "public"."news_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_story_topics_fk" FOREIGN KEY ("story_topics_id") REFERENCES "public"."story_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_insight_topics_fk" FOREIGN KEY ("insight_topics_id") REFERENCES "public"."insight_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_resource_topics_fk" FOREIGN KEY ("resource_topics_id") REFERENCES "public"."resource_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_webinar_topics_fk" FOREIGN KEY ("webinar_topics_id") REFERENCES "public"."webinar_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_macro_topics_fk" FOREIGN KEY ("macro_topics_id") REFERENCES "public"."macro_topics"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_story_classes_fk" FOREIGN KEY ("story_classes_id") REFERENCES "public"."story_classes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_webinar_authors_fk" FOREIGN KEY ("webinar_authors_id") REFERENCES "public"."webinar_authors"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chart_elements_fk" FOREIGN KEY ("chart_elements_id") REFERENCES "public"."chart_elements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_kpi_elements_fk" FOREIGN KEY ("kpi_elements_id") REFERENCES "public"."kpi_elements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_news_items_fk" FOREIGN KEY ("news_items_id") REFERENCES "public"."news_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_resources_fk" FOREIGN KEY ("resources_id") REFERENCES "public"."resources"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_brand" ADD CONSTRAINT "layout_blocks_brand_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_brand_header" ADD CONSTRAINT "layout_blocks_brand_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_external_link" ADD CONSTRAINT "layout_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_internal_link" ADD CONSTRAINT "layout_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_supporting_brand" ADD CONSTRAINT "layout_blocks_supporting_brand_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_internal_link_2" ADD CONSTRAINT "layout_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_mailing_list_signup_block" ADD CONSTRAINT "layout_blocks_mailing_list_signup_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_menu_item" ADD CONSTRAINT "layout_blocks_menu_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_menu_item_2" ADD CONSTRAINT "layout_blocks_menu_item_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_mega_menu_item" ADD CONSTRAINT "layout_blocks_mega_menu_item_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout_blocks_mega_menu_item" ADD CONSTRAINT "layout_blocks_mega_menu_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_locales" ADD CONSTRAINT "layout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_rels" ADD CONSTRAINT "layout_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_internal_link" ADD CONSTRAINT "homepage_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_external_link" ADD CONSTRAINT "homepage_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_hero" ADD CONSTRAINT "homepage_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_hero" ADD CONSTRAINT "homepage_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_hero" ADD CONSTRAINT "homepage_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_internal_link_2" ADD CONSTRAINT "homepage_blocks_internal_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_external_link_2" ADD CONSTRAINT "homepage_blocks_external_link_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_block" ADD CONSTRAINT "homepage_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_only" ADD CONSTRAINT "homepage_blocks_text_only_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_internal_link_3" ADD CONSTRAINT "homepage_blocks_internal_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_external_link_3" ADD CONSTRAINT "homepage_blocks_external_link_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_block_2" ADD CONSTRAINT "homepage_blocks_text_block_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_card_editorial_with_icon" ADD CONSTRAINT "homepage_blocks_card_editorial_with_icon_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_additional_content" ADD CONSTRAINT "homepage_blocks_additional_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_image" ADD CONSTRAINT "homepage_blocks_text_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_image" ADD CONSTRAINT "homepage_blocks_text_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_news_tab" ADD CONSTRAINT "homepage_blocks_news_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_story_tab" ADD CONSTRAINT "homepage_blocks_story_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_internal_link_4" ADD CONSTRAINT "homepage_blocks_internal_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_external_link_4" ADD CONSTRAINT "homepage_blocks_external_link_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_news_feed" ADD CONSTRAINT "homepage_blocks_news_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_channel" ADD CONSTRAINT "homepage_blocks_channel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_support_channels_section" ADD CONSTRAINT "homepage_blocks_support_channels_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_internal_link_5" ADD CONSTRAINT "homepage_blocks_internal_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_external_link_5" ADD CONSTRAINT "homepage_blocks_external_link_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_block_3" ADD CONSTRAINT "homepage_blocks_text_block_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_use_case_block" ADD CONSTRAINT "homepage_blocks_use_case_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_use_case" ADD CONSTRAINT "homepage_blocks_text_use_case_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_internal_link_6" ADD CONSTRAINT "homepage_blocks_internal_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_external_link_6" ADD CONSTRAINT "homepage_blocks_external_link_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_block_4" ADD CONSTRAINT "homepage_blocks_text_block_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_data_container" ADD CONSTRAINT "homepage_blocks_data_container_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_statistic_block" ADD CONSTRAINT "homepage_blocks_statistic_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_text_statistic" ADD CONSTRAINT "homepage_blocks_text_statistic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_link_block" ADD CONSTRAINT "homepage_blocks_link_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_card_link" ADD CONSTRAINT "homepage_blocks_card_link_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_card_link" ADD CONSTRAINT "homepage_blocks_card_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_card_link_list" ADD CONSTRAINT "homepage_blocks_card_link_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_locales" ADD CONSTRAINT "homepage_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_news_items_fk" FOREIGN KEY ("news_items_id") REFERENCES "public"."news_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_kpi_elements_fk" FOREIGN KEY ("kpi_elements_id") REFERENCES "public"."kpi_elements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_blocks_internal_link" ADD CONSTRAINT "search_blocks_internal_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_blocks_external_link" ADD CONSTRAINT "search_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_blocks_hero" ADD CONSTRAINT "search_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_blocks_hero" ADD CONSTRAINT "search_blocks_hero_background_image_for_mobile_id_media_id_fk" FOREIGN KEY ("background_image_for_mobile_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_blocks_hero" ADD CONSTRAINT "search_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_blocks_search_bar" ADD CONSTRAINT "search_blocks_search_bar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "global_setting_blocks_external_link" ADD CONSTRAINT "global_setting_blocks_external_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global_setting"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "global_setting" ADD CONSTRAINT "global_setting_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "global_setting_locales" ADD CONSTRAINT "global_setting_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."global_setting"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_blocks_menu_article_item" ADD CONSTRAINT "sidebar_for_article_blocks_menu_article_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sidebar_for_article"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_blocks_accordion_menu" ADD CONSTRAINT "sidebar_for_article_blocks_accordion_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sidebar_for_article"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_locales" ADD CONSTRAINT "sidebar_for_article_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sidebar_for_article"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."sidebar_for_article"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_insights_fk" FOREIGN KEY ("insights_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_webinar_items_fk" FOREIGN KEY ("webinar_items_id") REFERENCES "public"."webinar_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_story_items_fk" FOREIGN KEY ("story_items_id") REFERENCES "public"."story_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sidebar_for_article_rels" ADD CONSTRAINT "sidebar_for_article_rels_catalogues_fk" FOREIGN KEY ("catalogues_id") REFERENCES "public"."catalogues"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_default" ADD CONSTRAINT "seo_default_og_image_id_media_id_fk" FOREIGN KEY ("og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_default" ADD CONSTRAINT "seo_default_favicon_id_media_id_fk" FOREIGN KEY ("favicon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_default_locales" ADD CONSTRAINT "seo_default_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_default"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "article_topics_updated_at_idx" ON "article_topics" USING btree ("updated_at");
  CREATE INDEX "article_topics_created_at_idx" ON "article_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "article_topics_locales_locale_parent_id_unique" ON "article_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "news_topics_updated_at_idx" ON "news_topics" USING btree ("updated_at");
  CREATE INDEX "news_topics_created_at_idx" ON "news_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "news_topics_locales_locale_parent_id_unique" ON "news_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "story_topics_updated_at_idx" ON "story_topics" USING btree ("updated_at");
  CREATE INDEX "story_topics_created_at_idx" ON "story_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "story_topics_locales_locale_parent_id_unique" ON "story_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "insight_topics_updated_at_idx" ON "insight_topics" USING btree ("updated_at");
  CREATE INDEX "insight_topics_created_at_idx" ON "insight_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "insight_topics_locales_locale_parent_id_unique" ON "insight_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "resource_topics_updated_at_idx" ON "resource_topics" USING btree ("updated_at");
  CREATE INDEX "resource_topics_created_at_idx" ON "resource_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "resource_topics_locales_locale_parent_id_unique" ON "resource_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "webinar_topics_updated_at_idx" ON "webinar_topics" USING btree ("updated_at");
  CREATE INDEX "webinar_topics_created_at_idx" ON "webinar_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "webinar_topics_locales_locale_parent_id_unique" ON "webinar_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "macro_topics_updated_at_idx" ON "macro_topics" USING btree ("updated_at");
  CREATE INDEX "macro_topics_created_at_idx" ON "macro_topics" USING btree ("created_at");
  CREATE UNIQUE INDEX "macro_topics_locales_locale_parent_id_unique" ON "macro_topics_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "story_classes_updated_at_idx" ON "story_classes" USING btree ("updated_at");
  CREATE INDEX "story_classes_created_at_idx" ON "story_classes" USING btree ("created_at");
  CREATE UNIQUE INDEX "story_classes_locales_locale_parent_id_unique" ON "story_classes_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "webinar_authors_photo_idx" ON "webinar_authors" USING btree ("photo_id");
  CREATE INDEX "webinar_authors_updated_at_idx" ON "webinar_authors" USING btree ("updated_at");
  CREATE INDEX "webinar_authors_created_at_idx" ON "webinar_authors" USING btree ("created_at");
  CREATE UNIQUE INDEX "webinar_authors_locales_locale_parent_id_unique" ON "webinar_authors_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "chart_elements_updated_at_idx" ON "chart_elements" USING btree ("updated_at");
  CREATE INDEX "chart_elements_created_at_idx" ON "chart_elements" USING btree ("created_at");
  CREATE INDEX "kpi_elements_updated_at_idx" ON "kpi_elements" USING btree ("updated_at");
  CREATE INDEX "kpi_elements_created_at_idx" ON "kpi_elements" USING btree ("created_at");
  CREATE INDEX "news_items_image_idx" ON "news_items" USING btree ("image_id");
  CREATE INDEX "news_items_updated_at_idx" ON "news_items" USING btree ("updated_at");
  CREATE INDEX "news_items_created_at_idx" ON "news_items" USING btree ("created_at");
  CREATE INDEX "news_items_topic_idx" ON "news_items_locales" USING btree ("topic_id","_locale");
  CREATE UNIQUE INDEX "news_items_locales_locale_parent_id_unique" ON "news_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "resources_blocks_download_link_order_idx" ON "resources_blocks_download_link" USING btree ("_order");
  CREATE INDEX "resources_blocks_download_link_parent_id_idx" ON "resources_blocks_download_link" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_download_link_path_idx" ON "resources_blocks_download_link" USING btree ("_path");
  CREATE INDEX "resources_blocks_download_link_locale_idx" ON "resources_blocks_download_link" USING btree ("_locale");
  CREATE INDEX "resources_blocks_download_link_doc_idx" ON "resources_blocks_download_link" USING btree ("doc_id");
  CREATE INDEX "resources_blocks_external_link_order_idx" ON "resources_blocks_external_link" USING btree ("_order");
  CREATE INDEX "resources_blocks_external_link_parent_id_idx" ON "resources_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "resources_blocks_external_link_path_idx" ON "resources_blocks_external_link" USING btree ("_path");
  CREATE INDEX "resources_blocks_external_link_locale_idx" ON "resources_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "resources_updated_at_idx" ON "resources" USING btree ("updated_at");
  CREATE INDEX "resources_created_at_idx" ON "resources" USING btree ("created_at");
  CREATE INDEX "resources_type_resource_idx" ON "resources_locales" USING btree ("type_resource_id","_locale");
  CREATE UNIQUE INDEX "resources_locales_locale_parent_id_unique" ON "resources_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "resources_rels_order_idx" ON "resources_rels" USING btree ("order");
  CREATE INDEX "resources_rels_parent_idx" ON "resources_rels" USING btree ("parent_id");
  CREATE INDEX "resources_rels_path_idx" ON "resources_rels" USING btree ("path");
  CREATE INDEX "resources_rels_locale_idx" ON "resources_rels" USING btree ("locale");
  CREATE INDEX "resources_rels_resource_topics_id_idx" ON "resources_rels" USING btree ("resource_topics_id","locale");
  CREATE INDEX "pages_blocks_internal_link_order_idx" ON "pages_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_parent_id_idx" ON "pages_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_path_idx" ON "pages_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_locale_idx" ON "pages_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_order_idx" ON "pages_blocks_external_link" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_parent_id_idx" ON "pages_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_path_idx" ON "pages_blocks_external_link" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_locale_idx" ON "pages_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_hero_background_image_for_mobile_idx" ON "pages_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "pages_blocks_accordion_item_order_idx" ON "pages_blocks_accordion_item" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_item_parent_id_idx" ON "pages_blocks_accordion_item" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_item_path_idx" ON "pages_blocks_accordion_item" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_item_locale_idx" ON "pages_blocks_accordion_item" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_order_idx" ON "pages_blocks_accordion" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_parent_id_idx" ON "pages_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_path_idx" ON "pages_blocks_accordion" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_locale_idx" ON "pages_blocks_accordion" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_block_order_idx" ON "pages_blocks_accordion_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_block_parent_id_idx" ON "pages_blocks_accordion_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_block_path_idx" ON "pages_blocks_accordion_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_block_locale_idx" ON "pages_blocks_accordion_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_faq_section_order_idx" ON "pages_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_section_parent_id_idx" ON "pages_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_section_path_idx" ON "pages_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_section_locale_idx" ON "pages_blocks_faq_section" USING btree ("_locale");
  CREATE INDEX "pages_blocks_internal_link_2_order_idx" ON "pages_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_2_parent_id_idx" ON "pages_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_2_path_idx" ON "pages_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_2_locale_idx" ON "pages_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_2_order_idx" ON "pages_blocks_external_link_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_2_parent_id_idx" ON "pages_blocks_external_link_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_2_path_idx" ON "pages_blocks_external_link_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_2_locale_idx" ON "pages_blocks_external_link_2" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_block_order_idx" ON "pages_blocks_text_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_block_parent_id_idx" ON "pages_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_block_path_idx" ON "pages_blocks_text_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_block_locale_idx" ON "pages_blocks_text_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_only_order_idx" ON "pages_blocks_text_only" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_only_parent_id_idx" ON "pages_blocks_text_only" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_only_path_idx" ON "pages_blocks_text_only" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_only_locale_idx" ON "pages_blocks_text_only" USING btree ("_locale");
  CREATE INDEX "pages_blocks_structured_text_block_order_idx" ON "pages_blocks_structured_text_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_structured_text_block_parent_id_idx" ON "pages_blocks_structured_text_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_structured_text_block_path_idx" ON "pages_blocks_structured_text_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_structured_text_block_locale_idx" ON "pages_blocks_structured_text_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_highlight_order_idx" ON "pages_blocks_highlight" USING btree ("_order");
  CREATE INDEX "pages_blocks_highlight_parent_id_idx" ON "pages_blocks_highlight" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_highlight_path_idx" ON "pages_blocks_highlight" USING btree ("_path");
  CREATE INDEX "pages_blocks_highlight_locale_idx" ON "pages_blocks_highlight" USING btree ("_locale");
  CREATE INDEX "pages_blocks_highlight_image_idx" ON "pages_blocks_highlight" USING btree ("image_id");
  CREATE INDEX "pages_blocks_settings_chart_order_idx" ON "pages_blocks_settings_chart" USING btree ("_order");
  CREATE INDEX "pages_blocks_settings_chart_parent_id_idx" ON "pages_blocks_settings_chart" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_settings_chart_path_idx" ON "pages_blocks_settings_chart" USING btree ("_path");
  CREATE INDEX "pages_blocks_settings_chart_locale_idx" ON "pages_blocks_settings_chart" USING btree ("_locale");
  CREATE INDEX "pages_blocks_settings_chart_select_chart_idx" ON "pages_blocks_settings_chart" USING btree ("select_chart_id");
  CREATE INDEX "pages_blocks_external_link_3_order_idx" ON "pages_blocks_external_link_3" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_3_parent_id_idx" ON "pages_blocks_external_link_3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_3_path_idx" ON "pages_blocks_external_link_3" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_3_locale_idx" ON "pages_blocks_external_link_3" USING btree ("_locale");
  CREATE INDEX "pages_blocks_panel_order_idx" ON "pages_blocks_panel" USING btree ("_order");
  CREATE INDEX "pages_blocks_panel_parent_id_idx" ON "pages_blocks_panel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_panel_path_idx" ON "pages_blocks_panel" USING btree ("_path");
  CREATE INDEX "pages_blocks_panel_locale_idx" ON "pages_blocks_panel" USING btree ("_locale");
  CREATE INDEX "pages_blocks_list_item_order_idx" ON "pages_blocks_list_item" USING btree ("_order");
  CREATE INDEX "pages_blocks_list_item_parent_id_idx" ON "pages_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_list_item_path_idx" ON "pages_blocks_list_item" USING btree ("_path");
  CREATE INDEX "pages_blocks_list_item_locale_idx" ON "pages_blocks_list_item" USING btree ("_locale");
  CREATE INDEX "pages_blocks_result_order_idx" ON "pages_blocks_result" USING btree ("_order");
  CREATE INDEX "pages_blocks_result_parent_id_idx" ON "pages_blocks_result" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_result_path_idx" ON "pages_blocks_result" USING btree ("_path");
  CREATE INDEX "pages_blocks_result_locale_idx" ON "pages_blocks_result" USING btree ("_locale");
  CREATE INDEX "pages_blocks_data_section_order_idx" ON "pages_blocks_data_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_section_parent_id_idx" ON "pages_blocks_data_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_section_path_idx" ON "pages_blocks_data_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_data_section_locale_idx" ON "pages_blocks_data_section" USING btree ("_locale");
  CREATE INDEX "pages_blocks_internal_link_3_order_idx" ON "pages_blocks_internal_link_3" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_3_parent_id_idx" ON "pages_blocks_internal_link_3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_3_path_idx" ON "pages_blocks_internal_link_3" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_3_locale_idx" ON "pages_blocks_internal_link_3" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_4_order_idx" ON "pages_blocks_external_link_4" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_4_parent_id_idx" ON "pages_blocks_external_link_4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_4_path_idx" ON "pages_blocks_external_link_4" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_4_locale_idx" ON "pages_blocks_external_link_4" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_block_2_order_idx" ON "pages_blocks_text_block_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_block_2_parent_id_idx" ON "pages_blocks_text_block_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_block_2_path_idx" ON "pages_blocks_text_block_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_block_2_locale_idx" ON "pages_blocks_text_block_2" USING btree ("_locale");
  CREATE INDEX "pages_blocks_card_editorial_with_icon_order_idx" ON "pages_blocks_card_editorial_with_icon" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_editorial_with_icon_parent_id_idx" ON "pages_blocks_card_editorial_with_icon" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_editorial_with_icon_path_idx" ON "pages_blocks_card_editorial_with_icon" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_editorial_with_icon_locale_idx" ON "pages_blocks_card_editorial_with_icon" USING btree ("_locale");
  CREATE INDEX "pages_blocks_additional_content_order_idx" ON "pages_blocks_additional_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_additional_content_parent_id_idx" ON "pages_blocks_additional_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_additional_content_path_idx" ON "pages_blocks_additional_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_additional_content_locale_idx" ON "pages_blocks_additional_content" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_image_order_idx" ON "pages_blocks_text_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_image_parent_id_idx" ON "pages_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_image_path_idx" ON "pages_blocks_text_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_image_locale_idx" ON "pages_blocks_text_image" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_image_image_idx" ON "pages_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_news_tab_order_idx" ON "pages_blocks_news_tab" USING btree ("_order");
  CREATE INDEX "pages_blocks_news_tab_parent_id_idx" ON "pages_blocks_news_tab" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_news_tab_path_idx" ON "pages_blocks_news_tab" USING btree ("_path");
  CREATE INDEX "pages_blocks_news_tab_locale_idx" ON "pages_blocks_news_tab" USING btree ("_locale");
  CREATE INDEX "pages_blocks_story_tab_order_idx" ON "pages_blocks_story_tab" USING btree ("_order");
  CREATE INDEX "pages_blocks_story_tab_parent_id_idx" ON "pages_blocks_story_tab" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_story_tab_path_idx" ON "pages_blocks_story_tab" USING btree ("_path");
  CREATE INDEX "pages_blocks_story_tab_locale_idx" ON "pages_blocks_story_tab" USING btree ("_locale");
  CREATE INDEX "pages_blocks_internal_link_4_order_idx" ON "pages_blocks_internal_link_4" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_4_parent_id_idx" ON "pages_blocks_internal_link_4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_4_path_idx" ON "pages_blocks_internal_link_4" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_4_locale_idx" ON "pages_blocks_internal_link_4" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_5_order_idx" ON "pages_blocks_external_link_5" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_5_parent_id_idx" ON "pages_blocks_external_link_5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_5_path_idx" ON "pages_blocks_external_link_5" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_5_locale_idx" ON "pages_blocks_external_link_5" USING btree ("_locale");
  CREATE INDEX "pages_blocks_news_feed_order_idx" ON "pages_blocks_news_feed" USING btree ("_order");
  CREATE INDEX "pages_blocks_news_feed_parent_id_idx" ON "pages_blocks_news_feed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_news_feed_path_idx" ON "pages_blocks_news_feed" USING btree ("_path");
  CREATE INDEX "pages_blocks_news_feed_locale_idx" ON "pages_blocks_news_feed" USING btree ("_locale");
  CREATE INDEX "pages_blocks_channel_order_idx" ON "pages_blocks_channel" USING btree ("_order");
  CREATE INDEX "pages_blocks_channel_parent_id_idx" ON "pages_blocks_channel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_channel_path_idx" ON "pages_blocks_channel" USING btree ("_path");
  CREATE INDEX "pages_blocks_channel_locale_idx" ON "pages_blocks_channel" USING btree ("_locale");
  CREATE INDEX "pages_blocks_support_channels_section_order_idx" ON "pages_blocks_support_channels_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_support_channels_section_parent_id_idx" ON "pages_blocks_support_channels_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_support_channels_section_path_idx" ON "pages_blocks_support_channels_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_support_channels_section_locale_idx" ON "pages_blocks_support_channels_section" USING btree ("_locale");
  CREATE INDEX "pages_blocks_internal_link_5_order_idx" ON "pages_blocks_internal_link_5" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_5_parent_id_idx" ON "pages_blocks_internal_link_5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_5_path_idx" ON "pages_blocks_internal_link_5" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_5_locale_idx" ON "pages_blocks_internal_link_5" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_6_order_idx" ON "pages_blocks_external_link_6" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_6_parent_id_idx" ON "pages_blocks_external_link_6" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_6_path_idx" ON "pages_blocks_external_link_6" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_6_locale_idx" ON "pages_blocks_external_link_6" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_block_3_order_idx" ON "pages_blocks_text_block_3" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_block_3_parent_id_idx" ON "pages_blocks_text_block_3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_block_3_path_idx" ON "pages_blocks_text_block_3" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_block_3_locale_idx" ON "pages_blocks_text_block_3" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_item_2_order_idx" ON "pages_blocks_accordion_item_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_item_2_parent_id_idx" ON "pages_blocks_accordion_item_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_item_2_path_idx" ON "pages_blocks_accordion_item_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_item_2_locale_idx" ON "pages_blocks_accordion_item_2" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_2_order_idx" ON "pages_blocks_accordion_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_2_parent_id_idx" ON "pages_blocks_accordion_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_2_path_idx" ON "pages_blocks_accordion_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_2_locale_idx" ON "pages_blocks_accordion_2" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_block_2_order_idx" ON "pages_blocks_accordion_block_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_block_2_parent_id_idx" ON "pages_blocks_accordion_block_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_block_2_path_idx" ON "pages_blocks_accordion_block_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_block_2_locale_idx" ON "pages_blocks_accordion_block_2" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_accordion_order_idx" ON "pages_blocks_text_accordion" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_accordion_parent_id_idx" ON "pages_blocks_text_accordion" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_accordion_path_idx" ON "pages_blocks_text_accordion" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_accordion_locale_idx" ON "pages_blocks_text_accordion" USING btree ("_locale");
  CREATE INDEX "pages_blocks_internal_link_6_order_idx" ON "pages_blocks_internal_link_6" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_6_parent_id_idx" ON "pages_blocks_internal_link_6" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_6_path_idx" ON "pages_blocks_internal_link_6" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_6_locale_idx" ON "pages_blocks_internal_link_6" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_7_order_idx" ON "pages_blocks_external_link_7" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_7_parent_id_idx" ON "pages_blocks_external_link_7" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_7_path_idx" ON "pages_blocks_external_link_7" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_7_locale_idx" ON "pages_blocks_external_link_7" USING btree ("_locale");
  CREATE INDEX "pages_blocks_support_cta_section_order_idx" ON "pages_blocks_support_cta_section" USING btree ("_order");
  CREATE INDEX "pages_blocks_support_cta_section_parent_id_idx" ON "pages_blocks_support_cta_section" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_support_cta_section_path_idx" ON "pages_blocks_support_cta_section" USING btree ("_path");
  CREATE INDEX "pages_blocks_support_cta_section_locale_idx" ON "pages_blocks_support_cta_section" USING btree ("_locale");
  CREATE INDEX "pages_blocks_support_cta_section_image_idx" ON "pages_blocks_support_cta_section" USING btree ("image_id");
  CREATE INDEX "pages_blocks_internal_link_7_order_idx" ON "pages_blocks_internal_link_7" USING btree ("_order");
  CREATE INDEX "pages_blocks_internal_link_7_parent_id_idx" ON "pages_blocks_internal_link_7" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_internal_link_7_path_idx" ON "pages_blocks_internal_link_7" USING btree ("_path");
  CREATE INDEX "pages_blocks_internal_link_7_locale_idx" ON "pages_blocks_internal_link_7" USING btree ("_locale");
  CREATE INDEX "pages_blocks_external_link_8_order_idx" ON "pages_blocks_external_link_8" USING btree ("_order");
  CREATE INDEX "pages_blocks_external_link_8_parent_id_idx" ON "pages_blocks_external_link_8" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_external_link_8_path_idx" ON "pages_blocks_external_link_8" USING btree ("_path");
  CREATE INDEX "pages_blocks_external_link_8_locale_idx" ON "pages_blocks_external_link_8" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_block_4_order_idx" ON "pages_blocks_text_block_4" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_block_4_parent_id_idx" ON "pages_blocks_text_block_4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_block_4_path_idx" ON "pages_blocks_text_block_4" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_block_4_locale_idx" ON "pages_blocks_text_block_4" USING btree ("_locale");
  CREATE INDEX "pages_blocks_data_container_order_idx" ON "pages_blocks_data_container" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_container_parent_id_idx" ON "pages_blocks_data_container" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_container_path_idx" ON "pages_blocks_data_container" USING btree ("_path");
  CREATE INDEX "pages_blocks_data_container_locale_idx" ON "pages_blocks_data_container" USING btree ("_locale");
  CREATE INDEX "pages_blocks_statistic_block_order_idx" ON "pages_blocks_statistic_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_statistic_block_parent_id_idx" ON "pages_blocks_statistic_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_statistic_block_path_idx" ON "pages_blocks_statistic_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_statistic_block_locale_idx" ON "pages_blocks_statistic_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_text_statistic_order_idx" ON "pages_blocks_text_statistic" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_statistic_parent_id_idx" ON "pages_blocks_text_statistic" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_statistic_path_idx" ON "pages_blocks_text_statistic" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_statistic_locale_idx" ON "pages_blocks_text_statistic" USING btree ("_locale");
  CREATE INDEX "pages_blocks_list_collection_order_idx" ON "pages_blocks_list_collection" USING btree ("_order");
  CREATE INDEX "pages_blocks_list_collection_parent_id_idx" ON "pages_blocks_list_collection" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_list_collection_path_idx" ON "pages_blocks_list_collection" USING btree ("_path");
  CREATE INDEX "pages_blocks_list_collection_locale_idx" ON "pages_blocks_list_collection" USING btree ("_locale");
  CREATE INDEX "pages_blocks_topic_filter_order_idx" ON "pages_blocks_topic_filter" USING btree ("_order");
  CREATE INDEX "pages_blocks_topic_filter_parent_id_idx" ON "pages_blocks_topic_filter" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_topic_filter_path_idx" ON "pages_blocks_topic_filter" USING btree ("_path");
  CREATE INDEX "pages_blocks_topic_filter_locale_idx" ON "pages_blocks_topic_filter" USING btree ("_locale");
  CREATE INDEX "pages_blocks_link_block_order_idx" ON "pages_blocks_link_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_link_block_parent_id_idx" ON "pages_blocks_link_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_link_block_path_idx" ON "pages_blocks_link_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_link_block_locale_idx" ON "pages_blocks_link_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_card_link_order_idx" ON "pages_blocks_card_link" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_link_parent_id_idx" ON "pages_blocks_card_link" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_link_path_idx" ON "pages_blocks_card_link" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_link_locale_idx" ON "pages_blocks_card_link" USING btree ("_locale");
  CREATE INDEX "pages_blocks_card_link_image_idx" ON "pages_blocks_card_link" USING btree ("image_id");
  CREATE INDEX "pages_blocks_card_link_list_order_idx" ON "pages_blocks_card_link_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_link_list_parent_id_idx" ON "pages_blocks_card_link_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_link_list_path_idx" ON "pages_blocks_card_link_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_link_list_locale_idx" ON "pages_blocks_card_link_list" USING btree ("_locale");
  CREATE INDEX "pages_blocks_use_case_container_order_idx" ON "pages_blocks_use_case_container" USING btree ("_order");
  CREATE INDEX "pages_blocks_use_case_container_parent_id_idx" ON "pages_blocks_use_case_container" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_use_case_container_path_idx" ON "pages_blocks_use_case_container" USING btree ("_path");
  CREATE INDEX "pages_blocks_use_case_container_locale_idx" ON "pages_blocks_use_case_container" USING btree ("_locale");
  CREATE INDEX "pages_seo_seo_image_idx" ON "pages" USING btree ("seo_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_slug_idx" ON "pages_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_locale_idx" ON "pages_rels" USING btree ("locale");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id","locale");
  CREATE INDEX "pages_rels_articles_id_idx" ON "pages_rels" USING btree ("articles_id","locale");
  CREATE INDEX "pages_rels_insights_id_idx" ON "pages_rels" USING btree ("insights_id","locale");
  CREATE INDEX "pages_rels_webinar_items_id_idx" ON "pages_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "pages_rels_story_items_id_idx" ON "pages_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "pages_rels_catalogues_id_idx" ON "pages_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "pages_rels_kpi_elements_id_idx" ON "pages_rels" USING btree ("kpi_elements_id","locale");
  CREATE INDEX "pages_rels_news_items_id_idx" ON "pages_rels" USING btree ("news_items_id","locale");
  CREATE INDEX "articles_blocks_topics_block_order_idx" ON "articles_blocks_topics_block" USING btree ("_order");
  CREATE INDEX "articles_blocks_topics_block_parent_id_idx" ON "articles_blocks_topics_block" USING btree ("_parent_id");
  CREATE INDEX "articles_blocks_topics_block_path_idx" ON "articles_blocks_topics_block" USING btree ("_path");
  CREATE INDEX "articles_blocks_topics_block_locale_idx" ON "articles_blocks_topics_block" USING btree ("_locale");
  CREATE INDEX "articles_seo_seo_image_idx" ON "articles" USING btree ("seo_image_id");
  CREATE INDEX "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX "articles_created_at_idx" ON "articles" USING btree ("created_at");
  CREATE INDEX "articles_parent_idx" ON "articles_locales" USING btree ("parent_id","_locale");
  CREATE INDEX "articles_slug_idx" ON "articles_locales" USING btree ("slug","_locale");
  CREATE INDEX "articles_image_idx" ON "articles_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX "articles_locales_locale_parent_id_unique" ON "articles_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "articles_rels_order_idx" ON "articles_rels" USING btree ("order");
  CREATE INDEX "articles_rels_parent_idx" ON "articles_rels" USING btree ("parent_id");
  CREATE INDEX "articles_rels_path_idx" ON "articles_rels" USING btree ("path");
  CREATE INDEX "articles_rels_locale_idx" ON "articles_rels" USING btree ("locale");
  CREATE INDEX "articles_rels_article_topics_id_idx" ON "articles_rels" USING btree ("article_topics_id","locale");
  CREATE INDEX "articles_rels_news_topics_id_idx" ON "articles_rels" USING btree ("news_topics_id","locale");
  CREATE INDEX "articles_rels_story_topics_id_idx" ON "articles_rels" USING btree ("story_topics_id","locale");
  CREATE INDEX "articles_rels_insight_topics_id_idx" ON "articles_rels" USING btree ("insight_topics_id","locale");
  CREATE INDEX "articles_rels_resource_topics_id_idx" ON "articles_rels" USING btree ("resource_topics_id","locale");
  CREATE INDEX "articles_rels_webinar_topics_id_idx" ON "articles_rels" USING btree ("webinar_topics_id","locale");
  CREATE INDEX "insights_blocks_internal_link_order_idx" ON "insights_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_parent_id_idx" ON "insights_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_path_idx" ON "insights_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_locale_idx" ON "insights_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_order_idx" ON "insights_blocks_external_link" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_parent_id_idx" ON "insights_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_path_idx" ON "insights_blocks_external_link" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_locale_idx" ON "insights_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "insights_blocks_hero_order_idx" ON "insights_blocks_hero" USING btree ("_order");
  CREATE INDEX "insights_blocks_hero_parent_id_idx" ON "insights_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_hero_path_idx" ON "insights_blocks_hero" USING btree ("_path");
  CREATE INDEX "insights_blocks_hero_locale_idx" ON "insights_blocks_hero" USING btree ("_locale");
  CREATE INDEX "insights_blocks_hero_background_image_idx" ON "insights_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "insights_blocks_hero_background_image_for_mobile_idx" ON "insights_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "insights_blocks_internal_link_2_order_idx" ON "insights_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_2_parent_id_idx" ON "insights_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_2_path_idx" ON "insights_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_2_locale_idx" ON "insights_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_2_order_idx" ON "insights_blocks_external_link_2" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_2_parent_id_idx" ON "insights_blocks_external_link_2" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_2_path_idx" ON "insights_blocks_external_link_2" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_2_locale_idx" ON "insights_blocks_external_link_2" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_block_order_idx" ON "insights_blocks_text_block" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_block_parent_id_idx" ON "insights_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_block_path_idx" ON "insights_blocks_text_block" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_block_locale_idx" ON "insights_blocks_text_block" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_only_order_idx" ON "insights_blocks_text_only" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_only_parent_id_idx" ON "insights_blocks_text_only" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_only_path_idx" ON "insights_blocks_text_only" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_only_locale_idx" ON "insights_blocks_text_only" USING btree ("_locale");
  CREATE INDEX "insights_blocks_internal_link_3_order_idx" ON "insights_blocks_internal_link_3" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_3_parent_id_idx" ON "insights_blocks_internal_link_3" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_3_path_idx" ON "insights_blocks_internal_link_3" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_3_locale_idx" ON "insights_blocks_internal_link_3" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_3_order_idx" ON "insights_blocks_external_link_3" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_3_parent_id_idx" ON "insights_blocks_external_link_3" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_3_path_idx" ON "insights_blocks_external_link_3" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_3_locale_idx" ON "insights_blocks_external_link_3" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_block_2_order_idx" ON "insights_blocks_text_block_2" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_block_2_parent_id_idx" ON "insights_blocks_text_block_2" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_block_2_path_idx" ON "insights_blocks_text_block_2" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_block_2_locale_idx" ON "insights_blocks_text_block_2" USING btree ("_locale");
  CREATE INDEX "insights_blocks_card_editorial_with_icon_order_idx" ON "insights_blocks_card_editorial_with_icon" USING btree ("_order");
  CREATE INDEX "insights_blocks_card_editorial_with_icon_parent_id_idx" ON "insights_blocks_card_editorial_with_icon" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_card_editorial_with_icon_path_idx" ON "insights_blocks_card_editorial_with_icon" USING btree ("_path");
  CREATE INDEX "insights_blocks_card_editorial_with_icon_locale_idx" ON "insights_blocks_card_editorial_with_icon" USING btree ("_locale");
  CREATE INDEX "insights_blocks_additional_content_order_idx" ON "insights_blocks_additional_content" USING btree ("_order");
  CREATE INDEX "insights_blocks_additional_content_parent_id_idx" ON "insights_blocks_additional_content" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_additional_content_path_idx" ON "insights_blocks_additional_content" USING btree ("_path");
  CREATE INDEX "insights_blocks_additional_content_locale_idx" ON "insights_blocks_additional_content" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_image_order_idx" ON "insights_blocks_text_image" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_image_parent_id_idx" ON "insights_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_image_path_idx" ON "insights_blocks_text_image" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_image_locale_idx" ON "insights_blocks_text_image" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_image_image_idx" ON "insights_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "insights_blocks_news_tab_order_idx" ON "insights_blocks_news_tab" USING btree ("_order");
  CREATE INDEX "insights_blocks_news_tab_parent_id_idx" ON "insights_blocks_news_tab" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_news_tab_path_idx" ON "insights_blocks_news_tab" USING btree ("_path");
  CREATE INDEX "insights_blocks_news_tab_locale_idx" ON "insights_blocks_news_tab" USING btree ("_locale");
  CREATE INDEX "insights_blocks_story_tab_order_idx" ON "insights_blocks_story_tab" USING btree ("_order");
  CREATE INDEX "insights_blocks_story_tab_parent_id_idx" ON "insights_blocks_story_tab" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_story_tab_path_idx" ON "insights_blocks_story_tab" USING btree ("_path");
  CREATE INDEX "insights_blocks_story_tab_locale_idx" ON "insights_blocks_story_tab" USING btree ("_locale");
  CREATE INDEX "insights_blocks_internal_link_4_order_idx" ON "insights_blocks_internal_link_4" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_4_parent_id_idx" ON "insights_blocks_internal_link_4" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_4_path_idx" ON "insights_blocks_internal_link_4" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_4_locale_idx" ON "insights_blocks_internal_link_4" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_4_order_idx" ON "insights_blocks_external_link_4" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_4_parent_id_idx" ON "insights_blocks_external_link_4" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_4_path_idx" ON "insights_blocks_external_link_4" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_4_locale_idx" ON "insights_blocks_external_link_4" USING btree ("_locale");
  CREATE INDEX "insights_blocks_news_feed_order_idx" ON "insights_blocks_news_feed" USING btree ("_order");
  CREATE INDEX "insights_blocks_news_feed_parent_id_idx" ON "insights_blocks_news_feed" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_news_feed_path_idx" ON "insights_blocks_news_feed" USING btree ("_path");
  CREATE INDEX "insights_blocks_news_feed_locale_idx" ON "insights_blocks_news_feed" USING btree ("_locale");
  CREATE INDEX "insights_blocks_channel_order_idx" ON "insights_blocks_channel" USING btree ("_order");
  CREATE INDEX "insights_blocks_channel_parent_id_idx" ON "insights_blocks_channel" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_channel_path_idx" ON "insights_blocks_channel" USING btree ("_path");
  CREATE INDEX "insights_blocks_channel_locale_idx" ON "insights_blocks_channel" USING btree ("_locale");
  CREATE INDEX "insights_blocks_support_channels_section_order_idx" ON "insights_blocks_support_channels_section" USING btree ("_order");
  CREATE INDEX "insights_blocks_support_channels_section_parent_id_idx" ON "insights_blocks_support_channels_section" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_support_channels_section_path_idx" ON "insights_blocks_support_channels_section" USING btree ("_path");
  CREATE INDEX "insights_blocks_support_channels_section_locale_idx" ON "insights_blocks_support_channels_section" USING btree ("_locale");
  CREATE INDEX "insights_blocks_internal_link_5_order_idx" ON "insights_blocks_internal_link_5" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_5_parent_id_idx" ON "insights_blocks_internal_link_5" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_5_path_idx" ON "insights_blocks_internal_link_5" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_5_locale_idx" ON "insights_blocks_internal_link_5" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_5_order_idx" ON "insights_blocks_external_link_5" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_5_parent_id_idx" ON "insights_blocks_external_link_5" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_5_path_idx" ON "insights_blocks_external_link_5" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_5_locale_idx" ON "insights_blocks_external_link_5" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_block_3_order_idx" ON "insights_blocks_text_block_3" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_block_3_parent_id_idx" ON "insights_blocks_text_block_3" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_block_3_path_idx" ON "insights_blocks_text_block_3" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_block_3_locale_idx" ON "insights_blocks_text_block_3" USING btree ("_locale");
  CREATE INDEX "insights_blocks_use_case_block_order_idx" ON "insights_blocks_use_case_block" USING btree ("_order");
  CREATE INDEX "insights_blocks_use_case_block_parent_id_idx" ON "insights_blocks_use_case_block" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_use_case_block_path_idx" ON "insights_blocks_use_case_block" USING btree ("_path");
  CREATE INDEX "insights_blocks_use_case_block_locale_idx" ON "insights_blocks_use_case_block" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_use_case_order_idx" ON "insights_blocks_text_use_case" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_use_case_parent_id_idx" ON "insights_blocks_text_use_case" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_use_case_path_idx" ON "insights_blocks_text_use_case" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_use_case_locale_idx" ON "insights_blocks_text_use_case" USING btree ("_locale");
  CREATE INDEX "insights_blocks_internal_link_6_order_idx" ON "insights_blocks_internal_link_6" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_6_parent_id_idx" ON "insights_blocks_internal_link_6" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_6_path_idx" ON "insights_blocks_internal_link_6" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_6_locale_idx" ON "insights_blocks_internal_link_6" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_6_order_idx" ON "insights_blocks_external_link_6" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_6_parent_id_idx" ON "insights_blocks_external_link_6" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_6_path_idx" ON "insights_blocks_external_link_6" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_6_locale_idx" ON "insights_blocks_external_link_6" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_block_4_order_idx" ON "insights_blocks_text_block_4" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_block_4_parent_id_idx" ON "insights_blocks_text_block_4" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_block_4_path_idx" ON "insights_blocks_text_block_4" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_block_4_locale_idx" ON "insights_blocks_text_block_4" USING btree ("_locale");
  CREATE INDEX "insights_blocks_data_container_order_idx" ON "insights_blocks_data_container" USING btree ("_order");
  CREATE INDEX "insights_blocks_data_container_parent_id_idx" ON "insights_blocks_data_container" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_data_container_path_idx" ON "insights_blocks_data_container" USING btree ("_path");
  CREATE INDEX "insights_blocks_data_container_locale_idx" ON "insights_blocks_data_container" USING btree ("_locale");
  CREATE INDEX "insights_blocks_statistic_block_order_idx" ON "insights_blocks_statistic_block" USING btree ("_order");
  CREATE INDEX "insights_blocks_statistic_block_parent_id_idx" ON "insights_blocks_statistic_block" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_statistic_block_path_idx" ON "insights_blocks_statistic_block" USING btree ("_path");
  CREATE INDEX "insights_blocks_statistic_block_locale_idx" ON "insights_blocks_statistic_block" USING btree ("_locale");
  CREATE INDEX "insights_blocks_text_statistic_order_idx" ON "insights_blocks_text_statistic" USING btree ("_order");
  CREATE INDEX "insights_blocks_text_statistic_parent_id_idx" ON "insights_blocks_text_statistic" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_text_statistic_path_idx" ON "insights_blocks_text_statistic" USING btree ("_path");
  CREATE INDEX "insights_blocks_text_statistic_locale_idx" ON "insights_blocks_text_statistic" USING btree ("_locale");
  CREATE INDEX "insights_blocks_link_block_order_idx" ON "insights_blocks_link_block" USING btree ("_order");
  CREATE INDEX "insights_blocks_link_block_parent_id_idx" ON "insights_blocks_link_block" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_link_block_path_idx" ON "insights_blocks_link_block" USING btree ("_path");
  CREATE INDEX "insights_blocks_link_block_locale_idx" ON "insights_blocks_link_block" USING btree ("_locale");
  CREATE INDEX "insights_blocks_card_link_order_idx" ON "insights_blocks_card_link" USING btree ("_order");
  CREATE INDEX "insights_blocks_card_link_parent_id_idx" ON "insights_blocks_card_link" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_card_link_path_idx" ON "insights_blocks_card_link" USING btree ("_path");
  CREATE INDEX "insights_blocks_card_link_locale_idx" ON "insights_blocks_card_link" USING btree ("_locale");
  CREATE INDEX "insights_blocks_card_link_image_idx" ON "insights_blocks_card_link" USING btree ("image_id");
  CREATE INDEX "insights_blocks_card_link_list_order_idx" ON "insights_blocks_card_link_list" USING btree ("_order");
  CREATE INDEX "insights_blocks_card_link_list_parent_id_idx" ON "insights_blocks_card_link_list" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_card_link_list_path_idx" ON "insights_blocks_card_link_list" USING btree ("_path");
  CREATE INDEX "insights_blocks_card_link_list_locale_idx" ON "insights_blocks_card_link_list" USING btree ("_locale");
  CREATE INDEX "insights_seo_seo_image_idx" ON "insights" USING btree ("seo_image_id");
  CREATE INDEX "insights_updated_at_idx" ON "insights" USING btree ("updated_at");
  CREATE INDEX "insights_created_at_idx" ON "insights" USING btree ("created_at");
  CREATE INDEX "insights_parent_idx" ON "insights_locales" USING btree ("parent_id","_locale");
  CREATE INDEX "insights_image_idx" ON "insights_locales" USING btree ("image_id","_locale");
  CREATE INDEX "insights_slug_idx" ON "insights_locales" USING btree ("slug","_locale");
  CREATE INDEX "insights_topic_idx" ON "insights_locales" USING btree ("topic_id","_locale");
  CREATE UNIQUE INDEX "insights_locales_locale_parent_id_unique" ON "insights_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "insights_rels_order_idx" ON "insights_rels" USING btree ("order");
  CREATE INDEX "insights_rels_parent_idx" ON "insights_rels" USING btree ("parent_id");
  CREATE INDEX "insights_rels_path_idx" ON "insights_rels" USING btree ("path");
  CREATE INDEX "insights_rels_locale_idx" ON "insights_rels" USING btree ("locale");
  CREATE INDEX "insights_rels_pages_id_idx" ON "insights_rels" USING btree ("pages_id","locale");
  CREATE INDEX "insights_rels_articles_id_idx" ON "insights_rels" USING btree ("articles_id","locale");
  CREATE INDEX "insights_rels_insights_id_idx" ON "insights_rels" USING btree ("insights_id","locale");
  CREATE INDEX "insights_rels_webinar_items_id_idx" ON "insights_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "insights_rels_story_items_id_idx" ON "insights_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "insights_rels_catalogues_id_idx" ON "insights_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "insights_rels_news_items_id_idx" ON "insights_rels" USING btree ("news_items_id","locale");
  CREATE INDEX "insights_rels_kpi_elements_id_idx" ON "insights_rels" USING btree ("kpi_elements_id","locale");
  CREATE INDEX "webinar_items_blocks_internal_link_order_idx" ON "webinar_items_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_internal_link_parent_id_idx" ON "webinar_items_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_internal_link_path_idx" ON "webinar_items_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_internal_link_locale_idx" ON "webinar_items_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_external_link_order_idx" ON "webinar_items_blocks_external_link" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_external_link_parent_id_idx" ON "webinar_items_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_external_link_path_idx" ON "webinar_items_blocks_external_link" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_external_link_locale_idx" ON "webinar_items_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_hero_order_idx" ON "webinar_items_blocks_hero" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_hero_parent_id_idx" ON "webinar_items_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_hero_path_idx" ON "webinar_items_blocks_hero" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_hero_locale_idx" ON "webinar_items_blocks_hero" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_hero_background_image_idx" ON "webinar_items_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "webinar_items_blocks_hero_background_image_for_mobile_idx" ON "webinar_items_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "webinar_items_blocks_download_link_order_idx" ON "webinar_items_blocks_download_link" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_download_link_parent_id_idx" ON "webinar_items_blocks_download_link" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_download_link_path_idx" ON "webinar_items_blocks_download_link" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_download_link_locale_idx" ON "webinar_items_blocks_download_link" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_download_link_doc_idx" ON "webinar_items_blocks_download_link" USING btree ("doc_id");
  CREATE INDEX "webinar_items_blocks_action_card_order_idx" ON "webinar_items_blocks_action_card" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_action_card_parent_id_idx" ON "webinar_items_blocks_action_card" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_action_card_path_idx" ON "webinar_items_blocks_action_card" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_action_card_locale_idx" ON "webinar_items_blocks_action_card" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_internal_link_2_order_idx" ON "webinar_items_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_internal_link_2_parent_id_idx" ON "webinar_items_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_internal_link_2_path_idx" ON "webinar_items_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_internal_link_2_locale_idx" ON "webinar_items_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_external_link_2_order_idx" ON "webinar_items_blocks_external_link_2" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_external_link_2_parent_id_idx" ON "webinar_items_blocks_external_link_2" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_external_link_2_path_idx" ON "webinar_items_blocks_external_link_2" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_external_link_2_locale_idx" ON "webinar_items_blocks_external_link_2" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_text_block_order_idx" ON "webinar_items_blocks_text_block" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_text_block_parent_id_idx" ON "webinar_items_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_text_block_path_idx" ON "webinar_items_blocks_text_block" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_text_block_locale_idx" ON "webinar_items_blocks_text_block" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_author_list_order_idx" ON "webinar_items_blocks_author_list" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_author_list_parent_id_idx" ON "webinar_items_blocks_author_list" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_author_list_path_idx" ON "webinar_items_blocks_author_list" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_author_list_locale_idx" ON "webinar_items_blocks_author_list" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_speaker_order_idx" ON "webinar_items_blocks_speaker" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_speaker_parent_id_idx" ON "webinar_items_blocks_speaker" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_speaker_path_idx" ON "webinar_items_blocks_speaker" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_speaker_locale_idx" ON "webinar_items_blocks_speaker" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_internal_link_3_order_idx" ON "webinar_items_blocks_internal_link_3" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_internal_link_3_parent_id_idx" ON "webinar_items_blocks_internal_link_3" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_internal_link_3_path_idx" ON "webinar_items_blocks_internal_link_3" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_internal_link_3_locale_idx" ON "webinar_items_blocks_internal_link_3" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_external_link_3_order_idx" ON "webinar_items_blocks_external_link_3" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_external_link_3_parent_id_idx" ON "webinar_items_blocks_external_link_3" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_external_link_3_path_idx" ON "webinar_items_blocks_external_link_3" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_external_link_3_locale_idx" ON "webinar_items_blocks_external_link_3" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_text_block_2_order_idx" ON "webinar_items_blocks_text_block_2" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_text_block_2_parent_id_idx" ON "webinar_items_blocks_text_block_2" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_text_block_2_path_idx" ON "webinar_items_blocks_text_block_2" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_text_block_2_locale_idx" ON "webinar_items_blocks_text_block_2" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_list_item_order_idx" ON "webinar_items_blocks_list_item" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_list_item_parent_id_idx" ON "webinar_items_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_list_item_path_idx" ON "webinar_items_blocks_list_item" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_list_item_locale_idx" ON "webinar_items_blocks_list_item" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_feature_list_order_idx" ON "webinar_items_blocks_feature_list" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_feature_list_parent_id_idx" ON "webinar_items_blocks_feature_list" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_feature_list_path_idx" ON "webinar_items_blocks_feature_list" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_feature_list_locale_idx" ON "webinar_items_blocks_feature_list" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_quick_link_card_order_idx" ON "webinar_items_blocks_quick_link_card" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_quick_link_card_parent_id_idx" ON "webinar_items_blocks_quick_link_card" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_quick_link_card_path_idx" ON "webinar_items_blocks_quick_link_card" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_quick_link_card_locale_idx" ON "webinar_items_blocks_quick_link_card" USING btree ("_locale");
  CREATE INDEX "webinar_items_blocks_webinar_description_order_idx" ON "webinar_items_blocks_webinar_description" USING btree ("_order");
  CREATE INDEX "webinar_items_blocks_webinar_description_parent_id_idx" ON "webinar_items_blocks_webinar_description" USING btree ("_parent_id");
  CREATE INDEX "webinar_items_blocks_webinar_description_path_idx" ON "webinar_items_blocks_webinar_description" USING btree ("_path");
  CREATE INDEX "webinar_items_blocks_webinar_description_locale_idx" ON "webinar_items_blocks_webinar_description" USING btree ("_locale");
  CREATE INDEX "webinar_items_image_idx" ON "webinar_items" USING btree ("image_id");
  CREATE INDEX "webinar_items_seo_seo_image_idx" ON "webinar_items" USING btree ("seo_image_id");
  CREATE INDEX "webinar_items_updated_at_idx" ON "webinar_items" USING btree ("updated_at");
  CREATE INDEX "webinar_items_created_at_idx" ON "webinar_items" USING btree ("created_at");
  CREATE INDEX "webinar_items_slug_idx" ON "webinar_items_locales" USING btree ("slug","_locale");
  CREATE INDEX "webinar_items_parent_idx" ON "webinar_items_locales" USING btree ("parent_id","_locale");
  CREATE INDEX "webinar_items_topic_idx" ON "webinar_items_locales" USING btree ("topic_id","_locale");
  CREATE UNIQUE INDEX "webinar_items_locales_locale_parent_id_unique" ON "webinar_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "webinar_items_rels_order_idx" ON "webinar_items_rels" USING btree ("order");
  CREATE INDEX "webinar_items_rels_parent_idx" ON "webinar_items_rels" USING btree ("parent_id");
  CREATE INDEX "webinar_items_rels_path_idx" ON "webinar_items_rels" USING btree ("path");
  CREATE INDEX "webinar_items_rels_locale_idx" ON "webinar_items_rels" USING btree ("locale");
  CREATE INDEX "webinar_items_rels_pages_id_idx" ON "webinar_items_rels" USING btree ("pages_id","locale");
  CREATE INDEX "webinar_items_rels_articles_id_idx" ON "webinar_items_rels" USING btree ("articles_id","locale");
  CREATE INDEX "webinar_items_rels_insights_id_idx" ON "webinar_items_rels" USING btree ("insights_id","locale");
  CREATE INDEX "webinar_items_rels_webinar_items_id_idx" ON "webinar_items_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "webinar_items_rels_story_items_id_idx" ON "webinar_items_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "webinar_items_rels_catalogues_id_idx" ON "webinar_items_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "webinar_items_rels_webinar_authors_id_idx" ON "webinar_items_rels" USING btree ("webinar_authors_id","locale");
  CREATE INDEX "story_items_blocks_internal_link_order_idx" ON "story_items_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_parent_id_idx" ON "story_items_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_path_idx" ON "story_items_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_locale_idx" ON "story_items_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_order_idx" ON "story_items_blocks_external_link" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_parent_id_idx" ON "story_items_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_path_idx" ON "story_items_blocks_external_link" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_locale_idx" ON "story_items_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_hero_order_idx" ON "story_items_blocks_hero" USING btree ("_order");
  CREATE INDEX "story_items_blocks_hero_parent_id_idx" ON "story_items_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_hero_path_idx" ON "story_items_blocks_hero" USING btree ("_path");
  CREATE INDEX "story_items_blocks_hero_locale_idx" ON "story_items_blocks_hero" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_hero_background_image_idx" ON "story_items_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "story_items_blocks_hero_background_image_for_mobile_idx" ON "story_items_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "story_items_blocks_accordion_item_order_idx" ON "story_items_blocks_accordion_item" USING btree ("_order");
  CREATE INDEX "story_items_blocks_accordion_item_parent_id_idx" ON "story_items_blocks_accordion_item" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_accordion_item_path_idx" ON "story_items_blocks_accordion_item" USING btree ("_path");
  CREATE INDEX "story_items_blocks_accordion_item_locale_idx" ON "story_items_blocks_accordion_item" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_accordion_order_idx" ON "story_items_blocks_accordion" USING btree ("_order");
  CREATE INDEX "story_items_blocks_accordion_parent_id_idx" ON "story_items_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_accordion_path_idx" ON "story_items_blocks_accordion" USING btree ("_path");
  CREATE INDEX "story_items_blocks_accordion_locale_idx" ON "story_items_blocks_accordion" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_accordion_block_order_idx" ON "story_items_blocks_accordion_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_accordion_block_parent_id_idx" ON "story_items_blocks_accordion_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_accordion_block_path_idx" ON "story_items_blocks_accordion_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_accordion_block_locale_idx" ON "story_items_blocks_accordion_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_faq_section_order_idx" ON "story_items_blocks_faq_section" USING btree ("_order");
  CREATE INDEX "story_items_blocks_faq_section_parent_id_idx" ON "story_items_blocks_faq_section" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_faq_section_path_idx" ON "story_items_blocks_faq_section" USING btree ("_path");
  CREATE INDEX "story_items_blocks_faq_section_locale_idx" ON "story_items_blocks_faq_section" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_internal_link_2_order_idx" ON "story_items_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_2_parent_id_idx" ON "story_items_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_2_path_idx" ON "story_items_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_2_locale_idx" ON "story_items_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_2_order_idx" ON "story_items_blocks_external_link_2" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_2_parent_id_idx" ON "story_items_blocks_external_link_2" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_2_path_idx" ON "story_items_blocks_external_link_2" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_2_locale_idx" ON "story_items_blocks_external_link_2" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_block_order_idx" ON "story_items_blocks_text_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_block_parent_id_idx" ON "story_items_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_block_path_idx" ON "story_items_blocks_text_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_block_locale_idx" ON "story_items_blocks_text_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_only_order_idx" ON "story_items_blocks_text_only" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_only_parent_id_idx" ON "story_items_blocks_text_only" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_only_path_idx" ON "story_items_blocks_text_only" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_only_locale_idx" ON "story_items_blocks_text_only" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_structured_text_block_order_idx" ON "story_items_blocks_structured_text_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_structured_text_block_parent_id_idx" ON "story_items_blocks_structured_text_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_structured_text_block_path_idx" ON "story_items_blocks_structured_text_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_structured_text_block_locale_idx" ON "story_items_blocks_structured_text_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_internal_link_3_order_idx" ON "story_items_blocks_internal_link_3" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_3_parent_id_idx" ON "story_items_blocks_internal_link_3" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_3_path_idx" ON "story_items_blocks_internal_link_3" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_3_locale_idx" ON "story_items_blocks_internal_link_3" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_3_order_idx" ON "story_items_blocks_external_link_3" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_3_parent_id_idx" ON "story_items_blocks_external_link_3" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_3_path_idx" ON "story_items_blocks_external_link_3" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_3_locale_idx" ON "story_items_blocks_external_link_3" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_block_2_order_idx" ON "story_items_blocks_text_block_2" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_block_2_parent_id_idx" ON "story_items_blocks_text_block_2" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_block_2_path_idx" ON "story_items_blocks_text_block_2" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_block_2_locale_idx" ON "story_items_blocks_text_block_2" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_card_editorial_with_icon_order_idx" ON "story_items_blocks_card_editorial_with_icon" USING btree ("_order");
  CREATE INDEX "story_items_blocks_card_editorial_with_icon_parent_id_idx" ON "story_items_blocks_card_editorial_with_icon" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_card_editorial_with_icon_path_idx" ON "story_items_blocks_card_editorial_with_icon" USING btree ("_path");
  CREATE INDEX "story_items_blocks_card_editorial_with_icon_locale_idx" ON "story_items_blocks_card_editorial_with_icon" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_additional_content_order_idx" ON "story_items_blocks_additional_content" USING btree ("_order");
  CREATE INDEX "story_items_blocks_additional_content_parent_id_idx" ON "story_items_blocks_additional_content" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_additional_content_path_idx" ON "story_items_blocks_additional_content" USING btree ("_path");
  CREATE INDEX "story_items_blocks_additional_content_locale_idx" ON "story_items_blocks_additional_content" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_image_order_idx" ON "story_items_blocks_text_image" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_image_parent_id_idx" ON "story_items_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_image_path_idx" ON "story_items_blocks_text_image" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_image_locale_idx" ON "story_items_blocks_text_image" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_image_image_idx" ON "story_items_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "story_items_blocks_channel_order_idx" ON "story_items_blocks_channel" USING btree ("_order");
  CREATE INDEX "story_items_blocks_channel_parent_id_idx" ON "story_items_blocks_channel" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_channel_path_idx" ON "story_items_blocks_channel" USING btree ("_path");
  CREATE INDEX "story_items_blocks_channel_locale_idx" ON "story_items_blocks_channel" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_support_channels_section_order_idx" ON "story_items_blocks_support_channels_section" USING btree ("_order");
  CREATE INDEX "story_items_blocks_support_channels_section_parent_id_idx" ON "story_items_blocks_support_channels_section" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_support_channels_section_path_idx" ON "story_items_blocks_support_channels_section" USING btree ("_path");
  CREATE INDEX "story_items_blocks_support_channels_section_locale_idx" ON "story_items_blocks_support_channels_section" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_internal_link_4_order_idx" ON "story_items_blocks_internal_link_4" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_4_parent_id_idx" ON "story_items_blocks_internal_link_4" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_4_path_idx" ON "story_items_blocks_internal_link_4" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_4_locale_idx" ON "story_items_blocks_internal_link_4" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_4_order_idx" ON "story_items_blocks_external_link_4" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_4_parent_id_idx" ON "story_items_blocks_external_link_4" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_4_path_idx" ON "story_items_blocks_external_link_4" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_4_locale_idx" ON "story_items_blocks_external_link_4" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_block_3_order_idx" ON "story_items_blocks_text_block_3" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_block_3_parent_id_idx" ON "story_items_blocks_text_block_3" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_block_3_path_idx" ON "story_items_blocks_text_block_3" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_block_3_locale_idx" ON "story_items_blocks_text_block_3" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_accordion_item_2_order_idx" ON "story_items_blocks_accordion_item_2" USING btree ("_order");
  CREATE INDEX "story_items_blocks_accordion_item_2_parent_id_idx" ON "story_items_blocks_accordion_item_2" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_accordion_item_2_path_idx" ON "story_items_blocks_accordion_item_2" USING btree ("_path");
  CREATE INDEX "story_items_blocks_accordion_item_2_locale_idx" ON "story_items_blocks_accordion_item_2" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_accordion_2_order_idx" ON "story_items_blocks_accordion_2" USING btree ("_order");
  CREATE INDEX "story_items_blocks_accordion_2_parent_id_idx" ON "story_items_blocks_accordion_2" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_accordion_2_path_idx" ON "story_items_blocks_accordion_2" USING btree ("_path");
  CREATE INDEX "story_items_blocks_accordion_2_locale_idx" ON "story_items_blocks_accordion_2" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_accordion_block_2_order_idx" ON "story_items_blocks_accordion_block_2" USING btree ("_order");
  CREATE INDEX "story_items_blocks_accordion_block_2_parent_id_idx" ON "story_items_blocks_accordion_block_2" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_accordion_block_2_path_idx" ON "story_items_blocks_accordion_block_2" USING btree ("_path");
  CREATE INDEX "story_items_blocks_accordion_block_2_locale_idx" ON "story_items_blocks_accordion_block_2" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_accordion_order_idx" ON "story_items_blocks_text_accordion" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_accordion_parent_id_idx" ON "story_items_blocks_text_accordion" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_accordion_path_idx" ON "story_items_blocks_text_accordion" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_accordion_locale_idx" ON "story_items_blocks_text_accordion" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_list_collection_order_idx" ON "story_items_blocks_list_collection" USING btree ("_order");
  CREATE INDEX "story_items_blocks_list_collection_parent_id_idx" ON "story_items_blocks_list_collection" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_list_collection_path_idx" ON "story_items_blocks_list_collection" USING btree ("_path");
  CREATE INDEX "story_items_blocks_list_collection_locale_idx" ON "story_items_blocks_list_collection" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_internal_link_5_order_idx" ON "story_items_blocks_internal_link_5" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_5_parent_id_idx" ON "story_items_blocks_internal_link_5" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_5_path_idx" ON "story_items_blocks_internal_link_5" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_5_locale_idx" ON "story_items_blocks_internal_link_5" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_5_order_idx" ON "story_items_blocks_external_link_5" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_5_parent_id_idx" ON "story_items_blocks_external_link_5" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_5_path_idx" ON "story_items_blocks_external_link_5" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_5_locale_idx" ON "story_items_blocks_external_link_5" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_support_cta_section_order_idx" ON "story_items_blocks_support_cta_section" USING btree ("_order");
  CREATE INDEX "story_items_blocks_support_cta_section_parent_id_idx" ON "story_items_blocks_support_cta_section" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_support_cta_section_path_idx" ON "story_items_blocks_support_cta_section" USING btree ("_path");
  CREATE INDEX "story_items_blocks_support_cta_section_locale_idx" ON "story_items_blocks_support_cta_section" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_support_cta_section_image_idx" ON "story_items_blocks_support_cta_section" USING btree ("image_id");
  CREATE INDEX "story_items_blocks_internal_link_6_order_idx" ON "story_items_blocks_internal_link_6" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_6_parent_id_idx" ON "story_items_blocks_internal_link_6" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_6_path_idx" ON "story_items_blocks_internal_link_6" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_6_locale_idx" ON "story_items_blocks_internal_link_6" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_6_order_idx" ON "story_items_blocks_external_link_6" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_6_parent_id_idx" ON "story_items_blocks_external_link_6" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_6_path_idx" ON "story_items_blocks_external_link_6" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_6_locale_idx" ON "story_items_blocks_external_link_6" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_block_4_order_idx" ON "story_items_blocks_text_block_4" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_block_4_parent_id_idx" ON "story_items_blocks_text_block_4" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_block_4_path_idx" ON "story_items_blocks_text_block_4" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_block_4_locale_idx" ON "story_items_blocks_text_block_4" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_use_case_block_order_idx" ON "story_items_blocks_use_case_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_use_case_block_parent_id_idx" ON "story_items_blocks_use_case_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_use_case_block_path_idx" ON "story_items_blocks_use_case_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_use_case_block_locale_idx" ON "story_items_blocks_use_case_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_use_case_order_idx" ON "story_items_blocks_text_use_case" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_use_case_parent_id_idx" ON "story_items_blocks_text_use_case" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_use_case_path_idx" ON "story_items_blocks_text_use_case" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_use_case_locale_idx" ON "story_items_blocks_text_use_case" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_internal_link_7_order_idx" ON "story_items_blocks_internal_link_7" USING btree ("_order");
  CREATE INDEX "story_items_blocks_internal_link_7_parent_id_idx" ON "story_items_blocks_internal_link_7" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_internal_link_7_path_idx" ON "story_items_blocks_internal_link_7" USING btree ("_path");
  CREATE INDEX "story_items_blocks_internal_link_7_locale_idx" ON "story_items_blocks_internal_link_7" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_external_link_7_order_idx" ON "story_items_blocks_external_link_7" USING btree ("_order");
  CREATE INDEX "story_items_blocks_external_link_7_parent_id_idx" ON "story_items_blocks_external_link_7" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_external_link_7_path_idx" ON "story_items_blocks_external_link_7" USING btree ("_path");
  CREATE INDEX "story_items_blocks_external_link_7_locale_idx" ON "story_items_blocks_external_link_7" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_block_5_order_idx" ON "story_items_blocks_text_block_5" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_block_5_parent_id_idx" ON "story_items_blocks_text_block_5" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_block_5_path_idx" ON "story_items_blocks_text_block_5" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_block_5_locale_idx" ON "story_items_blocks_text_block_5" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_data_container_order_idx" ON "story_items_blocks_data_container" USING btree ("_order");
  CREATE INDEX "story_items_blocks_data_container_parent_id_idx" ON "story_items_blocks_data_container" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_data_container_path_idx" ON "story_items_blocks_data_container" USING btree ("_path");
  CREATE INDEX "story_items_blocks_data_container_locale_idx" ON "story_items_blocks_data_container" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_statistic_block_order_idx" ON "story_items_blocks_statistic_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_statistic_block_parent_id_idx" ON "story_items_blocks_statistic_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_statistic_block_path_idx" ON "story_items_blocks_statistic_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_statistic_block_locale_idx" ON "story_items_blocks_statistic_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_text_statistic_order_idx" ON "story_items_blocks_text_statistic" USING btree ("_order");
  CREATE INDEX "story_items_blocks_text_statistic_parent_id_idx" ON "story_items_blocks_text_statistic" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_text_statistic_path_idx" ON "story_items_blocks_text_statistic" USING btree ("_path");
  CREATE INDEX "story_items_blocks_text_statistic_locale_idx" ON "story_items_blocks_text_statistic" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_link_block_order_idx" ON "story_items_blocks_link_block" USING btree ("_order");
  CREATE INDEX "story_items_blocks_link_block_parent_id_idx" ON "story_items_blocks_link_block" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_link_block_path_idx" ON "story_items_blocks_link_block" USING btree ("_path");
  CREATE INDEX "story_items_blocks_link_block_locale_idx" ON "story_items_blocks_link_block" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_card_link_order_idx" ON "story_items_blocks_card_link" USING btree ("_order");
  CREATE INDEX "story_items_blocks_card_link_parent_id_idx" ON "story_items_blocks_card_link" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_card_link_path_idx" ON "story_items_blocks_card_link" USING btree ("_path");
  CREATE INDEX "story_items_blocks_card_link_locale_idx" ON "story_items_blocks_card_link" USING btree ("_locale");
  CREATE INDEX "story_items_blocks_card_link_image_idx" ON "story_items_blocks_card_link" USING btree ("image_id");
  CREATE INDEX "story_items_blocks_card_link_list_order_idx" ON "story_items_blocks_card_link_list" USING btree ("_order");
  CREATE INDEX "story_items_blocks_card_link_list_parent_id_idx" ON "story_items_blocks_card_link_list" USING btree ("_parent_id");
  CREATE INDEX "story_items_blocks_card_link_list_path_idx" ON "story_items_blocks_card_link_list" USING btree ("_path");
  CREATE INDEX "story_items_blocks_card_link_list_locale_idx" ON "story_items_blocks_card_link_list" USING btree ("_locale");
  CREATE INDEX "story_items_image_idx" ON "story_items" USING btree ("image_id");
  CREATE INDEX "story_items_seo_seo_image_idx" ON "story_items" USING btree ("seo_image_id");
  CREATE INDEX "story_items_updated_at_idx" ON "story_items" USING btree ("updated_at");
  CREATE INDEX "story_items_created_at_idx" ON "story_items" USING btree ("created_at");
  CREATE INDEX "story_items_parent_idx" ON "story_items_locales" USING btree ("parent_id","_locale");
  CREATE INDEX "story_items_article_classification_idx" ON "story_items_locales" USING btree ("article_classification_id","_locale");
  CREATE INDEX "story_items_slug_idx" ON "story_items_locales" USING btree ("slug","_locale");
  CREATE INDEX "story_items_topic_idx" ON "story_items_locales" USING btree ("topic_id","_locale");
  CREATE UNIQUE INDEX "story_items_locales_locale_parent_id_unique" ON "story_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "story_items_rels_order_idx" ON "story_items_rels" USING btree ("order");
  CREATE INDEX "story_items_rels_parent_idx" ON "story_items_rels" USING btree ("parent_id");
  CREATE INDEX "story_items_rels_path_idx" ON "story_items_rels" USING btree ("path");
  CREATE INDEX "story_items_rels_locale_idx" ON "story_items_rels" USING btree ("locale");
  CREATE INDEX "story_items_rels_pages_id_idx" ON "story_items_rels" USING btree ("pages_id","locale");
  CREATE INDEX "story_items_rels_articles_id_idx" ON "story_items_rels" USING btree ("articles_id","locale");
  CREATE INDEX "story_items_rels_insights_id_idx" ON "story_items_rels" USING btree ("insights_id","locale");
  CREATE INDEX "story_items_rels_webinar_items_id_idx" ON "story_items_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "story_items_rels_story_items_id_idx" ON "story_items_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "story_items_rels_catalogues_id_idx" ON "story_items_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "story_items_rels_kpi_elements_id_idx" ON "story_items_rels" USING btree ("kpi_elements_id","locale");
  CREATE INDEX "catalogues_blocks_internal_link_order_idx" ON "catalogues_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_internal_link_parent_id_idx" ON "catalogues_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_internal_link_path_idx" ON "catalogues_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_internal_link_locale_idx" ON "catalogues_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_external_link_order_idx" ON "catalogues_blocks_external_link" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_external_link_parent_id_idx" ON "catalogues_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_external_link_path_idx" ON "catalogues_blocks_external_link" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_external_link_locale_idx" ON "catalogues_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_hero_order_idx" ON "catalogues_blocks_hero" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_hero_parent_id_idx" ON "catalogues_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_hero_path_idx" ON "catalogues_blocks_hero" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_hero_locale_idx" ON "catalogues_blocks_hero" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_hero_background_image_idx" ON "catalogues_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "catalogues_blocks_hero_background_image_for_mobile_idx" ON "catalogues_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "catalogues_blocks_internal_link_2_order_idx" ON "catalogues_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_internal_link_2_parent_id_idx" ON "catalogues_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_internal_link_2_path_idx" ON "catalogues_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_internal_link_2_locale_idx" ON "catalogues_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_external_link_2_order_idx" ON "catalogues_blocks_external_link_2" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_external_link_2_parent_id_idx" ON "catalogues_blocks_external_link_2" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_external_link_2_path_idx" ON "catalogues_blocks_external_link_2" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_external_link_2_locale_idx" ON "catalogues_blocks_external_link_2" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_text_block_order_idx" ON "catalogues_blocks_text_block" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_text_block_parent_id_idx" ON "catalogues_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_text_block_path_idx" ON "catalogues_blocks_text_block" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_text_block_locale_idx" ON "catalogues_blocks_text_block" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_text_only_order_idx" ON "catalogues_blocks_text_only" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_text_only_parent_id_idx" ON "catalogues_blocks_text_only" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_text_only_path_idx" ON "catalogues_blocks_text_only" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_text_only_locale_idx" ON "catalogues_blocks_text_only" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_external_link_3_order_idx" ON "catalogues_blocks_external_link_3" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_external_link_3_parent_id_idx" ON "catalogues_blocks_external_link_3" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_external_link_3_path_idx" ON "catalogues_blocks_external_link_3" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_external_link_3_locale_idx" ON "catalogues_blocks_external_link_3" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_callout_link_order_idx" ON "catalogues_blocks_callout_link" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_callout_link_parent_id_idx" ON "catalogues_blocks_callout_link" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_callout_link_path_idx" ON "catalogues_blocks_callout_link" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_callout_link_locale_idx" ON "catalogues_blocks_callout_link" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_catalogue_tab_order_idx" ON "catalogues_blocks_catalogue_tab" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_catalogue_tab_parent_id_idx" ON "catalogues_blocks_catalogue_tab" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_catalogue_tab_path_idx" ON "catalogues_blocks_catalogue_tab" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_catalogue_tab_locale_idx" ON "catalogues_blocks_catalogue_tab" USING btree ("_locale");
  CREATE INDEX "catalogues_blocks_catalogue_tab_filter_story_idx" ON "catalogues_blocks_catalogue_tab" USING btree ("filter_story_id");
  CREATE INDEX "catalogues_blocks_catalogue_feed_order_idx" ON "catalogues_blocks_catalogue_feed" USING btree ("_order");
  CREATE INDEX "catalogues_blocks_catalogue_feed_parent_id_idx" ON "catalogues_blocks_catalogue_feed" USING btree ("_parent_id");
  CREATE INDEX "catalogues_blocks_catalogue_feed_path_idx" ON "catalogues_blocks_catalogue_feed" USING btree ("_path");
  CREATE INDEX "catalogues_blocks_catalogue_feed_locale_idx" ON "catalogues_blocks_catalogue_feed" USING btree ("_locale");
  CREATE INDEX "catalogues_seo_seo_image_idx" ON "catalogues" USING btree ("seo_image_id");
  CREATE INDEX "catalogues_updated_at_idx" ON "catalogues" USING btree ("updated_at");
  CREATE INDEX "catalogues_created_at_idx" ON "catalogues" USING btree ("created_at");
  CREATE INDEX "catalogues_parent_idx" ON "catalogues_locales" USING btree ("parent_id","_locale");
  CREATE INDEX "catalogues_slug_idx" ON "catalogues_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "catalogues_locales_locale_parent_id_unique" ON "catalogues_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "catalogues_rels_order_idx" ON "catalogues_rels" USING btree ("order");
  CREATE INDEX "catalogues_rels_parent_idx" ON "catalogues_rels" USING btree ("parent_id");
  CREATE INDEX "catalogues_rels_path_idx" ON "catalogues_rels" USING btree ("path");
  CREATE INDEX "catalogues_rels_locale_idx" ON "catalogues_rels" USING btree ("locale");
  CREATE INDEX "catalogues_rels_pages_id_idx" ON "catalogues_rels" USING btree ("pages_id","locale");
  CREATE INDEX "catalogues_rels_articles_id_idx" ON "catalogues_rels" USING btree ("articles_id","locale");
  CREATE INDEX "catalogues_rels_insights_id_idx" ON "catalogues_rels" USING btree ("insights_id","locale");
  CREATE INDEX "catalogues_rels_webinar_items_id_idx" ON "catalogues_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "catalogues_rels_story_items_id_idx" ON "catalogues_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "catalogues_rels_catalogues_id_idx" ON "catalogues_rels" USING btree ("catalogues_id","locale");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_article_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("article_topics_id");
  CREATE INDEX "payload_locked_documents_rels_news_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("news_topics_id");
  CREATE INDEX "payload_locked_documents_rels_story_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("story_topics_id");
  CREATE INDEX "payload_locked_documents_rels_insight_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("insight_topics_id");
  CREATE INDEX "payload_locked_documents_rels_resource_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("resource_topics_id");
  CREATE INDEX "payload_locked_documents_rels_webinar_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("webinar_topics_id");
  CREATE INDEX "payload_locked_documents_rels_macro_topics_id_idx" ON "payload_locked_documents_rels" USING btree ("macro_topics_id");
  CREATE INDEX "payload_locked_documents_rels_story_classes_id_idx" ON "payload_locked_documents_rels" USING btree ("story_classes_id");
  CREATE INDEX "payload_locked_documents_rels_webinar_authors_id_idx" ON "payload_locked_documents_rels" USING btree ("webinar_authors_id");
  CREATE INDEX "payload_locked_documents_rels_chart_elements_id_idx" ON "payload_locked_documents_rels" USING btree ("chart_elements_id");
  CREATE INDEX "payload_locked_documents_rels_kpi_elements_id_idx" ON "payload_locked_documents_rels" USING btree ("kpi_elements_id");
  CREATE INDEX "payload_locked_documents_rels_news_items_id_idx" ON "payload_locked_documents_rels" USING btree ("news_items_id");
  CREATE INDEX "payload_locked_documents_rels_resources_id_idx" ON "payload_locked_documents_rels" USING btree ("resources_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");
  CREATE INDEX "payload_locked_documents_rels_insights_id_idx" ON "payload_locked_documents_rels" USING btree ("insights_id");
  CREATE INDEX "payload_locked_documents_rels_webinar_items_id_idx" ON "payload_locked_documents_rels" USING btree ("webinar_items_id");
  CREATE INDEX "payload_locked_documents_rels_story_items_id_idx" ON "payload_locked_documents_rels" USING btree ("story_items_id");
  CREATE INDEX "payload_locked_documents_rels_catalogues_id_idx" ON "payload_locked_documents_rels" USING btree ("catalogues_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "layout_blocks_brand_order_idx" ON "layout_blocks_brand" USING btree ("_order");
  CREATE INDEX "layout_blocks_brand_parent_id_idx" ON "layout_blocks_brand" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_brand_path_idx" ON "layout_blocks_brand" USING btree ("_path");
  CREATE INDEX "layout_blocks_brand_locale_idx" ON "layout_blocks_brand" USING btree ("_locale");
  CREATE INDEX "layout_blocks_brand_header_order_idx" ON "layout_blocks_brand_header" USING btree ("_order");
  CREATE INDEX "layout_blocks_brand_header_parent_id_idx" ON "layout_blocks_brand_header" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_brand_header_path_idx" ON "layout_blocks_brand_header" USING btree ("_path");
  CREATE INDEX "layout_blocks_brand_header_locale_idx" ON "layout_blocks_brand_header" USING btree ("_locale");
  CREATE INDEX "layout_blocks_external_link_order_idx" ON "layout_blocks_external_link" USING btree ("_order");
  CREATE INDEX "layout_blocks_external_link_parent_id_idx" ON "layout_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_external_link_path_idx" ON "layout_blocks_external_link" USING btree ("_path");
  CREATE INDEX "layout_blocks_external_link_locale_idx" ON "layout_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "layout_blocks_internal_link_order_idx" ON "layout_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "layout_blocks_internal_link_parent_id_idx" ON "layout_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_internal_link_path_idx" ON "layout_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "layout_blocks_internal_link_locale_idx" ON "layout_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "layout_blocks_supporting_brand_order_idx" ON "layout_blocks_supporting_brand" USING btree ("_order");
  CREATE INDEX "layout_blocks_supporting_brand_parent_id_idx" ON "layout_blocks_supporting_brand" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_supporting_brand_path_idx" ON "layout_blocks_supporting_brand" USING btree ("_path");
  CREATE INDEX "layout_blocks_supporting_brand_locale_idx" ON "layout_blocks_supporting_brand" USING btree ("_locale");
  CREATE INDEX "layout_blocks_internal_link_2_order_idx" ON "layout_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "layout_blocks_internal_link_2_parent_id_idx" ON "layout_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_internal_link_2_path_idx" ON "layout_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "layout_blocks_internal_link_2_locale_idx" ON "layout_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "layout_blocks_mailing_list_signup_block_order_idx" ON "layout_blocks_mailing_list_signup_block" USING btree ("_order");
  CREATE INDEX "layout_blocks_mailing_list_signup_block_parent_id_idx" ON "layout_blocks_mailing_list_signup_block" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_mailing_list_signup_block_path_idx" ON "layout_blocks_mailing_list_signup_block" USING btree ("_path");
  CREATE INDEX "layout_blocks_mailing_list_signup_block_locale_idx" ON "layout_blocks_mailing_list_signup_block" USING btree ("_locale");
  CREATE INDEX "layout_blocks_menu_item_order_idx" ON "layout_blocks_menu_item" USING btree ("_order");
  CREATE INDEX "layout_blocks_menu_item_parent_id_idx" ON "layout_blocks_menu_item" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_menu_item_path_idx" ON "layout_blocks_menu_item" USING btree ("_path");
  CREATE INDEX "layout_blocks_menu_item_locale_idx" ON "layout_blocks_menu_item" USING btree ("_locale");
  CREATE INDEX "layout_blocks_menu_item_2_order_idx" ON "layout_blocks_menu_item_2" USING btree ("_order");
  CREATE INDEX "layout_blocks_menu_item_2_parent_id_idx" ON "layout_blocks_menu_item_2" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_menu_item_2_path_idx" ON "layout_blocks_menu_item_2" USING btree ("_path");
  CREATE INDEX "layout_blocks_menu_item_2_locale_idx" ON "layout_blocks_menu_item_2" USING btree ("_locale");
  CREATE INDEX "layout_blocks_mega_menu_item_order_idx" ON "layout_blocks_mega_menu_item" USING btree ("_order");
  CREATE INDEX "layout_blocks_mega_menu_item_parent_id_idx" ON "layout_blocks_mega_menu_item" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_mega_menu_item_path_idx" ON "layout_blocks_mega_menu_item" USING btree ("_path");
  CREATE INDEX "layout_blocks_mega_menu_item_locale_idx" ON "layout_blocks_mega_menu_item" USING btree ("_locale");
  CREATE INDEX "layout_blocks_mega_menu_item_image_idx" ON "layout_blocks_mega_menu_item" USING btree ("image_id");
  CREATE UNIQUE INDEX "layout_locales_locale_parent_id_unique" ON "layout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_rels_order_idx" ON "layout_rels" USING btree ("order");
  CREATE INDEX "layout_rels_parent_idx" ON "layout_rels" USING btree ("parent_id");
  CREATE INDEX "layout_rels_path_idx" ON "layout_rels" USING btree ("path");
  CREATE INDEX "layout_rels_locale_idx" ON "layout_rels" USING btree ("locale");
  CREATE INDEX "layout_rels_pages_id_idx" ON "layout_rels" USING btree ("pages_id","locale");
  CREATE INDEX "layout_rels_articles_id_idx" ON "layout_rels" USING btree ("articles_id","locale");
  CREATE INDEX "layout_rels_insights_id_idx" ON "layout_rels" USING btree ("insights_id","locale");
  CREATE INDEX "layout_rels_webinar_items_id_idx" ON "layout_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "layout_rels_story_items_id_idx" ON "layout_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "layout_rels_catalogues_id_idx" ON "layout_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "homepage_blocks_internal_link_order_idx" ON "homepage_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "homepage_blocks_internal_link_parent_id_idx" ON "homepage_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_internal_link_path_idx" ON "homepage_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "homepage_blocks_internal_link_locale_idx" ON "homepage_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_external_link_order_idx" ON "homepage_blocks_external_link" USING btree ("_order");
  CREATE INDEX "homepage_blocks_external_link_parent_id_idx" ON "homepage_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_external_link_path_idx" ON "homepage_blocks_external_link" USING btree ("_path");
  CREATE INDEX "homepage_blocks_external_link_locale_idx" ON "homepage_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_hero_order_idx" ON "homepage_blocks_hero" USING btree ("_order");
  CREATE INDEX "homepage_blocks_hero_parent_id_idx" ON "homepage_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_hero_path_idx" ON "homepage_blocks_hero" USING btree ("_path");
  CREATE INDEX "homepage_blocks_hero_locale_idx" ON "homepage_blocks_hero" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_hero_background_image_idx" ON "homepage_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "homepage_blocks_hero_background_image_for_mobile_idx" ON "homepage_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "homepage_blocks_internal_link_2_order_idx" ON "homepage_blocks_internal_link_2" USING btree ("_order");
  CREATE INDEX "homepage_blocks_internal_link_2_parent_id_idx" ON "homepage_blocks_internal_link_2" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_internal_link_2_path_idx" ON "homepage_blocks_internal_link_2" USING btree ("_path");
  CREATE INDEX "homepage_blocks_internal_link_2_locale_idx" ON "homepage_blocks_internal_link_2" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_external_link_2_order_idx" ON "homepage_blocks_external_link_2" USING btree ("_order");
  CREATE INDEX "homepage_blocks_external_link_2_parent_id_idx" ON "homepage_blocks_external_link_2" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_external_link_2_path_idx" ON "homepage_blocks_external_link_2" USING btree ("_path");
  CREATE INDEX "homepage_blocks_external_link_2_locale_idx" ON "homepage_blocks_external_link_2" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_block_order_idx" ON "homepage_blocks_text_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_block_parent_id_idx" ON "homepage_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_block_path_idx" ON "homepage_blocks_text_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_block_locale_idx" ON "homepage_blocks_text_block" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_only_order_idx" ON "homepage_blocks_text_only" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_only_parent_id_idx" ON "homepage_blocks_text_only" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_only_path_idx" ON "homepage_blocks_text_only" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_only_locale_idx" ON "homepage_blocks_text_only" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_internal_link_3_order_idx" ON "homepage_blocks_internal_link_3" USING btree ("_order");
  CREATE INDEX "homepage_blocks_internal_link_3_parent_id_idx" ON "homepage_blocks_internal_link_3" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_internal_link_3_path_idx" ON "homepage_blocks_internal_link_3" USING btree ("_path");
  CREATE INDEX "homepage_blocks_internal_link_3_locale_idx" ON "homepage_blocks_internal_link_3" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_external_link_3_order_idx" ON "homepage_blocks_external_link_3" USING btree ("_order");
  CREATE INDEX "homepage_blocks_external_link_3_parent_id_idx" ON "homepage_blocks_external_link_3" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_external_link_3_path_idx" ON "homepage_blocks_external_link_3" USING btree ("_path");
  CREATE INDEX "homepage_blocks_external_link_3_locale_idx" ON "homepage_blocks_external_link_3" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_block_2_order_idx" ON "homepage_blocks_text_block_2" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_block_2_parent_id_idx" ON "homepage_blocks_text_block_2" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_block_2_path_idx" ON "homepage_blocks_text_block_2" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_block_2_locale_idx" ON "homepage_blocks_text_block_2" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_card_editorial_with_icon_order_idx" ON "homepage_blocks_card_editorial_with_icon" USING btree ("_order");
  CREATE INDEX "homepage_blocks_card_editorial_with_icon_parent_id_idx" ON "homepage_blocks_card_editorial_with_icon" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_card_editorial_with_icon_path_idx" ON "homepage_blocks_card_editorial_with_icon" USING btree ("_path");
  CREATE INDEX "homepage_blocks_card_editorial_with_icon_locale_idx" ON "homepage_blocks_card_editorial_with_icon" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_additional_content_order_idx" ON "homepage_blocks_additional_content" USING btree ("_order");
  CREATE INDEX "homepage_blocks_additional_content_parent_id_idx" ON "homepage_blocks_additional_content" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_additional_content_path_idx" ON "homepage_blocks_additional_content" USING btree ("_path");
  CREATE INDEX "homepage_blocks_additional_content_locale_idx" ON "homepage_blocks_additional_content" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_image_order_idx" ON "homepage_blocks_text_image" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_image_parent_id_idx" ON "homepage_blocks_text_image" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_image_path_idx" ON "homepage_blocks_text_image" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_image_locale_idx" ON "homepage_blocks_text_image" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_image_image_idx" ON "homepage_blocks_text_image" USING btree ("image_id");
  CREATE INDEX "homepage_blocks_news_tab_order_idx" ON "homepage_blocks_news_tab" USING btree ("_order");
  CREATE INDEX "homepage_blocks_news_tab_parent_id_idx" ON "homepage_blocks_news_tab" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_news_tab_path_idx" ON "homepage_blocks_news_tab" USING btree ("_path");
  CREATE INDEX "homepage_blocks_news_tab_locale_idx" ON "homepage_blocks_news_tab" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_story_tab_order_idx" ON "homepage_blocks_story_tab" USING btree ("_order");
  CREATE INDEX "homepage_blocks_story_tab_parent_id_idx" ON "homepage_blocks_story_tab" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_story_tab_path_idx" ON "homepage_blocks_story_tab" USING btree ("_path");
  CREATE INDEX "homepage_blocks_story_tab_locale_idx" ON "homepage_blocks_story_tab" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_internal_link_4_order_idx" ON "homepage_blocks_internal_link_4" USING btree ("_order");
  CREATE INDEX "homepage_blocks_internal_link_4_parent_id_idx" ON "homepage_blocks_internal_link_4" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_internal_link_4_path_idx" ON "homepage_blocks_internal_link_4" USING btree ("_path");
  CREATE INDEX "homepage_blocks_internal_link_4_locale_idx" ON "homepage_blocks_internal_link_4" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_external_link_4_order_idx" ON "homepage_blocks_external_link_4" USING btree ("_order");
  CREATE INDEX "homepage_blocks_external_link_4_parent_id_idx" ON "homepage_blocks_external_link_4" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_external_link_4_path_idx" ON "homepage_blocks_external_link_4" USING btree ("_path");
  CREATE INDEX "homepage_blocks_external_link_4_locale_idx" ON "homepage_blocks_external_link_4" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_news_feed_order_idx" ON "homepage_blocks_news_feed" USING btree ("_order");
  CREATE INDEX "homepage_blocks_news_feed_parent_id_idx" ON "homepage_blocks_news_feed" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_news_feed_path_idx" ON "homepage_blocks_news_feed" USING btree ("_path");
  CREATE INDEX "homepage_blocks_news_feed_locale_idx" ON "homepage_blocks_news_feed" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_channel_order_idx" ON "homepage_blocks_channel" USING btree ("_order");
  CREATE INDEX "homepage_blocks_channel_parent_id_idx" ON "homepage_blocks_channel" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_channel_path_idx" ON "homepage_blocks_channel" USING btree ("_path");
  CREATE INDEX "homepage_blocks_channel_locale_idx" ON "homepage_blocks_channel" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_support_channels_section_order_idx" ON "homepage_blocks_support_channels_section" USING btree ("_order");
  CREATE INDEX "homepage_blocks_support_channels_section_parent_id_idx" ON "homepage_blocks_support_channels_section" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_support_channels_section_path_idx" ON "homepage_blocks_support_channels_section" USING btree ("_path");
  CREATE INDEX "homepage_blocks_support_channels_section_locale_idx" ON "homepage_blocks_support_channels_section" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_internal_link_5_order_idx" ON "homepage_blocks_internal_link_5" USING btree ("_order");
  CREATE INDEX "homepage_blocks_internal_link_5_parent_id_idx" ON "homepage_blocks_internal_link_5" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_internal_link_5_path_idx" ON "homepage_blocks_internal_link_5" USING btree ("_path");
  CREATE INDEX "homepage_blocks_internal_link_5_locale_idx" ON "homepage_blocks_internal_link_5" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_external_link_5_order_idx" ON "homepage_blocks_external_link_5" USING btree ("_order");
  CREATE INDEX "homepage_blocks_external_link_5_parent_id_idx" ON "homepage_blocks_external_link_5" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_external_link_5_path_idx" ON "homepage_blocks_external_link_5" USING btree ("_path");
  CREATE INDEX "homepage_blocks_external_link_5_locale_idx" ON "homepage_blocks_external_link_5" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_block_3_order_idx" ON "homepage_blocks_text_block_3" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_block_3_parent_id_idx" ON "homepage_blocks_text_block_3" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_block_3_path_idx" ON "homepage_blocks_text_block_3" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_block_3_locale_idx" ON "homepage_blocks_text_block_3" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_use_case_block_order_idx" ON "homepage_blocks_use_case_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_use_case_block_parent_id_idx" ON "homepage_blocks_use_case_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_use_case_block_path_idx" ON "homepage_blocks_use_case_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_use_case_block_locale_idx" ON "homepage_blocks_use_case_block" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_use_case_order_idx" ON "homepage_blocks_text_use_case" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_use_case_parent_id_idx" ON "homepage_blocks_text_use_case" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_use_case_path_idx" ON "homepage_blocks_text_use_case" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_use_case_locale_idx" ON "homepage_blocks_text_use_case" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_internal_link_6_order_idx" ON "homepage_blocks_internal_link_6" USING btree ("_order");
  CREATE INDEX "homepage_blocks_internal_link_6_parent_id_idx" ON "homepage_blocks_internal_link_6" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_internal_link_6_path_idx" ON "homepage_blocks_internal_link_6" USING btree ("_path");
  CREATE INDEX "homepage_blocks_internal_link_6_locale_idx" ON "homepage_blocks_internal_link_6" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_external_link_6_order_idx" ON "homepage_blocks_external_link_6" USING btree ("_order");
  CREATE INDEX "homepage_blocks_external_link_6_parent_id_idx" ON "homepage_blocks_external_link_6" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_external_link_6_path_idx" ON "homepage_blocks_external_link_6" USING btree ("_path");
  CREATE INDEX "homepage_blocks_external_link_6_locale_idx" ON "homepage_blocks_external_link_6" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_block_4_order_idx" ON "homepage_blocks_text_block_4" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_block_4_parent_id_idx" ON "homepage_blocks_text_block_4" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_block_4_path_idx" ON "homepage_blocks_text_block_4" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_block_4_locale_idx" ON "homepage_blocks_text_block_4" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_data_container_order_idx" ON "homepage_blocks_data_container" USING btree ("_order");
  CREATE INDEX "homepage_blocks_data_container_parent_id_idx" ON "homepage_blocks_data_container" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_data_container_path_idx" ON "homepage_blocks_data_container" USING btree ("_path");
  CREATE INDEX "homepage_blocks_data_container_locale_idx" ON "homepage_blocks_data_container" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_statistic_block_order_idx" ON "homepage_blocks_statistic_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_statistic_block_parent_id_idx" ON "homepage_blocks_statistic_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_statistic_block_path_idx" ON "homepage_blocks_statistic_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_statistic_block_locale_idx" ON "homepage_blocks_statistic_block" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_text_statistic_order_idx" ON "homepage_blocks_text_statistic" USING btree ("_order");
  CREATE INDEX "homepage_blocks_text_statistic_parent_id_idx" ON "homepage_blocks_text_statistic" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_text_statistic_path_idx" ON "homepage_blocks_text_statistic" USING btree ("_path");
  CREATE INDEX "homepage_blocks_text_statistic_locale_idx" ON "homepage_blocks_text_statistic" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_link_block_order_idx" ON "homepage_blocks_link_block" USING btree ("_order");
  CREATE INDEX "homepage_blocks_link_block_parent_id_idx" ON "homepage_blocks_link_block" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_link_block_path_idx" ON "homepage_blocks_link_block" USING btree ("_path");
  CREATE INDEX "homepage_blocks_link_block_locale_idx" ON "homepage_blocks_link_block" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_card_link_order_idx" ON "homepage_blocks_card_link" USING btree ("_order");
  CREATE INDEX "homepage_blocks_card_link_parent_id_idx" ON "homepage_blocks_card_link" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_card_link_path_idx" ON "homepage_blocks_card_link" USING btree ("_path");
  CREATE INDEX "homepage_blocks_card_link_locale_idx" ON "homepage_blocks_card_link" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_card_link_image_idx" ON "homepage_blocks_card_link" USING btree ("image_id");
  CREATE INDEX "homepage_blocks_card_link_list_order_idx" ON "homepage_blocks_card_link_list" USING btree ("_order");
  CREATE INDEX "homepage_blocks_card_link_list_parent_id_idx" ON "homepage_blocks_card_link_list" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_card_link_list_path_idx" ON "homepage_blocks_card_link_list" USING btree ("_path");
  CREATE INDEX "homepage_blocks_card_link_list_locale_idx" ON "homepage_blocks_card_link_list" USING btree ("_locale");
  CREATE INDEX "homepage_seo_seo_image_idx" ON "homepage" USING btree ("seo_image_id");
  CREATE UNIQUE INDEX "homepage_locales_locale_parent_id_unique" ON "homepage_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX "homepage_rels_locale_idx" ON "homepage_rels" USING btree ("locale");
  CREATE INDEX "homepage_rels_pages_id_idx" ON "homepage_rels" USING btree ("pages_id","locale");
  CREATE INDEX "homepage_rels_articles_id_idx" ON "homepage_rels" USING btree ("articles_id","locale");
  CREATE INDEX "homepage_rels_insights_id_idx" ON "homepage_rels" USING btree ("insights_id","locale");
  CREATE INDEX "homepage_rels_webinar_items_id_idx" ON "homepage_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "homepage_rels_story_items_id_idx" ON "homepage_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "homepage_rels_catalogues_id_idx" ON "homepage_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "homepage_rels_news_items_id_idx" ON "homepage_rels" USING btree ("news_items_id","locale");
  CREATE INDEX "homepage_rels_kpi_elements_id_idx" ON "homepage_rels" USING btree ("kpi_elements_id","locale");
  CREATE INDEX "search_blocks_internal_link_order_idx" ON "search_blocks_internal_link" USING btree ("_order");
  CREATE INDEX "search_blocks_internal_link_parent_id_idx" ON "search_blocks_internal_link" USING btree ("_parent_id");
  CREATE INDEX "search_blocks_internal_link_path_idx" ON "search_blocks_internal_link" USING btree ("_path");
  CREATE INDEX "search_blocks_internal_link_locale_idx" ON "search_blocks_internal_link" USING btree ("_locale");
  CREATE INDEX "search_blocks_external_link_order_idx" ON "search_blocks_external_link" USING btree ("_order");
  CREATE INDEX "search_blocks_external_link_parent_id_idx" ON "search_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "search_blocks_external_link_path_idx" ON "search_blocks_external_link" USING btree ("_path");
  CREATE INDEX "search_blocks_external_link_locale_idx" ON "search_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "search_blocks_hero_order_idx" ON "search_blocks_hero" USING btree ("_order");
  CREATE INDEX "search_blocks_hero_parent_id_idx" ON "search_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "search_blocks_hero_path_idx" ON "search_blocks_hero" USING btree ("_path");
  CREATE INDEX "search_blocks_hero_locale_idx" ON "search_blocks_hero" USING btree ("_locale");
  CREATE INDEX "search_blocks_hero_background_image_idx" ON "search_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "search_blocks_hero_background_image_for_mobile_idx" ON "search_blocks_hero" USING btree ("background_image_for_mobile_id");
  CREATE INDEX "search_blocks_search_bar_order_idx" ON "search_blocks_search_bar" USING btree ("_order");
  CREATE INDEX "search_blocks_search_bar_parent_id_idx" ON "search_blocks_search_bar" USING btree ("_parent_id");
  CREATE INDEX "search_blocks_search_bar_path_idx" ON "search_blocks_search_bar" USING btree ("_path");
  CREATE INDEX "search_blocks_search_bar_locale_idx" ON "search_blocks_search_bar" USING btree ("_locale");
  CREATE INDEX "search_seo_seo_image_idx" ON "search" USING btree ("seo_image_id");
  CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_locale_idx" ON "search_rels" USING btree ("locale");
  CREATE INDEX "search_rels_pages_id_idx" ON "search_rels" USING btree ("pages_id","locale");
  CREATE INDEX "search_rels_articles_id_idx" ON "search_rels" USING btree ("articles_id","locale");
  CREATE INDEX "search_rels_insights_id_idx" ON "search_rels" USING btree ("insights_id","locale");
  CREATE INDEX "search_rels_webinar_items_id_idx" ON "search_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "search_rels_story_items_id_idx" ON "search_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "search_rels_catalogues_id_idx" ON "search_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "global_setting_blocks_external_link_order_idx" ON "global_setting_blocks_external_link" USING btree ("_order");
  CREATE INDEX "global_setting_blocks_external_link_parent_id_idx" ON "global_setting_blocks_external_link" USING btree ("_parent_id");
  CREATE INDEX "global_setting_blocks_external_link_path_idx" ON "global_setting_blocks_external_link" USING btree ("_path");
  CREATE INDEX "global_setting_blocks_external_link_locale_idx" ON "global_setting_blocks_external_link" USING btree ("_locale");
  CREATE INDEX "global_setting_image_idx" ON "global_setting" USING btree ("image_id");
  CREATE UNIQUE INDEX "global_setting_locales_locale_parent_id_unique" ON "global_setting_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "sidebar_for_article_blocks_menu_article_item_order_idx" ON "sidebar_for_article_blocks_menu_article_item" USING btree ("_order");
  CREATE INDEX "sidebar_for_article_blocks_menu_article_item_parent_id_idx" ON "sidebar_for_article_blocks_menu_article_item" USING btree ("_parent_id");
  CREATE INDEX "sidebar_for_article_blocks_menu_article_item_path_idx" ON "sidebar_for_article_blocks_menu_article_item" USING btree ("_path");
  CREATE INDEX "sidebar_for_article_blocks_menu_article_item_locale_idx" ON "sidebar_for_article_blocks_menu_article_item" USING btree ("_locale");
  CREATE INDEX "sidebar_for_article_blocks_accordion_menu_order_idx" ON "sidebar_for_article_blocks_accordion_menu" USING btree ("_order");
  CREATE INDEX "sidebar_for_article_blocks_accordion_menu_parent_id_idx" ON "sidebar_for_article_blocks_accordion_menu" USING btree ("_parent_id");
  CREATE INDEX "sidebar_for_article_blocks_accordion_menu_path_idx" ON "sidebar_for_article_blocks_accordion_menu" USING btree ("_path");
  CREATE INDEX "sidebar_for_article_blocks_accordion_menu_locale_idx" ON "sidebar_for_article_blocks_accordion_menu" USING btree ("_locale");
  CREATE UNIQUE INDEX "sidebar_for_article_locales_locale_parent_id_unique" ON "sidebar_for_article_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "sidebar_for_article_rels_order_idx" ON "sidebar_for_article_rels" USING btree ("order");
  CREATE INDEX "sidebar_for_article_rels_parent_idx" ON "sidebar_for_article_rels" USING btree ("parent_id");
  CREATE INDEX "sidebar_for_article_rels_path_idx" ON "sidebar_for_article_rels" USING btree ("path");
  CREATE INDEX "sidebar_for_article_rels_locale_idx" ON "sidebar_for_article_rels" USING btree ("locale");
  CREATE INDEX "sidebar_for_article_rels_pages_id_idx" ON "sidebar_for_article_rels" USING btree ("pages_id","locale");
  CREATE INDEX "sidebar_for_article_rels_articles_id_idx" ON "sidebar_for_article_rels" USING btree ("articles_id","locale");
  CREATE INDEX "sidebar_for_article_rels_insights_id_idx" ON "sidebar_for_article_rels" USING btree ("insights_id","locale");
  CREATE INDEX "sidebar_for_article_rels_webinar_items_id_idx" ON "sidebar_for_article_rels" USING btree ("webinar_items_id","locale");
  CREATE INDEX "sidebar_for_article_rels_story_items_id_idx" ON "sidebar_for_article_rels" USING btree ("story_items_id","locale");
  CREATE INDEX "sidebar_for_article_rels_catalogues_id_idx" ON "sidebar_for_article_rels" USING btree ("catalogues_id","locale");
  CREATE INDEX "seo_default_og_image_idx" ON "seo_default" USING btree ("og_image_id");
  CREATE INDEX "seo_default_favicon_idx" ON "seo_default" USING btree ("favicon_id");
  CREATE UNIQUE INDEX "seo_default_locales_locale_parent_id_unique" ON "seo_default_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "article_topics" CASCADE;
  DROP TABLE "article_topics_locales" CASCADE;
  DROP TABLE "news_topics" CASCADE;
  DROP TABLE "news_topics_locales" CASCADE;
  DROP TABLE "story_topics" CASCADE;
  DROP TABLE "story_topics_locales" CASCADE;
  DROP TABLE "insight_topics" CASCADE;
  DROP TABLE "insight_topics_locales" CASCADE;
  DROP TABLE "resource_topics" CASCADE;
  DROP TABLE "resource_topics_locales" CASCADE;
  DROP TABLE "webinar_topics" CASCADE;
  DROP TABLE "webinar_topics_locales" CASCADE;
  DROP TABLE "macro_topics" CASCADE;
  DROP TABLE "macro_topics_locales" CASCADE;
  DROP TABLE "story_classes" CASCADE;
  DROP TABLE "story_classes_locales" CASCADE;
  DROP TABLE "webinar_authors" CASCADE;
  DROP TABLE "webinar_authors_locales" CASCADE;
  DROP TABLE "chart_elements" CASCADE;
  DROP TABLE "kpi_elements" CASCADE;
  DROP TABLE "news_items" CASCADE;
  DROP TABLE "news_items_locales" CASCADE;
  DROP TABLE "resources_blocks_download_link" CASCADE;
  DROP TABLE "resources_blocks_external_link" CASCADE;
  DROP TABLE "resources" CASCADE;
  DROP TABLE "resources_locales" CASCADE;
  DROP TABLE "resources_rels" CASCADE;
  DROP TABLE "pages_blocks_internal_link" CASCADE;
  DROP TABLE "pages_blocks_external_link" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_accordion_item" CASCADE;
  DROP TABLE "pages_blocks_accordion" CASCADE;
  DROP TABLE "pages_blocks_accordion_block" CASCADE;
  DROP TABLE "pages_blocks_faq_section" CASCADE;
  DROP TABLE "pages_blocks_internal_link_2" CASCADE;
  DROP TABLE "pages_blocks_external_link_2" CASCADE;
  DROP TABLE "pages_blocks_text_block" CASCADE;
  DROP TABLE "pages_blocks_text_only" CASCADE;
  DROP TABLE "pages_blocks_structured_text_block" CASCADE;
  DROP TABLE "pages_blocks_highlight" CASCADE;
  DROP TABLE "pages_blocks_settings_chart" CASCADE;
  DROP TABLE "pages_blocks_external_link_3" CASCADE;
  DROP TABLE "pages_blocks_panel" CASCADE;
  DROP TABLE "pages_blocks_list_item" CASCADE;
  DROP TABLE "pages_blocks_result" CASCADE;
  DROP TABLE "pages_blocks_data_section" CASCADE;
  DROP TABLE "pages_blocks_internal_link_3" CASCADE;
  DROP TABLE "pages_blocks_external_link_4" CASCADE;
  DROP TABLE "pages_blocks_text_block_2" CASCADE;
  DROP TABLE "pages_blocks_card_editorial_with_icon" CASCADE;
  DROP TABLE "pages_blocks_additional_content" CASCADE;
  DROP TABLE "pages_blocks_text_image" CASCADE;
  DROP TABLE "pages_blocks_news_tab" CASCADE;
  DROP TABLE "pages_blocks_story_tab" CASCADE;
  DROP TABLE "pages_blocks_internal_link_4" CASCADE;
  DROP TABLE "pages_blocks_external_link_5" CASCADE;
  DROP TABLE "pages_blocks_news_feed" CASCADE;
  DROP TABLE "pages_blocks_channel" CASCADE;
  DROP TABLE "pages_blocks_support_channels_section" CASCADE;
  DROP TABLE "pages_blocks_internal_link_5" CASCADE;
  DROP TABLE "pages_blocks_external_link_6" CASCADE;
  DROP TABLE "pages_blocks_text_block_3" CASCADE;
  DROP TABLE "pages_blocks_accordion_item_2" CASCADE;
  DROP TABLE "pages_blocks_accordion_2" CASCADE;
  DROP TABLE "pages_blocks_accordion_block_2" CASCADE;
  DROP TABLE "pages_blocks_text_accordion" CASCADE;
  DROP TABLE "pages_blocks_internal_link_6" CASCADE;
  DROP TABLE "pages_blocks_external_link_7" CASCADE;
  DROP TABLE "pages_blocks_support_cta_section" CASCADE;
  DROP TABLE "pages_blocks_internal_link_7" CASCADE;
  DROP TABLE "pages_blocks_external_link_8" CASCADE;
  DROP TABLE "pages_blocks_text_block_4" CASCADE;
  DROP TABLE "pages_blocks_data_container" CASCADE;
  DROP TABLE "pages_blocks_statistic_block" CASCADE;
  DROP TABLE "pages_blocks_text_statistic" CASCADE;
  DROP TABLE "pages_blocks_list_collection" CASCADE;
  DROP TABLE "pages_blocks_topic_filter" CASCADE;
  DROP TABLE "pages_blocks_link_block" CASCADE;
  DROP TABLE "pages_blocks_card_link" CASCADE;
  DROP TABLE "pages_blocks_card_link_list" CASCADE;
  DROP TABLE "pages_blocks_use_case_container" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "articles_blocks_topics_block" CASCADE;
  DROP TABLE "articles" CASCADE;
  DROP TABLE "articles_locales" CASCADE;
  DROP TABLE "articles_rels" CASCADE;
  DROP TABLE "insights_blocks_internal_link" CASCADE;
  DROP TABLE "insights_blocks_external_link" CASCADE;
  DROP TABLE "insights_blocks_hero" CASCADE;
  DROP TABLE "insights_blocks_internal_link_2" CASCADE;
  DROP TABLE "insights_blocks_external_link_2" CASCADE;
  DROP TABLE "insights_blocks_text_block" CASCADE;
  DROP TABLE "insights_blocks_text_only" CASCADE;
  DROP TABLE "insights_blocks_internal_link_3" CASCADE;
  DROP TABLE "insights_blocks_external_link_3" CASCADE;
  DROP TABLE "insights_blocks_text_block_2" CASCADE;
  DROP TABLE "insights_blocks_card_editorial_with_icon" CASCADE;
  DROP TABLE "insights_blocks_additional_content" CASCADE;
  DROP TABLE "insights_blocks_text_image" CASCADE;
  DROP TABLE "insights_blocks_news_tab" CASCADE;
  DROP TABLE "insights_blocks_story_tab" CASCADE;
  DROP TABLE "insights_blocks_internal_link_4" CASCADE;
  DROP TABLE "insights_blocks_external_link_4" CASCADE;
  DROP TABLE "insights_blocks_news_feed" CASCADE;
  DROP TABLE "insights_blocks_channel" CASCADE;
  DROP TABLE "insights_blocks_support_channels_section" CASCADE;
  DROP TABLE "insights_blocks_internal_link_5" CASCADE;
  DROP TABLE "insights_blocks_external_link_5" CASCADE;
  DROP TABLE "insights_blocks_text_block_3" CASCADE;
  DROP TABLE "insights_blocks_use_case_block" CASCADE;
  DROP TABLE "insights_blocks_text_use_case" CASCADE;
  DROP TABLE "insights_blocks_internal_link_6" CASCADE;
  DROP TABLE "insights_blocks_external_link_6" CASCADE;
  DROP TABLE "insights_blocks_text_block_4" CASCADE;
  DROP TABLE "insights_blocks_data_container" CASCADE;
  DROP TABLE "insights_blocks_statistic_block" CASCADE;
  DROP TABLE "insights_blocks_text_statistic" CASCADE;
  DROP TABLE "insights_blocks_link_block" CASCADE;
  DROP TABLE "insights_blocks_card_link" CASCADE;
  DROP TABLE "insights_blocks_card_link_list" CASCADE;
  DROP TABLE "insights" CASCADE;
  DROP TABLE "insights_locales" CASCADE;
  DROP TABLE "insights_rels" CASCADE;
  DROP TABLE "webinar_items_blocks_internal_link" CASCADE;
  DROP TABLE "webinar_items_blocks_external_link" CASCADE;
  DROP TABLE "webinar_items_blocks_hero" CASCADE;
  DROP TABLE "webinar_items_blocks_download_link" CASCADE;
  DROP TABLE "webinar_items_blocks_action_card" CASCADE;
  DROP TABLE "webinar_items_blocks_internal_link_2" CASCADE;
  DROP TABLE "webinar_items_blocks_external_link_2" CASCADE;
  DROP TABLE "webinar_items_blocks_text_block" CASCADE;
  DROP TABLE "webinar_items_blocks_author_list" CASCADE;
  DROP TABLE "webinar_items_blocks_speaker" CASCADE;
  DROP TABLE "webinar_items_blocks_internal_link_3" CASCADE;
  DROP TABLE "webinar_items_blocks_external_link_3" CASCADE;
  DROP TABLE "webinar_items_blocks_text_block_2" CASCADE;
  DROP TABLE "webinar_items_blocks_list_item" CASCADE;
  DROP TABLE "webinar_items_blocks_feature_list" CASCADE;
  DROP TABLE "webinar_items_blocks_quick_link_card" CASCADE;
  DROP TABLE "webinar_items_blocks_webinar_description" CASCADE;
  DROP TABLE "webinar_items" CASCADE;
  DROP TABLE "webinar_items_locales" CASCADE;
  DROP TABLE "webinar_items_rels" CASCADE;
  DROP TABLE "story_items_blocks_internal_link" CASCADE;
  DROP TABLE "story_items_blocks_external_link" CASCADE;
  DROP TABLE "story_items_blocks_hero" CASCADE;
  DROP TABLE "story_items_blocks_accordion_item" CASCADE;
  DROP TABLE "story_items_blocks_accordion" CASCADE;
  DROP TABLE "story_items_blocks_accordion_block" CASCADE;
  DROP TABLE "story_items_blocks_faq_section" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_2" CASCADE;
  DROP TABLE "story_items_blocks_external_link_2" CASCADE;
  DROP TABLE "story_items_blocks_text_block" CASCADE;
  DROP TABLE "story_items_blocks_text_only" CASCADE;
  DROP TABLE "story_items_blocks_structured_text_block" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_3" CASCADE;
  DROP TABLE "story_items_blocks_external_link_3" CASCADE;
  DROP TABLE "story_items_blocks_text_block_2" CASCADE;
  DROP TABLE "story_items_blocks_card_editorial_with_icon" CASCADE;
  DROP TABLE "story_items_blocks_additional_content" CASCADE;
  DROP TABLE "story_items_blocks_text_image" CASCADE;
  DROP TABLE "story_items_blocks_channel" CASCADE;
  DROP TABLE "story_items_blocks_support_channels_section" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_4" CASCADE;
  DROP TABLE "story_items_blocks_external_link_4" CASCADE;
  DROP TABLE "story_items_blocks_text_block_3" CASCADE;
  DROP TABLE "story_items_blocks_accordion_item_2" CASCADE;
  DROP TABLE "story_items_blocks_accordion_2" CASCADE;
  DROP TABLE "story_items_blocks_accordion_block_2" CASCADE;
  DROP TABLE "story_items_blocks_text_accordion" CASCADE;
  DROP TABLE "story_items_blocks_list_collection" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_5" CASCADE;
  DROP TABLE "story_items_blocks_external_link_5" CASCADE;
  DROP TABLE "story_items_blocks_support_cta_section" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_6" CASCADE;
  DROP TABLE "story_items_blocks_external_link_6" CASCADE;
  DROP TABLE "story_items_blocks_text_block_4" CASCADE;
  DROP TABLE "story_items_blocks_use_case_block" CASCADE;
  DROP TABLE "story_items_blocks_text_use_case" CASCADE;
  DROP TABLE "story_items_blocks_internal_link_7" CASCADE;
  DROP TABLE "story_items_blocks_external_link_7" CASCADE;
  DROP TABLE "story_items_blocks_text_block_5" CASCADE;
  DROP TABLE "story_items_blocks_data_container" CASCADE;
  DROP TABLE "story_items_blocks_statistic_block" CASCADE;
  DROP TABLE "story_items_blocks_text_statistic" CASCADE;
  DROP TABLE "story_items_blocks_link_block" CASCADE;
  DROP TABLE "story_items_blocks_card_link" CASCADE;
  DROP TABLE "story_items_blocks_card_link_list" CASCADE;
  DROP TABLE "story_items" CASCADE;
  DROP TABLE "story_items_locales" CASCADE;
  DROP TABLE "story_items_rels" CASCADE;
  DROP TABLE "catalogues_blocks_internal_link" CASCADE;
  DROP TABLE "catalogues_blocks_external_link" CASCADE;
  DROP TABLE "catalogues_blocks_hero" CASCADE;
  DROP TABLE "catalogues_blocks_internal_link_2" CASCADE;
  DROP TABLE "catalogues_blocks_external_link_2" CASCADE;
  DROP TABLE "catalogues_blocks_text_block" CASCADE;
  DROP TABLE "catalogues_blocks_text_only" CASCADE;
  DROP TABLE "catalogues_blocks_external_link_3" CASCADE;
  DROP TABLE "catalogues_blocks_callout_link" CASCADE;
  DROP TABLE "catalogues_blocks_catalogue_tab" CASCADE;
  DROP TABLE "catalogues_blocks_catalogue_feed" CASCADE;
  DROP TABLE "catalogues" CASCADE;
  DROP TABLE "catalogues_locales" CASCADE;
  DROP TABLE "catalogues_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "layout_blocks_brand" CASCADE;
  DROP TABLE "layout_blocks_brand_header" CASCADE;
  DROP TABLE "layout_blocks_external_link" CASCADE;
  DROP TABLE "layout_blocks_internal_link" CASCADE;
  DROP TABLE "layout_blocks_supporting_brand" CASCADE;
  DROP TABLE "layout_blocks_internal_link_2" CASCADE;
  DROP TABLE "layout_blocks_mailing_list_signup_block" CASCADE;
  DROP TABLE "layout_blocks_menu_item" CASCADE;
  DROP TABLE "layout_blocks_menu_item_2" CASCADE;
  DROP TABLE "layout_blocks_mega_menu_item" CASCADE;
  DROP TABLE "layout" CASCADE;
  DROP TABLE "layout_locales" CASCADE;
  DROP TABLE "layout_rels" CASCADE;
  DROP TABLE "homepage_blocks_internal_link" CASCADE;
  DROP TABLE "homepage_blocks_external_link" CASCADE;
  DROP TABLE "homepage_blocks_hero" CASCADE;
  DROP TABLE "homepage_blocks_internal_link_2" CASCADE;
  DROP TABLE "homepage_blocks_external_link_2" CASCADE;
  DROP TABLE "homepage_blocks_text_block" CASCADE;
  DROP TABLE "homepage_blocks_text_only" CASCADE;
  DROP TABLE "homepage_blocks_internal_link_3" CASCADE;
  DROP TABLE "homepage_blocks_external_link_3" CASCADE;
  DROP TABLE "homepage_blocks_text_block_2" CASCADE;
  DROP TABLE "homepage_blocks_card_editorial_with_icon" CASCADE;
  DROP TABLE "homepage_blocks_additional_content" CASCADE;
  DROP TABLE "homepage_blocks_text_image" CASCADE;
  DROP TABLE "homepage_blocks_news_tab" CASCADE;
  DROP TABLE "homepage_blocks_story_tab" CASCADE;
  DROP TABLE "homepage_blocks_internal_link_4" CASCADE;
  DROP TABLE "homepage_blocks_external_link_4" CASCADE;
  DROP TABLE "homepage_blocks_news_feed" CASCADE;
  DROP TABLE "homepage_blocks_channel" CASCADE;
  DROP TABLE "homepage_blocks_support_channels_section" CASCADE;
  DROP TABLE "homepage_blocks_internal_link_5" CASCADE;
  DROP TABLE "homepage_blocks_external_link_5" CASCADE;
  DROP TABLE "homepage_blocks_text_block_3" CASCADE;
  DROP TABLE "homepage_blocks_use_case_block" CASCADE;
  DROP TABLE "homepage_blocks_text_use_case" CASCADE;
  DROP TABLE "homepage_blocks_internal_link_6" CASCADE;
  DROP TABLE "homepage_blocks_external_link_6" CASCADE;
  DROP TABLE "homepage_blocks_text_block_4" CASCADE;
  DROP TABLE "homepage_blocks_data_container" CASCADE;
  DROP TABLE "homepage_blocks_statistic_block" CASCADE;
  DROP TABLE "homepage_blocks_text_statistic" CASCADE;
  DROP TABLE "homepage_blocks_link_block" CASCADE;
  DROP TABLE "homepage_blocks_card_link" CASCADE;
  DROP TABLE "homepage_blocks_card_link_list" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_locales" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "search_blocks_internal_link" CASCADE;
  DROP TABLE "search_blocks_external_link" CASCADE;
  DROP TABLE "search_blocks_hero" CASCADE;
  DROP TABLE "search_blocks_search_bar" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "global_setting_blocks_external_link" CASCADE;
  DROP TABLE "global_setting" CASCADE;
  DROP TABLE "global_setting_locales" CASCADE;
  DROP TABLE "sidebar_for_article_blocks_menu_article_item" CASCADE;
  DROP TABLE "sidebar_for_article_blocks_accordion_menu" CASCADE;
  DROP TABLE "sidebar_for_article" CASCADE;
  DROP TABLE "sidebar_for_article_locales" CASCADE;
  DROP TABLE "sidebar_for_article_rels" CASCADE;
  DROP TABLE "seo_default" CASCADE;
  DROP TABLE "seo_default_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_hero_variant";
  DROP TYPE "public"."enum_pages_blocks_hero_bg";
  DROP TYPE "public"."enum_pages_blocks_faq_section_bg";
  DROP TYPE "public"."enum_pages_blocks_text_only_bg";
  DROP TYPE "public"."enum_pages_blocks_text_only_heading";
  DROP TYPE "public"."enum_pages_blocks_structured_text_block_bg";
  DROP TYPE "public"."enum_pages_blocks_text_image_bg";
  DROP TYPE "public"."enum_pages_blocks_text_image_heading";
  DROP TYPE "public"."enum_pages_blocks_news_feed_bg";
  DROP TYPE "public"."enum_pages_blocks_support_channels_section_bg";
  DROP TYPE "public"."enum_pages_blocks_text_accordion_bg";
  DROP TYPE "public"."enum_pages_blocks_support_cta_section_bg";
  DROP TYPE "public"."enum_pages_blocks_text_statistic_bg";
  DROP TYPE "public"."enum_pages_blocks_card_link_list_bg";
  DROP TYPE "public"."enum_insights_blocks_hero_variant";
  DROP TYPE "public"."enum_insights_blocks_hero_bg";
  DROP TYPE "public"."enum_insights_blocks_text_only_bg";
  DROP TYPE "public"."enum_insights_blocks_text_only_heading";
  DROP TYPE "public"."enum_insights_blocks_text_image_bg";
  DROP TYPE "public"."enum_insights_blocks_text_image_heading";
  DROP TYPE "public"."enum_insights_blocks_news_feed_bg";
  DROP TYPE "public"."enum_insights_blocks_support_channels_section_bg";
  DROP TYPE "public"."enum_insights_blocks_text_use_case_bg";
  DROP TYPE "public"."enum_insights_blocks_text_statistic_bg";
  DROP TYPE "public"."enum_insights_blocks_card_link_list_bg";
  DROP TYPE "public"."enum_webinar_items_blocks_hero_variant";
  DROP TYPE "public"."enum_webinar_items_blocks_hero_bg";
  DROP TYPE "public"."enum_story_items_blocks_hero_variant";
  DROP TYPE "public"."enum_story_items_blocks_hero_bg";
  DROP TYPE "public"."enum_story_items_blocks_faq_section_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_only_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_only_heading";
  DROP TYPE "public"."enum_story_items_blocks_structured_text_block_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_image_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_image_heading";
  DROP TYPE "public"."enum_story_items_blocks_support_channels_section_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_accordion_bg";
  DROP TYPE "public"."enum_story_items_blocks_support_cta_section_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_use_case_bg";
  DROP TYPE "public"."enum_story_items_blocks_text_statistic_bg";
  DROP TYPE "public"."enum_story_items_blocks_card_link_list_bg";
  DROP TYPE "public"."enum_catalogues_blocks_hero_variant";
  DROP TYPE "public"."enum_catalogues_blocks_hero_bg";
  DROP TYPE "public"."enum_catalogues_blocks_text_only_bg";
  DROP TYPE "public"."enum_catalogues_blocks_text_only_heading";
  DROP TYPE "public"."enum_homepage_blocks_hero_variant";
  DROP TYPE "public"."enum_homepage_blocks_hero_bg";
  DROP TYPE "public"."enum_homepage_blocks_text_only_bg";
  DROP TYPE "public"."enum_homepage_blocks_text_only_heading";
  DROP TYPE "public"."enum_homepage_blocks_text_image_bg";
  DROP TYPE "public"."enum_homepage_blocks_text_image_heading";
  DROP TYPE "public"."enum_homepage_blocks_news_feed_bg";
  DROP TYPE "public"."enum_homepage_blocks_support_channels_section_bg";
  DROP TYPE "public"."enum_homepage_blocks_text_use_case_bg";
  DROP TYPE "public"."enum_homepage_blocks_text_statistic_bg";
  DROP TYPE "public"."enum_homepage_blocks_card_link_list_bg";
  DROP TYPE "public"."enum_search_blocks_hero_variant";
  DROP TYPE "public"."enum_search_blocks_hero_bg";`)
}
