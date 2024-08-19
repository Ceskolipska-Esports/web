<script lang="ts">
	import type { Tournament } from '$lib/tournament';

	export let data: Tournament;
	export let id: number;

	const getFormattedTime = (date?: Date) => {
		if (!date) return '?';

		const d = new Date(date);
		return `${d.getHours()}:${d.getMinutes()}`;
	};

	let formattedDate: string = data.start ? new Date(data.start).toLocaleDateString('cs-CZ') : '?';
	let formattedTime: string = getFormattedTime(data.start);

	let dateHovered: boolean = false;
</script>

<div
	id={`tournament-view-${id}`}
	class="tournament-view"
	on:mouseenter={() => (dateHovered = true)}
	on:mouseleave={() => (dateHovered = false)}
	role="region"
>
	<div class="tournament-view-left">
		<div class="date-text">
			{dateHovered ? formattedTime : formattedDate}
		</div>
	</div>
	<div class="tournament-view-center">
		{data.name}
	</div>
	<div class="tournament-view-right">
		placeholder
		<!-- TODO: add code that fetches the game icon from our storage -->
	</div>
</div>

<style lang="scss" scoped>
	$font-size: 1.5rem;
	$less-important-text-color: rgb(190, 190, 190);

	#tournament-view-1 {
		scale: 100%;

		border: 0.2rem solid var(--accent-color);
		background-color: rgb(35, 35, 35);

		margin-bottom: 5rem;
		width: 100%;
	}

	.tournament-view {
		scale: 90%;

		width: 100%;
		color: $less-important-text-color;

		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;

		background-color: rgb(25, 25, 25);
		border-radius: 0.8rem;
		vertical-align: center;

		padding: 2.3rem;

		transition: all 0.2s ease-in-out;
	}

	.tournament-view-left {
		text-align: left;
	}

	.tournament-view-center {
		text-align: center;
		color: white;
		font-size: calc($font-size * 1.2);
	}

	.tournament-view-right {
		text-align: right;
	}
</style>
