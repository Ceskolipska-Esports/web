<script lang="ts">
	import TeamView from '$lib/components/teams/TeamView.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

{#if data.teams}
	{#each data.teams as team, i}
		<TeamView tournamentName={data.tournaments[i].name} name={team.name} memberCount={data.members[i] ?? 0} />
	{/each}
{:else}
	<h3>Nejste v žádném týmu</h3>
{/if}
