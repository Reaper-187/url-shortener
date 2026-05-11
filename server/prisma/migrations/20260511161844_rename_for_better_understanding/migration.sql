/*
  Warnings:

  - You are about to drop the column `generate_qr` on the `short_urls` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "short_urls" DROP COLUMN "generate_qr",
ADD COLUMN     "qr_code" TEXT;
