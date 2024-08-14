<script lang="ts">
	export let href: string;
</script>

<a {href} target="_blank"><slot /></a>

<style lang="scss" scoped>
	a {
		color: var(--text-color);
		text-decoration: transparent 0.1rem solid underline;
		transition: all 100ms ease-in-out;

		&:hover {
			text-decoration: var(--accent-color) 0.1rem solid underline;
			color: white;
		}
	}
</style>
