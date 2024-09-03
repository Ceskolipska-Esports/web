<script lang="ts">
	export let href: string;
	export let target: '_self' | '_blank' = '_self';
	export let active: boolean = false;
</script>

<a
	class="text-inherit underline decoration-outline decoration-2 transition-all duration-150 hover:text-text-color hover:decoration-accent"
	{href}
	{target}
	class:active><slot /></a
>

<style lang="scss" scoped>
	@use '/globals';

	$underline: 0.1rem solid underline;

	.active {
		color: globals.$text-color;
		text-decoration: $underline globals.$accent-color;
	}
</style>
