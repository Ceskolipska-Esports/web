<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';

	import globals from '$lib/globals';
</script>

<PageMetadataHelper description="E-sportová organizace Českolipská Esports" />
<h1 class="my-32 text-center text-5xl text-less-important sm:text-7xl md:text-8xl">
	Chceš se stát <b
		><u class="text-white underline decoration-accent decoration-4 drop-shadow-[0_0_3px_white]"
			>šampionem</u
		></b
	>?
</h1>
<div class="flex flex-col justify-center gap-12">
	<p class="prose prose-stone mx-auto text-text-color">
		Jsme skupina několika studentů <Link href="https://ceskolipska.cz" target="_blank"
			>Gymnázia Českolipská</Link
		>, která pořádá turnaje nejen v počítačových hrách. Mezi hry, ve kterých turnaje pořádáme, patří
		například League of Legends a VALORANT, a seznam her se pořád rozrůstá.
	</p>
	<a
		class="mx-auto flex w-fit items-center gap-2 rounded-2xl border-2 border-outline bg-background-button p-4 text-2xl text-white no-underline transition-all duration-150 hover:scale-105 hover:border-accent hover:drop-shadow-[0_0_0.5rem_theme(colors.accent)]"
		href={globals.discordInvite}>Discord server <i class="bx bx-chevron-right text-2xl" /></a
	>
</div>
