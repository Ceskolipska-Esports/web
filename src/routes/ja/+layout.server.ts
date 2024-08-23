import type { SupabaseClient, User } from '@supabase/supabase-js';
import { redirect } from '@sveltejs/kit';
import type { Database } from '../../database.types.js';

export const load = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase.auth.getUser();

	if (!data.user || error?.name === 'AuthSessionMissingError') {
		redirect(303, '/auth/login?next=%2Fja');
	} else if (error) {
		console.error(error);
		throw error;
	}

	const stats = await getUserStats(supabase, data.user);
	return { user: data.user, stats };
};

const getUserStats = async (supabase: SupabaseClient<Database>, user: User) => {
	const { data, error } = await supabase
		.from('user_data')
		.select()
		.eq('user_id', user.id)
		.maybeSingle();

	if (error) {
		console.error(error);
		throw error;
	}

	// record doesn't exist, so we create a new one
	if (!data) {
		const { data, error } = await supabase
			.from('user_data')
			.insert({
				user_id: user.id
			})
			.select()
			.limit(1)
			.single();

		if (error) {
			console.error();
			throw error;
		}

		return data;
	}

	return data;
};
