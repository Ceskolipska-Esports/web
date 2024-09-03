<script lang="ts">
	export let gameName: string;
	export let name: string;
	export let memberCount: number;
</script>

<div
	class="tournament grid grid-cols-3 bg-background-button p-4 border-2 border-outline rounded-2xl col-span-3 text-less-important text-xl"
>
	<p style="place-self: center start">{gameName}</p>
	<p style="place-self: center center">{name}</p>
	<p style="place-self: center end;">{memberCount}</p>
</div>
