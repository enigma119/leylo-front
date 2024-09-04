// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database>,
			session: Session | null,
			user: User | null,
			safeGetSession: () => Promise<{ session: Session | null, user: User | null }>
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
