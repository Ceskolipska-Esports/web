<script setup lang="ts">
import { login, getLiveStatus } from "~/utils/twitch";

const token = await login();
const status = await getLiveStatus({ token });
</script>

<template>
    <div
        class="flex items-center gap-2 rounded-lg border-2 border-red-800 p-1 align-middle"
        v-if="status"
    >
        <Icon name="fluent:live-24-regular" style="color: red" />
        <b>LIVE</b>
    </div>
</template>
