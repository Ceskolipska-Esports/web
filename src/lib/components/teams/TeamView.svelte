<script lang="ts">
	export let gameName: string;
	export let name: string;
	export let memberCount: number;
</script>

<div class="tournament">
	<p class="start">{gameName}</p>
	<p class="middle">{name}</p>
	<p class="end">{memberCount}</p>
</div>

<style lang="scss" scoped>
	@use '/globals';

	.tournament {
		display: grid;
		grid-template-columns: repeat(3, 1fr);

		background-color: globals.$button-background-color;
		padding: 1rem;

		border: 0.1rem solid globals.$subtle-outline;
		border-radius: 1rem;

		grid-column: span 3 / span 3;

		color: globals.$less-important-text-color;
		font-size: 1.2rem;

		.start {
			place-self: center start;
		}

		.middle {
			font-size: 1.5rem;
			place-self: center center;
			color: globals.$text-color;
		}

		.end {
			place-self: center end;
		}
	}
</style>
