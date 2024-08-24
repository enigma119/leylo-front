<script lang="ts">
    import ClientNavbar from './ClientNavbar.svelte';
    // import type { LayoutData } from './$types';
	import '../../app.css';

    
    // export let data: LayoutData;
</script>

<div class="app">
	<!-- <Header></Header> -->
    <ClientNavbar></ClientNavbar>

	<main>
		<slot></slot>
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>


<style>
    .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

    /* footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }
    
    footer a {
        font-weight: bold;
    } */

</style>
