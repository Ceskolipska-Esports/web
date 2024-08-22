<script lang="ts">
	import '@fontsource-variable/open-sans';

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

<svelte:head>
	<link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@ceskolipska" />
	<meta property="og:title" content="Českolipská Esports" />
	<meta property="og:url" content="https://ceskolipskaesports.cz" />
	<meta property="og:image" content="/favicon.png" />
</svelte:head>

<Navbar {data} />
<main>
	<slot />
</main>
<Footer />

<style lang="scss">
	@use '/globals';

	:root {
		font-family: 'Open Sans Variable', sans-serif;

		background-color: black;
		color: globals.$text-color;
		padding: globals.$padding;
	}
</style>
