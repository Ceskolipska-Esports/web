<script lang="ts">
	import type { StreamStatusWrapper } from '$lib/server/twitch/stream';
	import { onMount } from 'svelte';

	let status: StreamStatusWrapper | undefined;

	onMount(async () => {
		const response = await fetch('/api/stream-status');
		if (!response.ok) {
			console.warn('Failed to get stream status.');
			status = undefined;
			return;
		}

		const json = await response.json();
		status = json;
	});
</script>

{#if status && status.isLive}
	<div
		class="flex items-center gap-[0.15rem] rounded-2xl border-2 border-accent px-2 pt-1 decoration-transparent"
	>
		<i class="bx bxs-circle text-accent" /> LIVE (<i class="bx bxs-user" />
		{status.viewerCount})
	</div>
{/if}
