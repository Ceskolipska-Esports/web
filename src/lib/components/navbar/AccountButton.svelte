<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
	import type { User } from '@supabase/supabase-js';

	export let user: User | null;

	const getName = (user: User) => {
		return user.user_metadata.custom_claims.global_name ?? user.user_metadata.full_name;
	};
</script>

{#if user}
	<div class="flex gap-8">
		<NavbarLink href="/auth/logout">Odhlásit se</NavbarLink>
		<NavbarLink href="/ja">
			<img class="h-12 rounded-full border-black hover:h-[3.3rem] transition-all ease duration-150" src={user.user_metadata.avatar_url} alt="avatar" />
		</NavbarLink>
	</div>
{:else}
	<NavbarLink href="/auth/login">Přihlásit se</NavbarLink>
{/if}
