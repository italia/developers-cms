import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Hand-written (not `payload migrate:create`): the CLI's interactive "created or renamed?"
// column-ambiguity prompt (icon_select -> icon_select_id) requires a real TTY, which isn't
// available when running non-interactively — same reasoning as the article-content-blocks
// migration. CardEditorialWithIcon.iconSelect changes from a free-text icon name (`text`) to
// a real media upload (`upload`, relationTo: 'media'), across every collection that embeds it
// via TextImage.additionalContent (homepage, insights, pages, story-items). Constraint names
// below are copied verbatim from what Postgres actually assigned (auto-truncated to 63 bytes),
// not computed, so down() drops the right thing.

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // pages_blocks_card_editorial_with_icon had 3 pre-existing rows written before
  // card_editorial_with_icon/additional_content were wired into the DatoCMS import mapping —
  // stale, incomplete data. The parent page's `content` blocks array is fully replaced by the
  // next import-contents.ts run regardless, so these rows are simply cleared rather than
  // migrated field-by-field.
  await db.execute(sql`
    DELETE FROM "pages_blocks_card_editorial_with_icon";

    ALTER TABLE "homepage_blocks_card_editorial_with_icon" DROP COLUMN "icon_select";
    ALTER TABLE "homepage_blocks_card_editorial_with_icon" ADD COLUMN "icon_select_id" uuid NOT NULL;
    ALTER TABLE "homepage_blocks_card_editorial_with_icon" ADD CONSTRAINT "homepage_blocks_card_editorial_with_icon_icon_select_id_media_i" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "homepage_blocks_card_editorial_with_icon_icon_select_idx" ON "homepage_blocks_card_editorial_with_icon" USING btree ("icon_select_id");

    ALTER TABLE "insights_blocks_card_editorial_with_icon" DROP COLUMN "icon_select";
    ALTER TABLE "insights_blocks_card_editorial_with_icon" ADD COLUMN "icon_select_id" uuid NOT NULL;
    ALTER TABLE "insights_blocks_card_editorial_with_icon" ADD CONSTRAINT "insights_blocks_card_editorial_with_icon_icon_select_id_media_i" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "insights_blocks_card_editorial_with_icon_icon_select_idx" ON "insights_blocks_card_editorial_with_icon" USING btree ("icon_select_id");

    ALTER TABLE "pages_blocks_card_editorial_with_icon" DROP COLUMN "icon_select";
    ALTER TABLE "pages_blocks_card_editorial_with_icon" ADD COLUMN "icon_select_id" uuid NOT NULL;
    ALTER TABLE "pages_blocks_card_editorial_with_icon" ADD CONSTRAINT "pages_blocks_card_editorial_with_icon_icon_select_id_media_id_f" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "pages_blocks_card_editorial_with_icon_icon_select_idx" ON "pages_blocks_card_editorial_with_icon" USING btree ("icon_select_id");

    ALTER TABLE "story_items_blocks_card_editorial_with_icon" DROP COLUMN "icon_select";
    ALTER TABLE "story_items_blocks_card_editorial_with_icon" ADD COLUMN "icon_select_id" uuid NOT NULL;
    ALTER TABLE "story_items_blocks_card_editorial_with_icon" ADD CONSTRAINT "story_items_blocks_card_editorial_with_icon_icon_select_id_medi" FOREIGN KEY ("icon_select_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    CREATE INDEX "story_items_blocks_card_editorial_with_icon_icon_select_idx" ON "story_items_blocks_card_editorial_with_icon" USING btree ("icon_select_id");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "homepage_blocks_card_editorial_with_icon" DROP CONSTRAINT "homepage_blocks_card_editorial_with_icon_icon_select_id_media_i";
    DROP INDEX "homepage_blocks_card_editorial_with_icon_icon_select_idx";
    ALTER TABLE "homepage_blocks_card_editorial_with_icon" DROP COLUMN "icon_select_id";
    ALTER TABLE "homepage_blocks_card_editorial_with_icon" ADD COLUMN "icon_select" character varying NOT NULL;

    ALTER TABLE "insights_blocks_card_editorial_with_icon" DROP CONSTRAINT "insights_blocks_card_editorial_with_icon_icon_select_id_media_i";
    DROP INDEX "insights_blocks_card_editorial_with_icon_icon_select_idx";
    ALTER TABLE "insights_blocks_card_editorial_with_icon" DROP COLUMN "icon_select_id";
    ALTER TABLE "insights_blocks_card_editorial_with_icon" ADD COLUMN "icon_select" character varying NOT NULL;

    ALTER TABLE "pages_blocks_card_editorial_with_icon" DROP CONSTRAINT "pages_blocks_card_editorial_with_icon_icon_select_id_media_id_f";
    DROP INDEX "pages_blocks_card_editorial_with_icon_icon_select_idx";
    ALTER TABLE "pages_blocks_card_editorial_with_icon" DROP COLUMN "icon_select_id";
    ALTER TABLE "pages_blocks_card_editorial_with_icon" ADD COLUMN "icon_select" character varying NOT NULL;

    ALTER TABLE "story_items_blocks_card_editorial_with_icon" DROP CONSTRAINT "story_items_blocks_card_editorial_with_icon_icon_select_id_medi";
    DROP INDEX "story_items_blocks_card_editorial_with_icon_icon_select_idx";
    ALTER TABLE "story_items_blocks_card_editorial_with_icon" DROP COLUMN "icon_select_id";
    ALTER TABLE "story_items_blocks_card_editorial_with_icon" ADD COLUMN "icon_select" character varying NOT NULL;
  `)
}
