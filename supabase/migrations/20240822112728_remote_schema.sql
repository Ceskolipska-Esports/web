alter table "public"."games" alter column "genre" set data type text using "genre"::text;

alter table "public"."games" alter column "name" set data type text using "name"::text;

alter table "public"."games" alter column "pegi_rating" set data type text using "pegi_rating"::text;

alter table "public"."tournaments" alter column "name" set data type text using "name"::text;

alter table "public"."tournaments" alter column "prize" set data type text using "prize"::text;


