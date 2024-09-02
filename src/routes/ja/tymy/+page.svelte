<script lang="ts">
	import TeamView from "$lib/components/teams/TeamView.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;

	//FIXME add error handling
	// if (data.error) {}
</script>

{#if data.teams}
		{#each data.teams as team}
			<TeamView name={team.name}/>
		{/each}
{:else}
	<h3>Nejste v žádném týmu</h3>
{/if}
