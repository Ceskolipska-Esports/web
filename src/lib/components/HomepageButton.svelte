<script lang="ts">
	export let href: string;
	export let primary: boolean = false;
</script>

<a {href} class:primary><slot /> <i class="bx bx-chevron-right" /></a>

<style lang="scss">
	@use '/globals';

	a {
		color: white;
		padding: 0.7rem;
		background-color: globals.$button-background-color;
		text-decoration: none;

		border: 0.1rem gray solid;
		border-radius: 1rem;

		display: flex;
		align-items: center;
		gap: 0.5rem;

		transition: globals.$transition;

		&:hover {
			scale: 105%;
			filter: drop-shadow(0 0 0.5rem globals.$accent-color);
		}
	}

	.bx {
		font-size: 1.5em;
	}

	.primary {
		background-color: globals.$accent-color;
	}
</style>
