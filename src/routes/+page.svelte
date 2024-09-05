<script lang="ts">
	import AuthDialogs from "@/components/auth/AuthDialogs.svelte";
	import { ClientNav } from "@/components/nav";
	import '../app.css';
	import type { SuperValidated } from "sveltekit-superforms";

	export let data;
	$: ({ signUpForm, signInForm } = data);
	
	// Define the type for authData
	type AuthData = {
		signUpForm: SuperValidated<{ email: string; password: string; }>;
		signInForm: SuperValidated<{ email: string; password: string; }>;
	};

	const authData: AuthData = { signUpForm, signInForm };

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<ClientNav></ClientNav>
	<AuthDialogs {authData}/>
</div>
