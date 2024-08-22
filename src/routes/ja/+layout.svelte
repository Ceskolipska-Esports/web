<script lang="ts">
	import Link from "$lib/components/Link.svelte";
	import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
	import { page } from "$app/stores";
</script>

<div id="main">
	<Sidebar>
		<Link href="/ja" active={$page.url.pathname === "/ja"}>Profil</Link>
		<Link href="/ja/tymy" active={$page.url.pathname === "/ja/tymy"}>Týmy</Link>
		<Link href="/ja/propojeni" active={$page.url.pathname === "/ja/propojeni"}>Propojení</Link>
	</Sidebar>
	<div id="content"><slot/></div>
</div>

<style lang="scss" scoped>
	#main {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 5rem;
	}

	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
</style>
