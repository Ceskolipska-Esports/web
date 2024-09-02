<script lang="ts">
	import PageMetadataHelper from "$lib/components/PageMetadataHelper.svelte";
	import Title from "$lib/components/Title.svelte";
	import Link from "$lib/components/Link.svelte";
	import { page } from "$app/stores";

	export let data;
</script>

<PageMetadataHelper description="Vaše týmy na Českolipská Esports" title="Týmy" />

<Title>Týmy</Title>
<div id="container">
	<div/>
	<div id="controls">
		<Link href="/ja/tymy" active={$page.url.pathname === "/ja/tymy"}>Moje</Link>
		<Link href="/ja/tymy/vsechny" active={$page.url.pathname === "/ja/tymy/vsechny"}>Všechny</Link>
	</div>
	<div id="labels">
		<p style="place-self: center start;">Hra</p>
		<p style="place-self: center center;">Název týmu</p>
		<p style="place-self: center end;">Počet členů</p>
	</div>
	<slot />
</div>

<style lang="scss">
	@use '/globals';

	#controls {
		display: flex;
		gap: 0.8rem;
		text-align: center;
		color: globals.$less-important-text-color;
		place-self: center center;

		font-size: 1.2rem;
	}
	
	#container {
		display: grid;
		width: 100%;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	#labels {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 0 1rem;
		grid-column: span 3 / span 3;
		color: globals.$less-important-text-color;

		border-bottom: 0.1rem solid globals.$subtle-outline;
	}
</style>
