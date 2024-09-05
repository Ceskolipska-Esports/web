<script lang="ts">
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
	import Title from '$lib/components/Title.svelte';
	import Link from '$lib/components/Link.svelte';
	import { page } from '$app/stores';
</script>

<PageMetadataHelper description="Vaše týmy na Českolipská Esports" title="Týmy" />

<Title>Týmy</Title>
<div class="grid grid-cols-3 gap-4">
	<div />
	<div id="controls" class="flex gap-3 place-self-center text-center text-xl text-less-important">
		<Link href="/ja/tymy" active={$page.url.pathname === '/ja/tymy'}>Moje</Link>
		<Link href="/ja/tymy/vsechny" active={$page.url.pathname === '/ja/tymy/vsechny'}>Všechny</Link>
	</div>
	<div
		id="labels"
		class="col-span-3 mx-4 grid grid-cols-3 border-b border-b-outline text-less-important"
	>
		<p style="place-self: center start;">Turnaj</p>
		<p class="place-self-center">Název týmu</p>
		<p style="place-self: center end;">Počet členů</p>
	</div>
	<slot />
</div>
