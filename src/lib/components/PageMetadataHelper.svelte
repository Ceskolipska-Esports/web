<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string | undefined = undefined;
	export let description: string;
	export let image: string = '/favicon.png';

	title = title ? `${title} ● Českolipská Esports` : 'Českolipská Esports';
	let url: string | undefined;

	onMount(() => {
		url = window.location.href;
	});
</script>

<svelte:head>
	<title>{title}</title>

	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@ceskolipska" />
	<meta name="twitter:description" content={description} />

	<meta property="description" content={description} />
</svelte:head>
