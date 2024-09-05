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
		<NavbarLink href="/auth/logout">
			<i class="bx bx-log-out text-3xl" />
		</NavbarLink>
		<NavbarLink href="/ja">
			<img
				class="ease h-12 rounded-full border-black transition-all duration-150 hover:h-[3.3rem]"
				src={user.user_metadata.avatar_url}
				alt="avatar"
			/>
		</NavbarLink>
	</div>
{:else}
	<NavbarLink href="/auth/login">
		<i class="bx bx-log-in text-3xl" />
	</NavbarLink>
{/if}
