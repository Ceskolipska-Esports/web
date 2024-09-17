<script lang="ts">
	import '../app.css';

	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
</script>

<Navbar />
<main class="mx-12 mt-52 bg-black text-text-color">
	<slot />
</main>
<Footer />
