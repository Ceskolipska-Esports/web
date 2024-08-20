<script lang="ts">
	import globals from '$lib/globals';
	import { onMount } from 'svelte';
	import type { PageData } from '../../../routes/$types';
	import AccountButton from './AccountButton.svelte';
	import NavbarLink from './NavbarLink.svelte';
	import TwitchLiveIndicator from './TwitchLiveIndicator.svelte';

	export let data: PageData;
	const { user } = data;
</script>

<nav>
	<NavbarLink href="/">Českolipská Esports</NavbarLink>
	<div>
		<NavbarLink href={`https://twitch.tv/ceskolipskaesports`} target="_blank"><TwitchLiveIndicator /> Twitch</NavbarLink>
		<NavbarLink href={globals.discordInvite} target="_blank">Discord</NavbarLink>
		<NavbarLink href="/turnaje">Turnaje</NavbarLink>
		<AccountButton { user } />
	</div>
</nav>

<style scoped lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		padding: 0.5rem;
		margin-bottom: 3rem;

		div {
			display: flex;
			gap: 3rem;
			align-items: center;
			height: 2rem;
		}
	}
</style>
