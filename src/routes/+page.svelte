<script lang="ts">
	import AuthDialogs from "$lib/components/auth/AuthDialogs.svelte";
	import { ClientNav } from "$lib/components/nav";
	// import type { SuperValidated } from "sveltekit-superforms";

	// export let data;
	// $: ({ signUpForm, signInForm } = data);

	
	// // Define the type for authData
	// type AuthData = {
	// 	signUpForm: SuperValidated<{ email: string; password: string; }>;
	// 	signInForm: SuperValidated<{ email: string; password: string; }>;
	// };

	// const authData: AuthData = { signUpForm, signInForm };

	import { Hero, Stats, CityGrid } from '$lib/components/landingPage';


</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero />
<Stats />
<CityGrid />

