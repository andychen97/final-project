set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	"joinedAt" timestamptz(6) NOT NULL default now(),
	CONSTRAINT "users_pk" PRIMARY KEY ("userId"),
  UNIQUE ("username")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."reviews" (
	"postId" serial,
	"userId" int NOT NULL,
	"comment" TEXT NOT NULL,
	"createdAt" timestamptz(6) NOT NULL default now(),
	CONSTRAINT "reviews_pk" PRIMARY KEY ("postId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."favorites" (
	"favoriteId" serial,
	"userId" int NOT NULL,
	"businessId" serial NOT NULL,
	"createdAt" timestamptz(6) NOT NULL default now(),
	CONSTRAINT "favorites_pk" PRIMARY KEY ("favoriteId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
