<script lang="ts">
	import { page } from '$app/stores';
	import NotFound from '$lib/components/core/NotFound.svelte';
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	{#if $page.status === 404}
		<main class="flex-grow flex items-center justify-center">
			<NotFound />
		</main>
	{:else}
		<main class="flex-grow flex items-center justify-center">
			<h1>{$page.status}: {$page.error?.message}</h1>
		</main>
	{/if}
</div>
