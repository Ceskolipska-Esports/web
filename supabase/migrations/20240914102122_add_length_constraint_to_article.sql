alter table "public"."tournaments" add constraint "tournaments_article_check" CHECK ((length(article) > 50)) not valid;

alter table "public"."tournaments" validate constraint "tournaments_article_check";



