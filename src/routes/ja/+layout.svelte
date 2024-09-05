<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import { page } from '$app/stores';
</script>

<div id="main" class="grid grid-cols-4 gap-20">
	<Sidebar>
		<Link href="/ja" active={$page.url.pathname === '/ja'}>Profil</Link>
		<Link href="/ja/tymy" active={$page.url.pathname === '/ja/tymy'}>Týmy</Link>
		<Link href="/ja/propojeni" active={$page.url.pathname === '/ja/propojeni'}>Propojení</Link>
	</Sidebar>
	<main id="content" class="col-span-3 flex flex-col items-center gap-12">
		<slot />
	</main>
</div>
