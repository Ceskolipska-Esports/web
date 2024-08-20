<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
	import type { User } from '@supabase/supabase-js';

	export let user: User | null;

	const getName = (user: User) => {
		return user.user_metadata.custom_claims.global_name ?? user.user_metadata.full_name;
	};
</script>

{#if user}
	<div id="container">
		<NavbarLink href="/auth/logout">Odhlásit se</NavbarLink>
		<NavbarLink href="/ja">
			<img id="avatar" src={user.user_metadata.avatar_url} alt="avatar" />
		</NavbarLink>
	</div>
{:else}
	<NavbarLink href="/auth/login">Přihlásit se</NavbarLink>
{/if}

<style lang="scss" scoped>
	#container {
		display: flex;
		gap: 2rem;
	}

	#avatar {
		$height: 3rem;

		border: 1rem black solid inset;
		border-radius: 100%;
		height: $height;
		transition: all ease-in-out 125ms;

		&:hover {
			height: calc($height * 1.1);
		}
	}
</style>
