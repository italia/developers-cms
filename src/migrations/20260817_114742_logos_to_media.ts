import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Added nullable: layout_blocks_brand, layout_blocks_supporting_brand, and layout
  // already have rows in production. A NOT NULL column with no default cannot be added
  // to a non-empty table. Existing rows will need their logo re-selected in the admin
  // (a text URL can't be auto-converted into a media relationship), so the new columns
  // stay nullable here even though the field config marks them as required.
  await db.execute(sql`
   ALTER TABLE "layout_blocks_brand" ADD COLUMN "logo_id" uuid;
  ALTER TABLE "layout_blocks_supporting_brand" ADD COLUMN "brand_logo_id" uuid;
  ALTER TABLE "layout" ADD COLUMN "logo_select_id" uuid;
  ALTER TABLE "layout_blocks_brand" ADD CONSTRAINT "layout_blocks_brand_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout_blocks_supporting_brand" ADD CONSTRAINT "layout_blocks_supporting_brand_brand_logo_id_media_id_fk" FOREIGN KEY ("brand_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout" ADD CONSTRAINT "layout_logo_select_id_media_id_fk" FOREIGN KEY ("logo_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "layout_blocks_brand_logo_idx" ON "layout_blocks_brand" USING btree ("logo_id");
  CREATE INDEX "layout_blocks_supporting_brand_brand_logo_idx" ON "layout_blocks_supporting_brand" USING btree ("brand_logo_id");
  CREATE INDEX "layout_logo_select_idx" ON "layout" USING btree ("logo_select_id");
  ALTER TABLE "layout_blocks_brand" DROP COLUMN "main_logo";
  ALTER TABLE "layout_blocks_brand" DROP COLUMN "brand_logo";
  ALTER TABLE "layout_blocks_supporting_brand" DROP COLUMN "brand_logo";
  ALTER TABLE "layout" DROP COLUMN "logo_select";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "layout_blocks_brand" DROP CONSTRAINT "layout_blocks_brand_logo_id_media_id_fk";
  
  ALTER TABLE "layout_blocks_supporting_brand" DROP CONSTRAINT "layout_blocks_supporting_brand_brand_logo_id_media_id_fk";
  
  ALTER TABLE "layout" DROP CONSTRAINT "layout_logo_select_id_media_id_fk";
  
  DROP INDEX "layout_blocks_brand_logo_idx";
  DROP INDEX "layout_blocks_supporting_brand_brand_logo_idx";
  DROP INDEX "layout_logo_select_idx";
  ALTER TABLE "layout_blocks_brand" ADD COLUMN "main_logo" varchar;
  ALTER TABLE "layout_blocks_brand" ADD COLUMN "brand_logo" varchar;
  ALTER TABLE "layout_blocks_supporting_brand" ADD COLUMN "brand_logo" varchar;
  ALTER TABLE "layout" ADD COLUMN "logo_select" varchar;
  ALTER TABLE "layout_blocks_brand" DROP COLUMN "logo_id";
  ALTER TABLE "layout_blocks_supporting_brand" DROP COLUMN "brand_logo_id";
  ALTER TABLE "layout" DROP COLUMN "logo_select_id";`)
}
