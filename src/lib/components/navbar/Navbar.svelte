<script lang="ts">
	import globals from '$lib/globals';
	import type { PageData } from '../../../routes/$types';
	import AccountButton from './AccountButton.svelte';
	import NavbarLink from './NavbarLink.svelte';
	import TwitchLiveIndicator from './TwitchLiveIndicator.svelte';

	export let data: PageData;
	const { user } = data;
</script>

<nav
	class="fixed left-0 top-0 flex w-screen content-center items-center justify-between border-b border-b-outline bg-black p-6 align-middle z-20"
>
	<NavbarLink href="/">
		<i class="bx bx-home text-3xl" />
	</NavbarLink>
	<div class="flex h-8 items-center gap-12">
		<NavbarLink href={`https://twitch.tv/ceskolipskaesports`} target="_blank"
			><TwitchLiveIndicator />
			<i class="bx bxl-twitch text-3xl" />
		</NavbarLink>
		<NavbarLink href={globals.discordInvite} target="_blank">
			<i class="bx bxl-discord-alt text-3xl" />
		</NavbarLink>
		<NavbarLink href="/turnaje">
			<i class="bx bx-trophy text-3xl" /></NavbarLink
		>
		<AccountButton {user} />
	</div>
</nav>
