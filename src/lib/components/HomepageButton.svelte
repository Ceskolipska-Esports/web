<script lang="ts">
	export let href: string;
	export let primary: boolean = false;
</script>

<a
	class="flex items-center gap-2 rounded-2xl border-2 border-outline bg-background-button p-2 text-white no-underline transition-all duration-150 hover:scale-105 hover:border-accent hover:drop-shadow-[0_0_0.5rem_theme(colors.accent)]"
	{href}
	class:primary><slot /> <i class="bx bx-chevron-right text-2xl" /></a
>

<style lang="scss">
	@use '/globals';

	.primary {
		background-color: globals.$accent-color;
	}
</style>
