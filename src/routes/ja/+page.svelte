<script lang="ts">
	import PageMetadataHelper from '$lib/components/PageMetadataHelper.svelte';
	import Title from '$lib/components/Title.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	
	export let data;

	const creationDate = new Date(data.user.created_at).toLocaleDateString();
	const avatar = data.user.user_metadata.avatar_url;
</script>

<PageMetadataHelper title="Váš profil" description="Váš profil na Českolipská Esports" />

<Title>Váš profil</Title>

<div id="profile-picture-and-info">
	<!-- TODO: this fixed height is probably a bad idea -->
	<Avatar id="avatar" src={avatar} height="100px" />
	<hr />
	<p id="basic-info">
		<span id="nick">nick</span><br />
		<span id="username"><i>(@{data.user?.user_metadata.global_name ?? data.user.user_metadata.full_name})</i></span><br />
		<span id="registration-date">Registrace: {creationDate}</span>
	</p>
</div>

<div id="statistics">
	<div class="stat-showcase" id="tournament-wins">
		<i class="bx bx-trophy" />
		<!-- TODO: add fetching of this -->
		<b>{data.stats.tournaments_won}</b>
		<span class="subtext">Vítězství</span>
	</div>
	<hr />
	<div class="stat-showcase" id="tournaments-participated-in">
		<i class="bx bx-play-circle" />
		<b>{data.stats.tournaments_participated_in}</b>
		<span class="subtext">Turnajů</span>
	</div>
</div>

<style lang="scss">
	@use "/globals";

	#profile-picture-and-info {
		display: flex;
		gap: 3rem;

		align-content: center;
		vertical-align: middle;
	}

	#basic-info {
		text-align: center;

		#nick {
			font-size: 1.8em;
		}
		#username {
			color: globals.$less-important-text-color;
		}
	}

	#statistics {
		display: flex;
	}

	.stat-showcase {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		text-align: center;
		font-size: 1.5rem;
		padding: 0 2rem;

		.bx {
			font-size: 3rem;
			filter: drop-shadow(3px 3px 0.2rem globals.$accent-color);
		}

		.subtext {
			color: globals.$less-important-text-color;
			font-size: 1.3rem;
		}
	}

	hr {
		border-color: globals.$subtle-outline;
	}
</style>
