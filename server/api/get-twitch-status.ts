import { getLiveStatus, login } from "~/utils/twitch";

export default defineEventHandler(async () => {
    const token = await login();
    const status = await getLiveStatus({ token });

    return Response.json(status);
});
