<script setup lang="ts">
import { Icon } from "#components";

const props = defineProps<{
    href: string;
    icon: string;
    iconcolor: string;
}>();

const ComputedIcon = h(Icon, {
    name: props.icon,
    size: "30px",
    style: `color: ${props.iconcolor}`,
});
</script>

<template>
    <NuxtLink
        :href="props.href"
        class="flex w-fit items-center gap-2 text-nowrap py-4 align-middle decoration-[#ee0000] decoration-2 underline-offset-2 hover:underline"
        ><ComputedIcon /><slot
    /></NuxtLink>
</template>
