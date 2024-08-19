import { redirect } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			redirectTo: `http://localhost:5173/auth/callback`
		}
	});
	if (error) {
		console.error(error);
		redirect(303, '/auth/error');
	}

	if (data.url) {
		redirect(303, data.url);
	}

	redirect(303, '/auth/error');
};
