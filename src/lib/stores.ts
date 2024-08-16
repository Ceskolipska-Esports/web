import { writable, type Writable } from "svelte/store";
import type { AccessTokenWrapper } from "./server/twitch/token";
import type { StreamStatusWrapper } from "./server/twitch/stream";

export const accessToken: Writable<AccessTokenWrapper> = writable(undefined);
export const streamStatus: Writable<StreamStatusWrapper> = writable(undefined);
