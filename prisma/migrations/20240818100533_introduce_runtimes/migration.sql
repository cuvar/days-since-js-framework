-- CreateTable
CREATE TABLE "Runtime" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT,
    "releaseLink" TEXT,
    "type" "Type" NOT NULL DEFAULT 'STABLE',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Runtime_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Runtime_name_key" ON "Runtime"("name");
