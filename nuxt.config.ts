import { defineNuxtConfig } from "nuxt/config";

(await import("dotenv")).config();

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",

    nitro: {
        preset: "cloudflare_pages",
    },

    app: {
        head: {
            title: "Českolipská Esports",
            link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
        },
    },

    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/test-utils/module",
        "@nuxt/eslint",
        "@nuxt/devtools",
        "@nuxt/image",
    ],

    eslint: {
        checker: true,
    },
});

