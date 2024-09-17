<script lang="ts">
	import globals from '$lib/globals';
</script>

<nav
	class="fixed left-0 top-0 z-20 flex w-screen content-center items-center justify-between gap-12 border-b border-b-outline bg-black p-6 align-middle text-3xl md:text-4xl"
>
	<a
		class="flex transform-gpu items-center text-less-important decoration-transparent transition duration-100 ease-linear hover:scale-110 hover:text-white"
		href="/"><i class="bx bx-home" /></a
	>
	<div class="flex h-8 items-center gap-8">
		<a
			class="flex transform-gpu items-center text-less-important decoration-transparent transition duration-100 ease-linear hover:scale-110 hover:text-[rgb(100_65_164)]"
			href={globals.twitch}
			target="_blank"><i class="bx bxl-twitch" /></a
		>
		<a
			class="flex transform-gpu items-center text-less-important decoration-transparent transition duration-100 ease-linear hover:scale-110 hover:text-[rgb(88_101_242)]"
			href={globals.discordInvite}
			target="_blank"><i class="bx bxl-discord-alt" /></a
		>
		<a
			class="flex transform-gpu items-center text-less-important decoration-transparent transition duration-100 ease-linear hover:scale-110 hover:text-[rgb(29_155_240)]"
			href={globals.twitter}
			target="_blank"><i class="bx bxl-twitter" /></a
		>
		<a
			class="flex transform-gpu items-center text-less-important decoration-transparent transition duration-100 ease-linear hover:scale-110 hover:text-[rgb(255_48_108)]"
			href={globals.instagram}
			target="_blank"><i class="bx bxl-instagram" /></a
		>
	</div>
</nav>
