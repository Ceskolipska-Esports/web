<script lang="ts">
	import '@fontsource-variable/open-sans';

	import '../app.css';
	import "boxicons/css/boxicons.min.css";

	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Navbar {data} />
<main class="mt-28 text-text-color bg-black">
	<slot />
</main>
<Footer />

<style>
	:root {
		@apply text-text-color;

		font-family: 'Open Sans Variable', sans-serif;
		background-color: black;
	}
</style>
