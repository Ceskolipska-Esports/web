<script lang="ts">
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
	import Title from '$lib/components/Title.svelte';
	import Avatar from '$lib/components/Avatar.svelte';

	export let data;

	const creationDate = new Date(data.user.created_at).toLocaleDateString();
	const avatar = data.user.user_metadata.avatar_url;

	let participatedInText: string;
	switch (data.stats.tournaments_participated_in) {
		case 0:
			participatedInText = 'Turnajů';
			break;
		case 1:
			participatedInText = 'Turnaj';
			break;
		case 2:
			participatedInText = 'Turnaje';
			break;
		case 3:
			participatedInText = 'Turnaje';
			break;
		case 4:
			participatedInText = 'Turnaje';
			break;
		default:
			participatedInText = 'Turnajů';
			break;
	}
</script>

<PageMetadataHelper title="Váš profil" description="Váš profil na Českolipská Esports" />

<Title>Váš profil</Title>

<div class="flex content-center gap-12 align-middle">
	<!-- TODO: this fixed height is probably a bad idea -->
	<Avatar id="avatar" src={avatar} height="100px" />
	<hr class="border border-outline h-[100%]" />
	<p class="text-center">
		<span class="text-3xl">nick</span><br />
		<span class="text-less-important"
			><i>(@{data.user?.user_metadata.global_name ?? data.user.user_metadata.full_name})</i></span
		><br />
		<span>Registrace: {creationDate}</span>
	</p>
</div>

<div class="flex">
	<div class="flex flex-col gap-2 px-8 text-center text-2xl">
		<i class="bx bx-trophy text-5xl drop-shadow-[3px_3px_0.2rem_theme(colors.accent)]" />
		<b>{data.stats.tournaments_won}</b>
		<span class="text-xl text-less-important">Vítězství</span>
	</div>
	<hr class="border border-outline h-[100%]" />
	<div class="flex flex-col gap-2 px-8 text-center text-2xl">
		<i class="bx bx-play-circle text-5xl drop-shadow-[3px_3px_0.2rem_theme(colors.accent)]" />
		<b>{data.stats.tournaments_participated_in}</b>
		<span class="text-xl text-less-important"> {participatedInText}</span>
	</div>
</div>
