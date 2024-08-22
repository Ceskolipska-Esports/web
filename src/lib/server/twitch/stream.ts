import { env as privateEnv } from '$env/dynamic/private';
import { env as publicEnv } from '$env/dynamic/public';
import { streamStatus } from '$lib/stores';
import { getToken } from './token';

export type StreamStatusWrapper =
	| {
			isLive: false;
			when: Date; // this specifies how old the info is
	  }
	| {
			isLive: true;
			viewerCount: number;
			streamTitle: string;
			when: Date;
	  }
	| undefined;

type StreamsResponse = {
	data: {
		title: string;
		viewer_count: number;
	}[];
};

export const getStreamStatus = async (): Promise<StreamStatusWrapper> => {
	let status: StreamStatusWrapper;
	const unsubscribe = streamStatus.subscribe((val) => {
		if (val && new Date().getTime() - val.when.getTime() >= 20000) {
			console.log('returning old value');
			status = val;
		}
	});
	unsubscribe();

	if (status) {
		return status;
	}

	const token = (await getToken()).accessToken;

	const response = await fetch(
		`https://api.twitch.tv/helix/streams?user_login=${publicEnv.PUBLIC_TWITCH_USERNAME}`,
		{ headers: { Authorization: `Bearer ${token}`, 'Client-Id': privateEnv.TWITCH_CLIENT_ID } }
	);
	if (!response.ok) {
		throw new Error('Failed to fetch the stream status');
	}

	const json: StreamsResponse = await response.json();
	const data = json.data[0];
	if (!data) {
		return { isLive: false, when: new Date() };
	}

	status = {
		isLive: true,
		viewerCount: data.viewer_count,
		streamTitle: data.title,
		when: new Date()
	};

	streamStatus.set(status);
	return status;
};
