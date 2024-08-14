import fetch from "$lib/fetch";

type StreamsResponse = {
	data: {
		viewer_count: number,
	}[],
}

export type StreamStatus = {
	isLive: boolean,
	viewerCount?: number,
}

export const getStreamStatus = async (twitchUsername: string, token: string): Promise<StreamStatus> => {
	const streamsResponse = await fetch(
		`https://api.twitch.tv/helix/streams/?user_login=${twitchUsername}&type=all`,
		{
			headers: {
				'Content-Type': 'x-www-form-urlencoded',
				Authorization: `Bearer ${token}`,
			},
		},
	);

	if (!streamsResponse.ok) {
		throw new Error();
	}

	const streams: StreamsResponse = await streamsResponse.json();
	const stream = streams.data[0];
	const data: StreamStatus = { isLive: false, };

	if (stream) {
		data.isLive = true;
	} else {
		return { isLive: false };
	}

	data.viewerCount = stream.viewer_count;

	return data;
}
