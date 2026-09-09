import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Crea le tabelle del blocco OrderedList su Insights (aggiunto in ccc5e72 "added orderlist
// block", 20/08/2026) che nessuna migration ha mai creato.
//
// Perché mancavano, e perché `migrate:create` NON le rigenera: il generatore diffa lo schema
// derivato dalla config contro lo snapshot `migrations/*.json`, non contro il DB. Lo snapshot
// le dichiara già — vennero incluse nell'output grezzo di una `migrate:create` precedente e poi
// tolte a mano perché "esistevano già live" (vedi la nota in 20260821_144711). Ma esistevano
// solo sul DB di sviluppo, dove le aveva create la modalità `push`: su qualunque DB costruito
// dalle sole migration non sono mai state create. Snapshot e migration sono così andati fuori
// sincrono in modo invisibile agli strumenti, e ogni query su `insights` falliva con
// `relation "insights_blocks_ordered_list" does not exist` (HTTP 500 su /api/insights).
//
// Il DDL qui sotto è estratto dallo schema che la config Payload produce in push su un DB
// vuoto, quindi è per costruzione quello che il runtime si aspetta. Lo snapshot .json che
// accompagna questa migration è invariato: descriveva già lo stato post-migration.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "insights_blocks_ordered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE "insights_blocks_list_item" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE "insights_blocks_list_item_resource" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"paragraph" jsonb NOT NULL,
  	"subtitle" varchar,
  	"block_name" varchar
  );

  CREATE TABLE "insights_blocks_download_link" (
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

  CREATE TABLE "insights_blocks_internal_link_7" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE "insights_blocks_external_link_7" (
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

  ALTER TABLE "insights_blocks_ordered_list" ADD CONSTRAINT "insights_blocks_ordered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_list_item" ADD CONSTRAINT "insights_blocks_list_item_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_list_item_resource" ADD CONSTRAINT "insights_blocks_list_item_resource_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_download_link" ADD CONSTRAINT "insights_blocks_download_link_doc_id_media_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "insights_blocks_download_link" ADD CONSTRAINT "insights_blocks_download_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_internal_link_7" ADD CONSTRAINT "insights_blocks_internal_link_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "insights_blocks_external_link_7" ADD CONSTRAINT "insights_blocks_external_link_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "insights_blocks_ordered_list_order_idx" ON "insights_blocks_ordered_list" USING btree ("_order");
  CREATE INDEX "insights_blocks_ordered_list_parent_id_idx" ON "insights_blocks_ordered_list" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_ordered_list_path_idx" ON "insights_blocks_ordered_list" USING btree ("_path");
  CREATE INDEX "insights_blocks_ordered_list_locale_idx" ON "insights_blocks_ordered_list" USING btree ("_locale");
  CREATE INDEX "insights_blocks_list_item_order_idx" ON "insights_blocks_list_item" USING btree ("_order");
  CREATE INDEX "insights_blocks_list_item_parent_id_idx" ON "insights_blocks_list_item" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_list_item_path_idx" ON "insights_blocks_list_item" USING btree ("_path");
  CREATE INDEX "insights_blocks_list_item_locale_idx" ON "insights_blocks_list_item" USING btree ("_locale");
  CREATE INDEX "insights_blocks_list_item_resource_order_idx" ON "insights_blocks_list_item_resource" USING btree ("_order");
  CREATE INDEX "insights_blocks_list_item_resource_parent_id_idx" ON "insights_blocks_list_item_resource" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_list_item_resource_path_idx" ON "insights_blocks_list_item_resource" USING btree ("_path");
  CREATE INDEX "insights_blocks_list_item_resource_locale_idx" ON "insights_blocks_list_item_resource" USING btree ("_locale");
  CREATE INDEX "insights_blocks_download_link_order_idx" ON "insights_blocks_download_link" USING btree ("_order");
  CREATE INDEX "insights_blocks_download_link_parent_id_idx" ON "insights_blocks_download_link" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_download_link_path_idx" ON "insights_blocks_download_link" USING btree ("_path");
  CREATE INDEX "insights_blocks_download_link_locale_idx" ON "insights_blocks_download_link" USING btree ("_locale");
  CREATE INDEX "insights_blocks_download_link_doc_idx" ON "insights_blocks_download_link" USING btree ("doc_id");
  CREATE INDEX "insights_blocks_internal_link_7_order_idx" ON "insights_blocks_internal_link_7" USING btree ("_order");
  CREATE INDEX "insights_blocks_internal_link_7_parent_id_idx" ON "insights_blocks_internal_link_7" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_internal_link_7_path_idx" ON "insights_blocks_internal_link_7" USING btree ("_path");
  CREATE INDEX "insights_blocks_internal_link_7_locale_idx" ON "insights_blocks_internal_link_7" USING btree ("_locale");
  CREATE INDEX "insights_blocks_external_link_7_order_idx" ON "insights_blocks_external_link_7" USING btree ("_order");
  CREATE INDEX "insights_blocks_external_link_7_parent_id_idx" ON "insights_blocks_external_link_7" USING btree ("_parent_id");
  CREATE INDEX "insights_blocks_external_link_7_path_idx" ON "insights_blocks_external_link_7" USING btree ("_path");
  CREATE INDEX "insights_blocks_external_link_7_locale_idx" ON "insights_blocks_external_link_7" USING btree ("_locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "insights_blocks_ordered_list" CASCADE;
  DROP TABLE "insights_blocks_list_item" CASCADE;
  DROP TABLE "insights_blocks_list_item_resource" CASCADE;
  DROP TABLE "insights_blocks_download_link" CASCADE;
  DROP TABLE "insights_blocks_internal_link_7" CASCADE;
  DROP TABLE "insights_blocks_external_link_7" CASCADE;`)
}
