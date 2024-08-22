<script lang="ts">
	export let href: string;

	export let target: '_blank' | '_self' = '_self';
</script>

<a {href} {target}><slot /></a>

<style lang="scss" scoped>
	@use '/globals';

	a {
		display: flex;
		align-items: center;
		gap: 1rem;

		color: globals.$less-important-text-color;
		font-size: 1.3rem;
		transition: all ease 100ms;
		text-decoration: underline 0.1rem transparent;

		/* used conditionally */
		&:hover {
			color: white;
			text-decoration: underline 0.1rem globals.$accent-color;
		}
	}
</style>
