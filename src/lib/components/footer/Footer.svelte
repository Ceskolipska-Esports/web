<script>
	import FooterLink from './FooterLink.svelte';
</script>

<footer>
	Vytvořeno pomocí Svelte.
	<FooterLink href="https://github.com/Ceskolipska-Esports/web">Zdrojový kód</FooterLink>
</footer>

<style lang="scss" scoped>
	footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: var(--global-padding);
	}
</style>
