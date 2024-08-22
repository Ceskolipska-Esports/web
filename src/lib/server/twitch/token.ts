import { env } from '$env/dynamic/private';
import { accessToken } from '$lib/stores';

export type AccessTokenWrapper =
	| {
			accessToken: string;
			expires: Date;
	  }
	| undefined;

type AccessTokenResponse = {
	access_token: string;
	expires_in: number;
	// there is the token_type field, but it's not important for us
};

export const getToken = async () => {
	let t: AccessTokenWrapper;
	const unsubscribe = accessToken.subscribe((val) => {
		if (val) {
			t = val;
		}
	});
	unsubscribe();

	if (t) {
		return t;
	}

	const response = await fetch(
		`https://id.twitch.tv/oauth2/token?client_id=${env.TWITCH_CLIENT_ID}&client_secret=${env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
		{ method: 'POST' }
	);

	if (!response.ok) {
		throw new Error('Failed to fetch the Twitch OAuth token.');
	}

	const json: AccessTokenResponse = await response.json();
	const date = new Date();
	date.setSeconds(date.getSeconds() + json.expires_in);

	t = {
		accessToken: json.access_token,
		expires: date
	};

	accessToken.set(t);
	return t;
};
