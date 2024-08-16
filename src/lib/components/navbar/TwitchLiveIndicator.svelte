<script lang="ts">
	import type { StreamStatusWrapper } from "$lib/server/twitch/stream";
	import { onMount } from "svelte";

	let status: StreamStatusWrapper | undefined;

	onMount(async () => {
		const response = await fetch("/api/stream-status");
		if (!response.ok) {
			console.warn("Failed to get stream status.");
			status = undefined;
			return;
		}

		const json = await response.json();
		status = json;
	})
</script>
{#if status && status.isLive}
	<div id="indicator"><i id="live-circle" class="bx bxs-circle" /> LIVE (<i class="bx bxs-user"/> {status.viewerCount})</div>
{/if}

<style lang="scss" scoped>
	#live-circle {
		color: var(--accent-color);
	}

	#indicator {
		display: flex;
		align-items: center;
		gap: 0.15rem;

		border: 2px var(--accent-color) solid;
		padding: 0.3rem 0.5rem;
		border-radius: 1rem;
		text-decoration: none;
	}
</style>
