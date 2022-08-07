/*
  Warnings:

  - You are about to drop the `products_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products_categories" DROP CONSTRAINT "products_categories_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "products_categories" DROP CONSTRAINT "products_categories_productId_fkey";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "productId" TEXT;

-- DropTable
DROP TABLE "products_categories";

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
