<script lang="ts">
	import '../app.css';
	import AuthDialogs from '$lib/components/auth/AuthDialogs.svelte';
	import { ClientNav } from '$lib/components/nav';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Session, SupabaseClient } from '@supabase/supabase-js';


	interface LayoutData {
		session: Session | null;
		supabase: SupabaseClient;
	}

	export let data: LayoutData;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex min-h-screen flex-col">
	<ClientNav></ClientNav>
	<AuthDialogs />

	<main>
		<slot></slot>
	</main>
</div>
