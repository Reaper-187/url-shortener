-- CreateTable
CREATE TABLE "ShortUrl" (
    "url_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(50) NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortCode" TEXT NOT NULL,
    "qrCodeUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "totalClicks" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ShortUrl_pkey" PRIMARY KEY ("url_id")
);

-- CreateTable
CREATE TABLE "click_events" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "short_url_id" UUID NOT NULL,
    "clickedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "click_events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_name_key" ON "ShortUrl"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ShortUrl_shortCode_key" ON "ShortUrl"("shortCode");

-- CreateIndex
CREATE INDEX "click_events_short_url_id_idx" ON "click_events"("short_url_id");

-- CreateIndex
CREATE INDEX "click_events_clickedAt_idx" ON "click_events"("clickedAt");

-- AddForeignKey
ALTER TABLE "click_events" ADD CONSTRAINT "click_events_short_url_id_fkey" FOREIGN KEY ("short_url_id") REFERENCES "ShortUrl"("url_id") ON DELETE CASCADE ON UPDATE CASCADE;
