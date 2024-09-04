<script lang="ts">
	export let href: string;

	export let target: '_blank' | '_self' = '_self';
</script>

<a
	class="flex transform-gpu items-center gap-4 text-[1.3rem] text-less-important decoration-transparent transition duration-100 ease-linear hover:scale-110 hover:text-white"
	{href}
	{target}><slot /></a
>
