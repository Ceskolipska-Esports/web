<script lang="ts">
	export let src: string;
	export let height: number;
	export let width: number = height;
	export let id: string | undefined = undefined;
</script>

<img class="rounded-full border-black" {id} {src} {height} {width} alt="avatar" />
