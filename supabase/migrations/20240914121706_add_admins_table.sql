alter table "public"."tournaments" drop constraint "tournaments_article_check";

create table "public"."admins" (
    "id" uuid not null
);


alter table "public"."admins" enable row level security;

CREATE UNIQUE INDEX admins_id_key ON public.admins USING btree (id);

CREATE UNIQUE INDEX admins_pkey ON public.admins USING btree (id);

alter table "public"."admins" add constraint "admins_pkey" PRIMARY KEY using index "admins_pkey";

alter table "public"."admins" add constraint "admins_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."admins" validate constraint "admins_id_fkey";

alter table "public"."admins" add constraint "admins_id_key" UNIQUE using index "admins_id_key";

alter table "public"."tournaments" add constraint "tournaments_article_check" CHECK ((length(article) > 0)) not valid;

alter table "public"."tournaments" validate constraint "tournaments_article_check";

grant delete on table "public"."admins" to "anon";

grant insert on table "public"."admins" to "anon";

grant references on table "public"."admins" to "anon";

grant select on table "public"."admins" to "anon";

grant trigger on table "public"."admins" to "anon";

grant truncate on table "public"."admins" to "anon";

grant update on table "public"."admins" to "anon";

grant delete on table "public"."admins" to "authenticated";

grant insert on table "public"."admins" to "authenticated";

grant references on table "public"."admins" to "authenticated";

grant select on table "public"."admins" to "authenticated";

grant trigger on table "public"."admins" to "authenticated";

grant truncate on table "public"."admins" to "authenticated";

grant update on table "public"."admins" to "authenticated";

grant delete on table "public"."admins" to "service_role";

grant insert on table "public"."admins" to "service_role";

grant references on table "public"."admins" to "service_role";

grant select on table "public"."admins" to "service_role";

grant trigger on table "public"."admins" to "service_role";

grant truncate on table "public"."admins" to "service_role";

grant update on table "public"."admins" to "service_role";



