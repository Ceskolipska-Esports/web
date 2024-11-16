<script setup lang="ts">
import { Icon } from "#components";

const {
    href,
    icon,
    iconcolor,
    target = "_self",
} = defineProps<{
    href: string;
    icon: string;
    iconcolor: string;
    target?: string;
}>();

const ComputedIcon = h(Icon, {
    name: icon,
    size: "30px",
    style: `color: ${iconcolor}`,
});
</script>

<template>
    <NuxtLink
        :target
        :href
        class="flex w-fit items-center gap-2 text-nowrap py-4 align-middle decoration-[#ee0000] decoration-2 underline-offset-2 hover:underline"
        ><ComputedIcon /><slot
    /></NuxtLink>
</template>
