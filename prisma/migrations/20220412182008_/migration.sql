/*
  Warnings:

  - Made the column `author` on table `Article` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "author" SET NOT NULL;

-- CreateTable
CREATE TABLE "Word" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
