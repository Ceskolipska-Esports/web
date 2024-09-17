<script lang="ts">
	export let placeholder: string = "";
	export let id: string;
	export let type: string = "text";
	export let value: string = "";
	export let name: string = id;
	export let required: boolean = false;
</script>

<input class="p-2 text-text-color border border-outline w-full rounded bg-background-button focus:ring-2 focus:ring-accent focus:outline-none" {id} {name} {type} {placeholder} {value} {required}/>
