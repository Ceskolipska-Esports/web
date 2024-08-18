export type Tournament = {
	id: number,
	name: string,
	start?: Date,
	end?: Date,
	prize?: string,
	game_id?: number,
}

// this is a dummy function so that TS doesn't complain that this isnt a module
export function dummy() {};
