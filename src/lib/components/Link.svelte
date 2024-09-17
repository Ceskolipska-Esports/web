<script lang="ts">
	export let href: string;
	export let target: '_self' | '_blank' = '_self';
</script>

<a
	class="text-inherit underline decoration-outline decoration-2 transition-all duration-150 hover:text-text-color hover:decoration-accent"
	{href}
	{target}
>
	<slot />
</a>

