create policy "Enable insert for users based on user_id"
on "public"."user_data"
as permissive
for insert
to public
with check ((( SELECT auth.uid() AS uid) = user_id));




