import NodeFetchCache, { MemoryCache } from "node-fetch-cache";

const fetch = NodeFetchCache.create({
    cache: new MemoryCache({ ttl: 1000 * 60 * 3 }), // 3 minuty
    shouldCacheResponse: (response) => response.ok,
});

/* Funkce k přihlášení k Twitchi. Vrací OAuth token.
 *
 * Sleduje tento dokument: `https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow`
 */
export const login = async (): Promise<string> => {
    type Response = {
        access_token: string;
    };

    const clientID = process.env.TWITCH_CLIENT_ID!;
    const clientSecret = process.env.TWITCH_CLIENT_SECRET!;
    const grantType = "client_credentials";

    const url = `https://id.twitch.tv/oauth2/token?client_id=${clientID}&client_secret=${clientSecret}&grant_type=${grantType}`;

    const res = await fetch(url, {
        method: "POST",
    });

    if (!res.ok) {
        throw new Error("Nelze se přihlásit k Twitchi");
    }

    return ((await res.json()) as Response).access_token;
};

/* Získá status vysílání daného kanálu. Pokud není funkci dodáno jméno, získá stav
 * vysílání kanálu `ceskolipskaesports`.
 */
export const getLiveStatus = async ({
    token,
    username,
}: {
    token: string;
    username?: string;
}): Promise<boolean> => {
    type Response = {
        data: [];
    };

    const res = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${username ?? "ceskolipskaesports"}&type=live`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Client-Id": process.env.TWITCH_CLIENT_ID!,
            },
        },
    );

    if (!res.ok) {
        throw new Error(
            `Chyba s požadavkem: ${res.statusText}, ${await res.text()}`,
        );
    }

    const json = (await res.json()) as Response;
    return json.data.length > 0;
};
