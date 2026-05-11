/*
  Warnings:

  - You are about to drop the column `clickedAt` on the `click_events` table. All the data in the column will be lost.
  - You are about to drop the `ShortUrl` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "click_events" DROP CONSTRAINT "click_events_short_url_id_fkey";

-- DropIndex
DROP INDEX "click_events_clickedAt_idx";

-- AlterTable
ALTER TABLE "click_events" DROP COLUMN "clickedAt",
ADD COLUMN     "clicked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ShortUrl";

-- CreateTable
CREATE TABLE "short_urls" (
    "url_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "link_name" VARCHAR(50) NOT NULL,
    "original_url" TEXT NOT NULL,
    "custom_slug" TEXT NOT NULL,
    "generate_qr" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total_clicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "short_urls_pkey" PRIMARY KEY ("url_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "short_urls_link_name_key" ON "short_urls"("link_name");

-- CreateIndex
CREATE UNIQUE INDEX "short_urls_custom_slug_key" ON "short_urls"("custom_slug");

-- CreateIndex
CREATE INDEX "click_events_clicked_at_idx" ON "click_events"("clicked_at");

-- AddForeignKey
ALTER TABLE "click_events" ADD CONSTRAINT "click_events_short_url_id_fkey" FOREIGN KEY ("short_url_id") REFERENCES "short_urls"("url_id") ON DELETE CASCADE ON UPDATE CASCADE;
