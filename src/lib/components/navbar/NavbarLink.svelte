<script lang="ts">
	export let href: string;

	export let target: '_blank' | '_self' = '_self';
</script>

<a
	class="flex items-center gap-4 text-[1.3rem] transition underline decoration-2 duration-100 decoration-transparent hover:decoration-accent hover:text-white text-less-important"
	{href}
	{target}><slot /></a
>
