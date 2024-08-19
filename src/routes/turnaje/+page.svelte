<script lang="ts">
	import TournamentView from '$lib/components/TournamentView.svelte';
	import type { Tournament } from '$lib/tournament';

	export let data;
	const tournaments: Tournament[] | undefined = data.data as Tournament[] | undefined;
	
	let id = 1;

	const getTournamentViewID = (): number => {
		return id++;
	};
</script>

{#if data.error}
	<h1>Turnaje nelze načíst</h1>
{:else if !tournaments}
	<h1>Žádné nadcházející turnaje</h1>
{:else}
	<h1 id="main-title">Nadcházející turnaje</h1>
	{#if tournaments && tournaments.length !== 0}
		<div id="tournament-list">
			{#each tournaments as tournament}
				<TournamentView data={tournament} id={getTournamentViewID()} />
			{/each}
		</div>
	{:else}
		<h3>Žádné nadcházející turnaje</h3>
	{/if}
{/if}

<style lang="scss">
	#main-title {
		font-size: 3rem;
	}
	#tournament-list {
		display: flex;
		flex-direction: column;
		align-items: center;

		margin: 5rem 0rem;
		padding: 3rem;

		font-size: 1.5rem;
	}
</style>
