import { supabase } from "$lib/supabaseClient";
import { json } from "@sveltejs/kit";

export const GET = async () => {
	const { data, error } = await supabase.from("tournaments").select();
	if (error) {
		return json({
			error: "Failed to fetch data from database.",
		})
	}

	return json({
		tournaments: data
	})
};
