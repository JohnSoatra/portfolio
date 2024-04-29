-- CreateTable
CREATE TABLE "Visitor" (
    "id" VARCHAR(1) NOT NULL,
    "name" VARCHAR(15) NOT NULL,
    "link" VARCHAR(100),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id")
);
