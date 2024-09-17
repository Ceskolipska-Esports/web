<script lang="ts">
	export let title: string = "Českolipská Esports";
	export let type: string;
	export let url: string;
	export let image: string = "icons/favicon.png";
	export let locale: string = "cs_CZ";
	export let description: string | undefined = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content="Českolipská Esports" />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />
	<meta property="og:locale" content={locale} />

	{#if description}
	<meta property="og:description" content={description} />
	<meta name="description" content={description} />
	{/if}
</svelte:head>
