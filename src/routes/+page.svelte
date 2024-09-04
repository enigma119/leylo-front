<script lang="ts">
	import AuthDialogs from "@/components/auth/AuthDialogs.svelte";
	import { ClientNav } from "@/components/nav";
	import '../app.css';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<ClientNav></ClientNav>
	<AuthDialogs/>
</div>
