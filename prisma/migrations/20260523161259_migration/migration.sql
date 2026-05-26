/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorName` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverImageUrl` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishedAt` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `story` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPages` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trailerUrl` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authorId",
ADD COLUMN     "authorName" TEXT NOT NULL,
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "coverImageUrl" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "isFree" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "rating" REAL NOT NULL,
ADD COLUMN     "story" TEXT NOT NULL,
ADD COLUMN     "totalPages" INTEGER NOT NULL,
ADD COLUMN     "trailerUrl" TEXT NOT NULL;

-- DropTable
DROP TABLE "Author";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "referenceId" TEXT NOT NULL,
    "amount" REAL NOT NULL DEFAULT 10,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "status" TEXT NOT NULL DEFAULT 'pending',
    "qrCode" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "plan" TEXT NOT NULL DEFAULT 'monthly',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "referenceId" TEXT NOT NULL,
    "amountPaid" REAL NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
