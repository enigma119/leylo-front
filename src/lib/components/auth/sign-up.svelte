<script lang="ts">
	import { Icons } from "$lib/components/icons";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Label } from "$lib/components/ui/label";
	import { Input } from "$lib/components/ui/input";
	import { supabaseClient } from "@/supabaseClient";
	import type { Provider } from "@supabase/supabase-js";
	import type { SubmitFunction } from "@sveltejs/kit";
	import { enhance } from "$app/forms";

	const singUpWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider,
			options: {
				redirectTo: window.location.origin
			}
		});

		if (error) {
			console.error('Error signing up:', error);
		} else {
			// Handle successful sign-up
			console.log('Signed up successfully:', data);
		}
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		const provider = action.searchParams.get('provider');
		console.log('provider', provider);
		if (provider === 'google' || provider === 'facebook') {
			await singUpWithProvider(provider);
		}
		cancel();
	};
</script>

<Card.Root class="w-full border-none shadow-none p-0">
	<Card.Header class="space-y-1">
		<Card.Title class="text-2xl">Create an account</Card.Title>
		<Card.Description>Enter your email below to create your account</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<form method="POST" use:enhance={submitSocialLogin}>
		<div class="grid grid-cols-2 gap-6">
			<Button variant="outline" on:click={() => singUpWithProvider('google')}>
				<Icons.google class="mr-2 h-4 w-4" />
				Google
			</Button>
			<Button variant="outline" on:click={() => singUpWithProvider('facebook')}>
				<Icons.facebook class="mr-2 h-4 w-4" />
				Facebook
			</Button>
		</div>
		</form>
		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t"></span>
			</div>
			<div class="relative flex justify-center text-xs uppercase">
				<span class="bg-card text-muted-foreground px-2"> Or continue with </span>
			</div>
		</div>
		<div class="grid gap-2">
			<Label for="email">Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" />
		</div>
		<div class="grid gap-2">
			<Label for="password">Password</Label>
			<Input id="password" type="password" />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">Create account</Button>
	</Card.Footer>
</Card.Root>