import type { Tournament } from '$lib/tournament';

export const load = async ({ fetch }) => {
	const res = await fetch("/api/tournaments/get-tournaments");
	if (!res.ok) {
		return {
			error: "Failed to fetch tournaments."
		}
	}

	const json: { tournaments: Tournament[] } = await res.json();
	json.tournaments.sort((a, b) => {
		if (!a.start) {
			return 1;
		}

		if (!b.start) {
			return -1;
		}

		const aDate = new Date(a.start);
		const bDate = new Date(b.start);

		if (aDate < bDate) {
			return -1;
		}
		if (aDate > bDate) {
			return 1;
		}
		return 0;
	})

	const unscheduled: Tournament[] = [];
	const upcoming: Tournament[] = [];
	const past: Tournament[] = [];

	const currentDate = new Date();
	for (const tournament of json.tournaments) {
		if (!tournament.start) {
			unscheduled.push(tournament);
		}

		if (currentDate.getTime() < new Date(tournament.start!).getTime()) {
			upcoming.push(tournament);
		}

		if (currentDate.getTime() > new Date(tournament.end!).getTime()) {
			past.push(tournament);
		}
	}

	return {
		unscheduled,
		upcoming,
		past,
	};
}
