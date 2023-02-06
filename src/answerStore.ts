import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const answer:Writable<number> = writable(-3);