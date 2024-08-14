import { writable, type Writable } from 'svelte/store';
import type { StreamStatus } from './twitch/stream';

export const streamStatus: Writable<StreamStatus> = writable({ isLive: false, viewerCount: 0 });
