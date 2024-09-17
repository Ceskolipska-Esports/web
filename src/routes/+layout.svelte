<script lang="ts">
	import '@fontsource-variable/open-sans';

	import '../app.css';
	import 'boxicons/css/boxicons.min.css';

	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
</script>

<Navbar />
<main class="mx-12 mt-52">
	<slot />
</main>
<Footer />

