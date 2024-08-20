<script lang="ts">
	export let href: string;

	export let target: '_blank' | '_self' = '_self';
</script>

<a {href} {target}><slot /></a>

<style lang="scss" scoped>
	a {
		display: flex;
		align-items: center;
		gap: 1rem;

		color: rgb(190, 190, 190);
		font-size: 1.3rem;
		transition: all ease 100ms;
		text-decoration: underline 0.1rem transparent;

		/* used conditionally */
		&:hover {
			color: white;
			text-decoration: underline 0.1rem var(--accent-color);
		}
	}
</style>
