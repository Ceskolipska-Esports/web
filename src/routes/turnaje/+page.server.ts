import { error } from '@sveltejs/kit';

export const load = async ({ locals: { supabase } }) => {
	const { data: tournaments, error: err } = await supabase
		.from('tournaments')
		.select()
		.gt('start', new Date().toISOString())
		.order('start');
	if (err) {
		error(500, err?.message);
	}

	return {
		tournaments
	};
};
