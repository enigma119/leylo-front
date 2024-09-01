import { writable } from "svelte/store";

export const dialogStore = writable({
  signIn: false,
  signUp: false,
});