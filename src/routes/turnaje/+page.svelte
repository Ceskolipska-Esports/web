<script lang="ts">
	import TournamentView from '$lib/components/TournamentView.svelte';

	export let data;
	let id = 1;

	const getTournamentViewID = (): number => {
		return id++;
	};
</script>

{#if data.error}
	<h1>Turnaje nelze načíst</h1>
{:else}
	<h1 id="main-title">Turnaje</h1>
	{#if data.upcoming && data.upcoming?.length !== 0}
		<div id="tournament-list">
			{#each data.upcoming as tournament}
				<TournamentView data={tournament} id={getTournamentViewID()} />
			{/each}
		</div>
	{:else}
		<h3>Žádné nadcházející turnaje</h3>
	{/if}
{/if}

<style lang="scss">
	#main-title {
		text-align: center;
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
