import { getStreamStatus } from '$lib/server/twitch/stream';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	//FIXME: add error handling
	const streamStatus = await getStreamStatus();
	return json(streamStatus);
};
