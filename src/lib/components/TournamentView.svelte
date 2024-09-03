<script lang="ts">
	export let tournament;
	export let id: number;

	const getFormattedTime = (date?: string) => {
		if (!date) return '?';

		const d = new Date(date);
		return `${d.getHours()}:${d.getMinutes()}`;
	};

	let formattedDate: string = tournament.start
		? new Date(tournament.start).toLocaleDateString('cs-CZ')
		: '?';
	let formattedTime: string = getFormattedTime(tournament.start);

	let dateHovered: boolean = false;
</script>

<div
	id={`tournament-view-${id}`}
	class="grid w-max scale-90 grid-cols-3 grid-rows-1 rounded-2xl bg-background-button p-9 align-middle text-2xl text-less-important transition-all duration-150"
	on:mouseenter={() => (dateHovered = true)}
	on:mouseleave={() => (dateHovered = false)}
	role="region"
>
	<div class="text-left" style="place-self: center start;">
		<div>
			{dateHovered ? formattedTime : formattedDate}
		</div>
	</div>
	<div class="text-center text-3xl text-text-color">
		{tournament.name}
	</div>
	<div class="text-right" style="place-self: center end">
		placeholder
		<!-- TODO: add code that fetches the game icon from our storage -->
	</div>
</div>

<style lang="scss" scoped>
	@use '/globals';

	#tournament-view-1 {
		scale: 100%;

		border: 0.2rem solid globals.$accent-color;
		background-color: rgb(35, 35, 35);

		margin-bottom: 5rem;
		width: 100%;
	}
</style>
