<script lang="ts">
	import '@fontsource-variable/open-sans';

	import '../app.css';
	import 'boxicons/css/boxicons.min.css';

	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
</script>

<Navbar />
<main class="mt-52 bg-black text-text-color mx-12">
	<slot />
</main>
<Footer />

<style lang="postcss">
	:root {
		@apply text-text-color;

		font-family: 'Open Sans Variable', sans-serif;
		background-color: black;
	}
</style>
