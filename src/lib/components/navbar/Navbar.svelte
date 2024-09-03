<script lang="ts">
	import globals from '$lib/globals';
	import type { PageData } from '../../../routes/$types';
	import AccountButton from './AccountButton.svelte';
	import NavbarLink from './NavbarLink.svelte';
	import TwitchLiveIndicator from './TwitchLiveIndicator.svelte';

	export let data: PageData;
	const { user } = data;
</script>

<nav class="flex justify-between align-middle content-center p-2 mb-12">
	<NavbarLink href="/">Českolipská Esports</NavbarLink>
	<div class="flex gap-12 items-center h-8">
		<NavbarLink href={`https://twitch.tv/ceskolipskaesports`} target="_blank"
			><TwitchLiveIndicator /> Twitch</NavbarLink
		>
		<NavbarLink href={globals.discordInvite} target="_blank">Discord</NavbarLink>
		<NavbarLink href="/turnaje">Turnaje</NavbarLink>
		<AccountButton {user} />
	</div>
</nav>
