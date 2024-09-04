<script lang="ts">
	export let name: string;
	export let tournamentName: string;
	export let memberCount: number;
</script>

<div
	class="tournament col-span-3 grid h-20 grid-cols-3 rounded-2xl border-2 border-outline bg-background-button p-4 text-xl text-less-important"
>
	<p style="place-self: center start" class="truncate text-nowrap">{tournamentName}</p>
	<p style="place-self: center center" class="">{name}</p>
	<p style="place-self: center end;" class="flex items-center gap-1">
		{memberCount} <i class="bx bx-user" />
	</p>
</div>
