-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "image" BYTEA NOT NULL,
    "readAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerCode" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_customerCode_key" ON "Image"("customerCode");
