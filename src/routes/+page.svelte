<script lang="ts">
	import HomepageButton from '$lib/components/HomepageButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
</script>

<PageMetadataHelper description="E-sportová organizace Českolipská Esports" />

<h1 class="text-8xl my-32 text-center text-less-important">
	Chceš se stát <b><u class="text-white underline decoration-accent decoration-4 drop-shadow-[0_0_3px_white]">šampionem</u></b>?
</h1>
<div class="flex flex-col justify-center gap-12">
	<p class="prose prose-stone text-text-color mx-auto">
		Jsme skupina několika studentů <Link href="https://ceskolipska.cz" target="_blank"
			>Gymnázia Českolipská</Link
		>, která pořádá turnaje nejen v počítačových hrách. Mezi hry, ve kterých turnaje pořádáme, patří
		například League of Legends a VALORANT, a seznam her se pořád rozrůstá.
	</p>
	<div class="flex justify-center gap-8">
		<HomepageButton href="/turnaje" primary>Zobrazit turnaje</HomepageButton>
		<HomepageButton href="/ja">Přejít na profil</HomepageButton>
	</div>
</div>
