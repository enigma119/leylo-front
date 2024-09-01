<script lang="ts">
    import { superForm } from 'sveltekit-superforms';
    import { Modal } from 'flowbite-svelte';
    import facebook from '$lib/images/facebook.png';
    import google from '$lib/images/google.png';
    import { isSignInModalOpen } from '$lib/authModalStore';
    import { enhance } from '$app/forms';

    let email = '';
    let password = '';
    let errors = {};
    let loading = false;

    async function handleSubmit(event) {
        loading = true;
        const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        loading = false;

        if (result.success) {
            // Handle successful login (e.g., update user store, close modal)
            $isSignInModalOpen = false;
            // You might want to redirect or update some global state here
        } else {
            errors = result.errors || { form: result.error };
        }
    }

    function handleClose() {
        $isSignInModalOpen = false;
    }
</script>

<Modal bind:open={$isSignInModalOpen} size="xs" autoclose={false} class="w-full" on:close={handleClose}>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Welcome back</h2>
        <p class="mb-4">Don't have an account yet? <a href="/register" class="text-blue-600">Register here</a></p>
        
        <div class="flex justify-center space-x-4">
          <button class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <img src={facebook} alt="Facebook" class="w-6 h-6" />
          </button>
          <button class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <img src={google} alt="Google" class="w-6 h-6" />
          </button>
        </div>


        <p class="text-center text-gray-500 mb-4">or via e-mail</p>
        
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input bind:value={email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                {#if errors.email}<span class="text-red-500 text-sm">{errors.email}</span>{/if}
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input bind:value={password} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                {#if errors.password}<span class="text-red-500 text-sm">{errors.password}</span>{/if}
            </div>
            {#if errors.form}<span class="text-red-500 text-sm">{errors.form}</span>{/if}
            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    </div>
</Modal>
