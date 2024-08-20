import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const GET = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			redirectTo: `${env.PUBLIC_BASE_URL}/auth/callback`
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
