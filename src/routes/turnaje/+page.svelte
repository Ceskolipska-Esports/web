<script lang="ts">
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
	import TournamentView from './TournamentView.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data;

	let id = 1;

	const getTournamentViewID = (): number => {
		return id++;
	};
</script>

<PageMetadataHelper title="Turnaje" description="Nadcházející turnaje" />

<Title>Nadcházející turnaje</Title>
{#if data.tournaments.length === 0}
	<h3 class="my-20 text-center">Žádné nadcházející turnaje</h3>
{:else}
	<div id="tournament-list" class="my-20 flex flex-col items-center p-12 text-2xl">
		{#each data.tournaments as tournament}
			<TournamentView {tournament} id={getTournamentViewID()} />
		{/each}
	</div>
{/if}
