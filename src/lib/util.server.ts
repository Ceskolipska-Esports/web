import type { Database } from "../database.types";
import type { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "@sveltejs/kit";

export const checkIfIsAdmin = async (supabase: SupabaseClient<Database>, userId: string | undefined, url: string): Promise<boolean> => {
	if (!userId) redirect(303, `/auth/login?next=${url}`)

    const { count, error } = await supabase.from("admins").select("*", { count: "exact", head: true }).eq("id", userId);

    if (error) {
        console.error("Unable to determine if user is an admin or not");
        return false
    }

    if (count && count > 0) {
        return true
    }

    return false
}
