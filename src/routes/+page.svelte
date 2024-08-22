<script lang="ts">
	import HomepageButton from '$lib/components/HomepageButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
</script>

<PageMetadataHelper description="E-sportová organizace Českolipská Esports" />

<h1 id="main-title">
	Chceš se stát <b><u id="champ">šampionem</u></b>?
</h1>
<div id="main-content" class="text-passage">
	<p>
		Jsme skupina několika studentů <Link href="https://ceskolipska.cz" target="_blank"
			>Gymnázia Českolipská</Link
		>, která pořádá turnaje nejen v počítačových hrách. Mezi hry, ve kterých turnaje pořádáme, patří
		například League of Legends a VALORANT, a seznam her se pořád rozrůstá.
	</p>
	<div id="button-container">
		<HomepageButton href="/turnaje" primary>Zobrazit turnaje</HomepageButton>
		<HomepageButton href="/ja">Přejít na profil</HomepageButton>
	</div>
</div>

<style lang="scss" scoped>
	@use '/globals';

	#main-title {
		font-size: 5rem;
		margin-top: 8rem;
		margin-bottom: 8rem;
		text-align: center;
		font-weight: 400;
		color: globals.$less-important-text-color;
	}

	#champ {
		color: white;
		font-size: 5rem;
		text-decoration: underline globals.$accent-color 0.4rem;
		text-shadow: 0px 0px 5px white;
	}

	#button-container {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	.text-passage {
		max-width: 50%;
		margin: 0 auto;
	}

	#main-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}
</style>
