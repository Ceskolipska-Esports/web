<script lang="ts">
	export let href: string;
	export let target: '_self' | '_blank' = '_self';
	export let active: boolean = false;
</script>

<a {href} {target} class:active><slot /></a>

<style lang="scss" scoped>
	@use '/globals';

	$underline: 0.1rem solid underline;

	a {
		color: inherit;
		text-decoration: $underline gray;
		transition: globals.$transition;
		font-size: inherit;

		&:hover {
			color: globals.$text-color;
			text-decoration: $underline globals.$accent-color;
		}

	}

	.active {
		color: globals.$text-color;
		text-decoration: $underline globals.$accent-color;
	}
</style>
