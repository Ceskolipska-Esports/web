export const load = async ({ locals: { supabase } }) => {
	const { data, error } = await supabase
		.from('tournaments')
		.select()
		.gt('start', new Date().toDateString())
		.order('start');
	if (error) {
		return {
			error: error.message
		};
	}

	return {
		data: data
	};
};
