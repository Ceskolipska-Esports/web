<script>
	import Link from '../Link.svelte';
</script>

<footer>
	Vytvořeno pomocí Svelte.
	<Link href="https://github.com/Ceskolipska-Esports/web">Zdrojový kód</Link>
</footer>

<style lang="scss" scoped>
	@use '/globals';

	footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: globals.$padding;

		color: globals.$less-important-text-color;
	}
</style>
