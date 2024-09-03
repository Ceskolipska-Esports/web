<script lang="ts">
	import { page } from '$app/stores';
	import Title from '$lib/components/Title.svelte';

	const copyText = async () => {
		await navigator.clipboard.writeText(
			`Kód chyby: ${$page.status}\nText chyby: ${$page.error?.message}`
		);
	};
</script>

<Title>Něco se pokazilo!</Title>

<main class="prose mx-auto flex flex-col items-center gap-10 text-less-important">
	<p>
		Kód chyby: {$page.status}<br />
		Text chyby: <code class="text-less-important">{$page.error?.message ?? '<prázdné>'}</code>
	</p>

	<button
		class="w-fit rounded-2xl border border-outline bg-background-button p-2 transition-all duration-150 hover:scale-105"
		on:click={copyText}>Zkopírovat diagnostické informace</button
	>
	<p class="hidden">Zkopírováno!</p>
</main>
