<script lang="ts">
	import { Icons } from '$lib/components/icons';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { supabaseClient } from '@/supabaseClient';
	import type { Provider } from '@supabase/supabase-js';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { signInSchema } from './schema';
	import * as Form from '$lib/components/ui/form';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod, zodClient } from 'sveltekit-superforms/adapters';
	import { Eye, EyeOff } from 'lucide-svelte';

	const { form, errors, enhance } = superForm(defaults(zod(signInSchema)), {
		SPA: true,
		validators: zodClient(signInSchema),
		onUpdate({ form }) {
			if (form.valid) {
				console.log('form is valid', form);
			}
		}
	});

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
		if (provider === 'google' || provider === 'facebook') {
			await singUpWithProvider(provider);
		}
		cancel();
	};

	let showPassword = false;

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	$: getInputClass = (fieldName: 'email' | 'password') => {
		return $errors[fieldName] ? 'border-red-500' : '';
	};
</script>

<Card.Root class="w-full border-none p-0 shadow-none">
	<Card.Header class="space-y-1  text-center">
		<Card.Title class="text-2xl">Hello Leylo</Card.Title>
		<Card.Description>Dont have an account? <a href="/sign-up">Register here</a></Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<form method="POST" use:enhance>
			<div class="grid grid-cols-2 gap-6">
				<Button variant="outline" on:click={() => singUpWithProvider('google')}>
					<Icons.google class="mr-2 h-4 w-4" />
					Google
				</Button>
				<Button variant="outline" formaction="?/social&provider=facebook">
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
				<span class="bg-card text-muted-foreground mt-3 px-2"> Or continue with </span>
			</div>
		</div>
		<form method="POST" use:enhance>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input
						{...attrs}
						bind:value={$form.email}
						id="email"
						type="email"
						class={getInputClass('email')}
					/>
				</Form.Control>
				{#if $errors.email && $errors.email.length > 0}
					<p class="text-[12px] text-red-500">{$errors.email[0]}</p>
				{/if}
			</Form.Field>
			<Form.Field {form} name="password" class="mt-3">
				<Form.Control let:attrs>
					<Form.Label>Password</Form.Label>
					<div class="relative">
						<Input
							{...attrs}
							bind:value={$form.password}
							id="password"
							type={showPassword ? 'text' : 'password'}
							class={`${getInputClass('password')} pr-10`}
						/>
						<button
							type="button"
							class="absolute inset-y-0 right-0 flex items-center pr-3"
							on:click={togglePasswordVisibility}
						>
							{#if showPassword}
								<EyeOff class="h-5 w-5 text-gray-400" />
							{:else}
								<Eye class="h-5 w-5 text-gray-400" />
							{/if}
						</button>
					</div>
				</Form.Control>

				{#if $errors.password && $errors.password.length > 0}
					<p class="text-[12px] text-red-500">{$errors.password[0]}</p>
				{/if}
			</Form.Field>
			<div class="mt-5 flex justify-end">
				<a href="/forgot-password" class="text-sm font-medium text-blue-800"
					>Forgot your password?</a
				>
			</div>

			<Form.Button class="mt-8 w-full">Login</Form.Button>
		</form>
	</Card.Content>
</Card.Root>
