<script lang="ts">
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
	import TournamentView from '$lib/components/TournamentView.svelte';
	import type { Tournament } from '$lib/tournament';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const tournaments: Tournament[] | undefined = data.data as Tournament[] | undefined;

	let id = 1;

	const getTournamentViewID = (): number => {
		return id++;
	};
</script>

<PageMetadataHelper title="Turnaje" description="Nadcházející turnaje" />

{#if data.error}
	<h1>Turnaje nelze načíst</h1>
{:else if !tournaments}
	<h1>Žádné nadcházející turnaje</h1>
{:else}
	<Title>Nadcházející turnaje</Title>
	{#if tournaments && tournaments.length !== 0}
		<div id="tournament-list" class="flex flex-col items-center my-20 p-12 text-2xl">
			{#each tournaments as tournament}
				<TournamentView data={tournament} id={getTournamentViewID()} />
			{/each}
		</div>
	{:else}
		<h3 class="text-center my-20">Žádné nadcházející turnaje</h3>
	{/if}
{/if}
