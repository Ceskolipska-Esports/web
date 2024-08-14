import dotenv from 'dotenv';
import globals from "$lib/globals";
import { getTwitchOAuthToken } from '$lib/twitch/token';
import { getStreamStatus, type StreamStatus } from '$lib/twitch/stream';
import { streamStatus } from '$lib/stores';

dotenv.config();

/* TODO: rewrite this whole forsaken thing to supabase edge functions where it updates through 
		 the webhook */
export const load = async () => {
	const clientID = process.env.TWITCH_CLIENT_ID;
	const clientSecret = process.env.TWITCH_CLIENT_SECRET;
	const twitchUsername = globals.twitchUsername;

	if (!clientID || !clientSecret || !twitchUsername) {
		console.warn("Necessary env variables to get the channel's live status aren't set.");
		return { isLive: false };
	}

	let token: string;
	try {
		token = await getTwitchOAuthToken(clientID, clientSecret);
	} catch {
		console.error("Unable to get Twitch OAuth2 token.");
		return;
	}

	let stream: StreamStatus;
	try {
		stream = await getStreamStatus(globals.twitchUsername, token);
	} catch {
		console.error("Unable to get stream status.");
		return;
	}

	streamStatus.set(stream);	
};
