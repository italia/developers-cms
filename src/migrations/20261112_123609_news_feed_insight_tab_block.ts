import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_insight_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "insights_blocks_insight_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_blocks_insight_tab" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_insight_tab" ADD CONSTRAINT "pages_blocks_insight_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_insight_tab" ADD CONSTRAINT "insights_blocks_insight_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_insight_tab" ADD CONSTRAINT "homepage_blocks_insight_tab_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_insight_tab_order_idx" ON "pages_blocks_insight_tab" USING btree ("_order");
  CREATE INDEX "pages_blocks_insight_tab_parent_id_idx" ON "pages_blocks_insight_tab" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_insight_tab_path_idx" ON "pages_blocks_insight_tab" USING btree ("_path");
  CREATE INDEX "pages_blocks_insight_tab_locale_idx" ON "pages_blocks_insight_tab" USING btree ("_locale");
  CREATE INDEX "insights_blocks_insight_tab_order_idx" ON "insights_blocks_insight_tab" USING btree ("_order");
  CREATE INDEX "insights_blocks_insight_tab_parent_id_idx" ON "insights_blocks_insight_tab" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_insight_tab_path_idx" ON "insights_blocks_insight_tab" USING btree ("_path");
  CREATE INDEX "insights_blocks_insight_tab_locale_idx" ON "insights_blocks_insight_tab" USING btree ("_locale");
  CREATE INDEX "homepage_blocks_insight_tab_order_idx" ON "homepage_blocks_insight_tab" USING btree ("_order");
  CREATE INDEX "homepage_blocks_insight_tab_parent_id_idx" ON "homepage_blocks_insight_tab" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_insight_tab_path_idx" ON "homepage_blocks_insight_tab" USING btree ("_path");
  CREATE INDEX "homepage_blocks_insight_tab_locale_idx" ON "homepage_blocks_insight_tab" USING btree ("_locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_insight_tab" CASCADE;
  DROP TABLE "insights_blocks_insight_tab" CASCADE;
  DROP TABLE "homepage_blocks_insight_tab" CASCADE;`)
}
