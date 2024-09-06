<script lang="ts">
	export let cookie: string | undefined;

	const accept = async (level: 'required') => {
		document.getElementById('cookie-banner')?.remove();
		await fetch(`/api/cookies/accept?level=${level}`, { method: 'POST' });
	};
</script>

{#if !cookie}
	<div
		class="fixed bottom-12 left-1/2 flex h-fit w-fit -translate-x-1/2 flex-col place-items-center gap-2 rounded border border-outline bg-background-button p-4"
		id="cookie-banner"
	>
		<p class="prose text-text-color">
			Náš web používá cookies ke správnému fungování. Nesledujeme Vás, ani neprodáváme Vaše data.
			Toť vše.
		</p>
		<button
			on:click={() => accept('required')}
			class="rounded border border-outline p-1 px-2 transition-transform duration-100 hover:scale-105 hover:border-white"
			>Souhlasím</button
		>
	</div>
{/if}
