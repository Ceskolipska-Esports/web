<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import { page } from '$app/stores';
</script>

<div id="main" class="grid gap-20 grid-cols-4">
	<Sidebar>
		<Link href="/ja" active={$page.url.pathname === '/ja'}>Profil</Link>
		<Link href="/ja/tymy" active={$page.url.pathname === '/ja/tymy'}>Týmy</Link>
		<Link href="/ja/propojeni" active={$page.url.pathname === '/ja/propojeni'}>Propojení</Link>
	</Sidebar>
	<main id="content" class="flex flex-col items-center gap-12 col-span-3">
		<slot />
	</main>
</div>
