export const load = async ({ locals: { supabase, user } }) => {
	// get team IDs of the user
	const { data: teamIDs, error: teamIDsError } = await supabase
		.from('team_members')
		.select('team_id')
		.eq('user_id', user!.id);
	if (teamIDsError) {
		return {
			error: teamIDsError
		};
	}

	const ids = teamIDs.map((team) => team.team_id);

	if (ids.length === 0) {
		return { teams: null };
	}

	// get the teams of the user
	const { data: teams, error: teamError } = await supabase.from('teams').select().in('id', ids);
	if (teamError) {
		return { error: teamError };
	}

	return { teams };
};
