<script lang="ts">
	import Title from '$lib/components/Title.svelte';

	export let data;

	const getFormattedDate = (date: string): string => {
		const newDate = new Date(date);

		return newDate.toLocaleString();
	};
</script>

<main class="mx-auto flex w-fit flex-col items-center gap-4">
<Title>{data.name}</Title>
	<div
		class="text-md align-center mx-auto my-8 flex w-fit items-center justify-center gap-4 text-less-important"
	>
		{#if data.start}
			<div>
				<i class="bx bx-play-circle text-lg" />
				{getFormattedDate(data.start)}
			</div>
		{/if}

		{#if data.end}
			<div>
				<i class="bx bx-stop-circle text-lg" />
				{getFormattedDate(data.end)}
			</div>
		{/if}

		{#if data.prize}
			<div>
				<i class="bx bx-coin-stack text-lg" />
				{data.prize}
			</div>
		{/if}
	</div>

	<p class="prose w-full text-text-color">{@html data.article}</p>
</main>
