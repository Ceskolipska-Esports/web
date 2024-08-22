<script lang="ts">
	export let src: string;
	export let height: string;
	export let id: string | undefined = undefined;
</script>

<img {id} {src} {height} alt="avatar" />

<style lang="scss" scoped>
	img {
		border-radius: 100%;
	}
</style>
