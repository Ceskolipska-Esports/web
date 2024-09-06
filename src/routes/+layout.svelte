<script lang="ts">
	import '@fontsource-variable/open-sans';

	import '../app.css';
	import 'boxicons/css/boxicons.min.css';

	import Navbar from './navbar/Navbar.svelte';
	import Footer from './Footer.svelte';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import CookieConsentBanner from './CookieConsentBanner.svelte';

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
<main class="mt-52 bg-black text-text-color">
	<slot />
</main>
<CookieConsentBanner cookie={data.cookieConsent} />
<Footer />

<style lang="postcss">
	:root {
		@apply text-text-color;

		font-family: 'Open Sans Variable', sans-serif;
		background-color: black;
	}
</style>
