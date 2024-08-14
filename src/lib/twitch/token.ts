import fetch from "$lib/fetch";

export type TokenResponse = {
	access_token: string;
	expires_in: string;
};

export const getTwitchOAuthToken = async (clientID: string, clientSecret: string) => {
	const tokenResponse = await fetch(
		`https://id.twitch.tv/oauth2/token/?client_id=${clientID}&client_secret=${clientSecret}&grant_type=client_credentials`,
		{
			headers: { 'Content-Type': 'x-www-form-urlencoded' },
			method: 'POST'
		}
	);
	if (!tokenResponse.ok) {
		throw new Error();
	}

	const token: string = ((await tokenResponse.json()) as TokenResponse).access_token;
	return token;
}
