import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		console.error(error);
		redirect(303, '/auth/logout/error');
	}

	redirect(303, '/');
};
