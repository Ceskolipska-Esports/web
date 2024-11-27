<template>
    <main
        class="flex h-svh w-screen flex-col justify-evenly md:grid md:grid-cols-2
            md:grid-rows-1 md:items-center"
    >
        <!-- first column -->
        <div
            class="flex flex-col justify-evenly text-center items-center align-center gap-4"
        >
            <NuxtImg src="favicon.png" sizes="100px md:170px" />
            <p>
                <span class="text-3xl text-gray-400 md:text-5xl"
                    >Českolipská</span
                ><br />
                <span
                    class="text-6xl font-bold drop-shadow-[7px_7px_6px_#ee0000] md:text-8xl tracking-wide"
                    >Esports</span
                >
            </p>
        </div>

        <!-- second column -->
        <div class="mx-auto flex flex-col justify-evenly gap-3 md:mx-16">
            <HomepageLink
                href="turnaje"
                icon="material-symbols:trophy"
                iconcolor="#ee0000"
            >
                Turnaje</HomepageLink
            >
            <HomepageLink
                href="discord"
                target="_blank"
                icon="ic:baseline-discord"
                iconcolor="#5865f2"
            >
                Přejít na Discord server</HomepageLink
            >
            <HomepageLink
                href="twitch"
                icon="mdi:twitch"
                iconcolor="#9146ff"
                target="_blank"
            >
                Sledovat na Twitchi <TwitchLiveIndicator
            /></HomepageLink>
        </div>
    </main>
</template>

<style scoped>
main {
    position: relative;
}

@media only screen and (min-width: 768px) {
    main::before {
        --special-gray: #19171c;

        content: "";
        position: absolute;
        top: 10%;
        left: 50%;
        width: 1px;
        height: 80%;
        background-color: var(--special-gray);
    }
}
</style>
