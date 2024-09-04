import { error } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, user } }) => {
	// get team IDs of the user
	const { data: teamIDs, error: teamIDsError } = await supabase
		.from('team_members')
		.select('team_id')
		.eq('user_id', user!.id);
	if (teamIDsError) {
		error(500, { message: teamIDsError.message });
	}

	const ids = teamIDs.map((team) => team.team_id);
	if (ids.length === 0) {
		return { teams: null };
	}

	const { data: teams, error: teamError } = await supabase.from('teams').select().in('id', ids);
	if (teamError) {
		return { error: teamError };
	}

	const tournamentIDs = teams.map((team) => team.tournament_id);

	const { data: tournaments, error: gameError } = await supabase
		.from('tournaments')
		.select()
		.in('id', tournamentIDs);
	if (gameError) {
		error(500, { message: gameError.message });
	}

	const members = [];
	for (const t of teams) {
		const { count, error: err } = await supabase
			.from('team_members')
			.select('*', { count: 'exact', head: true })
			.eq('team_id', t.id);

		if (err) {
			error(500, { message: err.message });
		}

		members.push(count);
	}

	return { teams, members, tournaments };
};
