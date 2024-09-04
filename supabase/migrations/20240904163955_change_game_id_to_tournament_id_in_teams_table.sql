alter table "public"."teams" drop constraint "teams_game_id_fkey";

alter table "public"."teams" drop column "game_id";

alter table "public"."teams" add column "tournament_id" bigint not null;

alter table "public"."teams" add constraint "teams_game_id_fkey" FOREIGN KEY (tournament_id) REFERENCES games(id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."teams" validate constraint "teams_game_id_fkey";



