import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const timerStart: Writable<boolean> = writable(false);