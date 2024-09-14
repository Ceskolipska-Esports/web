import { error as svelteError } from '@sveltejs/kit';
import DOMPurify from 'isomorphic-dompurify';

export const load = async ({ params, locals: { supabase } }) => {
	const { data, error } = await supabase
		.from('tournaments')
		.select()
		.eq('id', params.id)
		.limit(1)
		.single();
	if (error) {
		svelteError(500);
	}

	data.article = DOMPurify.sanitize(data.article!);

	return {
		...data
	};
};
