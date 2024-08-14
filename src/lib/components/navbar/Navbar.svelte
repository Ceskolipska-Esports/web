<script lang="ts">
	import globals from '$lib/globals';
	import NavbarLink from './NavbarLink.svelte';
	import TwitchLiveIndicator from './TwitchLiveIndicator.svelte';
</script>

<nav>
	<NavbarLink href="/">Českolipská Esports</NavbarLink>
	<div>
		<div id="twitch-section">
			<TwitchLiveIndicator />
			<NavbarLink href={`https://twitch.tv/ceskolipskaesports`}>Twitch</NavbarLink>
		</div>
		<NavbarLink href={globals.discordInvite} target="_blank">Discord</NavbarLink>
		<NavbarLink href="/turnaje">Turnaje</NavbarLink>
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

		#twitch-section {
			gap: 1rem;
		}
	}
</style>
