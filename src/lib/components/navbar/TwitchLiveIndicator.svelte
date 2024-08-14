<script lang="ts" context="module">
	import globals from '$lib/globals';

	export let isLive: boolean = false;
</script>

{#if isLive}
	<a href={globals.twitchUrl} target="_blank"><i class="bx bxs-circle" /> <b>LIVE</b></a>
{/if}

<style lang="scss" scoped>
	a {
		color: white;
		text-decoration: none;

		display: flex;
		align-items: center;
		gap: 0.3rem;

		border: 2px red solid;
		border-radius: 1rem;
		padding: 0.3rem 0.5rem;
	}
</style>
