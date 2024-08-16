<svelte:head>
	<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</svelte:head>

<script lang="ts">
	import '@fontsource-variable/open-sans';

	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>

<Navbar />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	:global(*) {
		--text-color: rgb(240, 240, 240);
		--navbar-text-color: rgb(190, 190, 190);
		--accent-color: #ee0000;
		--global-padding: 2rem;
	}

	:root {
		font-family: 'Open Sans Variable', sans-serif;

		background-color: black;
		color: var(--text-color);
		padding: var(--global-padding);
	}
</style>
