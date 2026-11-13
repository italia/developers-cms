import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_third_party_cookie" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"cookie_prefix" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_third_party_cookie" ADD CONSTRAINT "pages_blocks_third_party_cookie_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_third_party_cookie_order_idx" ON "pages_blocks_third_party_cookie" USING btree ("_order");
  CREATE INDEX "pages_blocks_third_party_cookie_parent_id_idx" ON "pages_blocks_third_party_cookie" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_third_party_cookie_path_idx" ON "pages_blocks_third_party_cookie" USING btree ("_path");
  CREATE INDEX "pages_blocks_third_party_cookie_locale_idx" ON "pages_blocks_third_party_cookie" USING btree ("_locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_third_party_cookie" CASCADE;`)
}
