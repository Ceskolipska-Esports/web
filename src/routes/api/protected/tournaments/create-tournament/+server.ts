import { env } from "$env/dynamic/private";
import { supabase } from "$lib/supabaseClient.js";
import { json } from "@sveltejs/kit";

export const POST = async ({ request }: { request: Request }) => {
	const req = await request.json();
	console.log(req);

	// check if authorized
	const token = req.headers.get("Authorization");
	if (!token || token !== env.API_PASSWORD) {
		return new Response(undefined, { status: 401 });
	}

	// check if Content-Type is application/json
	const contentType = req.headers.get("Content-Type");
	if (!contentType || contentType !== "application/json") {
		return new Response(undefined, {
			status: 400,
			statusText: "Wrong Content-Type",
		});
	}

	if (!req.body) {
		return new Response(undefined, {
			status: 400,
			statusText: "No body provided",
		});
	}

	const body = req.body;

	const { error } = await supabase.from("tournaments").insert(body);
	if (error) {
		return json({
			error: error.message,
		}, { status: 400 });
	}

	return new Response();
};
