set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public.users" (
	"UserId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"joinedAt" timestamptz NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("UserId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.reviews" (
	"postId" serial NOT NULL,
	"userId" int NOT NULL,
	"comment" TEXT NOT NULL,
	"createdAt" timestamptz NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.favorites" (
	"favoriteId" serial NOT NULL,
	"userId" int NOT NULL,
	"businessId" serial NOT NULL,
	"AddedAt" timestamptz NOT NULL,
	CONSTRAINT "favorites_pk" PRIMARY KEY ("favoriteId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("userId") REFERENCES "users"("UserId");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("userId") REFERENCES "users"("UserId");
