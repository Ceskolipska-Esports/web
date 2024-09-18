<script lang="ts">
	import '@fontsource-variable/open-sans';

	import '../app.css';
	import 'boxicons/css/boxicons.min.css';

	import Navbar from './Navbar.svelte';
</script>

<Navbar />
<main class="mx-12 my-26 md:my-52 bg-black text-text-color">
	<slot />
</main>

<style lang="postcss">
	:root {
		@apply text-text-color;

		font-family: 'Open Sans Variable', sans-serif;
		background-color: black;
	}
</style>
