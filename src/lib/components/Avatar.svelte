<script lang="ts">
	export let src: string;
	export let height: string;
	export let id: string | undefined = undefined;
</script>

<img class="rounded-full" {id} {src} {height} alt="avatar" />
