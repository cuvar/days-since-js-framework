-- CreateEnum
CREATE TYPE "Type" AS ENUM ('STABLE', 'ALPHA', 'BETA');

-- CreateTable
CREATE TABLE "Framework" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "releaseLink" TEXT,
    "type" "Type" NOT NULL DEFAULT 'STABLE',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Framework_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Framework_name_key" ON "Framework"("name");
