import { test } from "vitest";
import { login, getLiveStatus } from "./twitch";

test("přihlášení k Twitchi", async () => {
    await login();
});

test("zjištění stavu vysílání kanálu", async () => {
    const token = await login();

    await getLiveStatus({ token }); // ceskolipskaesports
    await getLiveStatus({ token, username: "ceskolipskaesports" });
});
