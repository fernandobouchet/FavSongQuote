/*
  Warnings:

  - Added the required column `videoUrl` to the `quotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quotes" ADD COLUMN     "videoUrl" TEXT NOT NULL;
