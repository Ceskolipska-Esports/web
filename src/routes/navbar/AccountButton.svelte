<script lang="ts">
	import NavbarLink from './NavbarLink.svelte';
	import type { User } from '@supabase/supabase-js';
	import Avatar from '$lib/components/Avatar.svelte';

	let avatarHeight: number = 50;

	export let user: User | null;
</script>

{#if user}
	<div class="flex gap-8">
		<NavbarLink href="/auth/logout">
			<i class="bx bx-log-out text-3xl" />
		</NavbarLink>
		<NavbarLink href="/ja">
			<Avatar src={user.user_metadata.avatar_url} height={avatarHeight} />
		</NavbarLink>
	</div>
{:else}
	<NavbarLink href="/auth/login">
		<i class="bx bx-log-in text-3xl" />
	</NavbarLink>
{/if}
