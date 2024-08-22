import { supabase } from '$lib/supabaseClient';

export type DiscordUser = {
	id: number;
	username: string;
	discriminator: string;
	avatar: string;
};

export const getDiscordUser = async (userID: string, OAuthToken: string): Promise<DiscordUser> => {
	let response: Response;
	try {
		response = await fetch(`https://discord.com/api/users/${userID}`, {
			headers: { Authorization: `Bearer ${OAuthToken}` }
		});
	} catch {
		throw new Error('Unable to reach the Discord API.');
	}

	return await response.json();
};

// returns a png image in a Blob
export const getDiscordUserAvatar = async (
	user: DiscordUser,
	OAuthToken: string
): Promise<Blob | undefined> => {
	const url = supabase.storage.from('avatars').getPublicUrl(user.avatar);

	let avatar: Blob;

	try {
		const response = await fetch(url.data.publicUrl);
		if (!response.ok) {
			throw new Error();
		}

		avatar = await response.blob();
		return avatar;
	} catch {
		console.warn('Unable to reach the avatar bucket, fetching from Discord');
	}

	try {
		avatar = await getAvatarFromDiscord(user, OAuthToken);
	} catch {
		console.error('Failed to get avatar from Discord');
		return undefined;
	}

	console.info('Uploading the avatar to our cache');
	try {
		await uploadAvatarToCache(user.avatar, avatar);
	} catch {
		console.warn('Failed to upload avatar to cache');
	}

	return avatar;
};

const getAvatarFromDiscord = async (user: DiscordUser, OAuthToken: string): Promise<Blob> => {
	let response: Response;

	try {
		response = await fetch(
			`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`,
			{ headers: { Authorization: `Bearer ${OAuthToken}` } }
		);
	} catch {
		throw new Error('Unable to reach the Discord API.');
	}

	if (!response.ok || response.headers.get('Content-Type') !== 'image/png') {
		throw new Error('Something went wrong when fetching the avatar.');
	}

	return await response.blob();
};

const uploadAvatarToCache = async (hash: string, avatar: Blob) => {
	const { error } = await supabase.storage
		.from('avatars')
		.upload(hash, avatar.stream(), { contentType: 'image/png' });
	if (error) {
		throw new Error('Failed to upload avatar to cache.');
	}
};
