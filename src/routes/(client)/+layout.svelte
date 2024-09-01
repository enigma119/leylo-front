<script lang="ts">
	import '../../app.css';
	import { ClientNav } from '$lib/components/nav';
	import AuthDialogs from '$lib/components/auth/AuthDialogs.svelte';
</script>

<div class="app">
	<ClientNav></ClientNav>
	<AuthDialogs/>


	<main>
		<slot></slot>
	</main>

</div>


