import { redirect } from '@sveltejs/kit';

export const GET = async ({ url, locals: { supabase } }) => {
	const next = url.searchParams.get('next');

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'discord',
		options: {
			redirectTo: `${url.origin}/auth/callback${next ? `?callback=${next}` : ''}`
		}
	});
	if (error) {
		console.error(error);
		redirect(303, '/auth/error');
	}

	if (data.url) {
		console.log('přesměrování');
		redirect(303, data.url);
	}

	redirect(303, '/auth/error');
};
