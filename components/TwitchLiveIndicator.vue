<script setup lang="ts">
const { data: live, error } = useFetch("/api/get-twitch-status", {
    lazy: true,
});

if (error.value !== null) {
    console.warn("Twitch API je nedostupné");
}
</script>

<template>
    <div
        v-if="live"
        class="flex items-center gap-2 rounded-lg border-2 border-red-800 p-1 align-middle"
    >
        <Icon name="fluent:live-24-regular" style="color: red" />
        <b>LIVE</b>
    </div>
</template>
