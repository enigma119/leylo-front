<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
    import { page } from '$app/stores';

    $: activeUrl = $page.url.pathname;

	let scrollY: number;
	let isScrolled = false;

	onMount(() => {
		const updateScroll = () => {
			scrollY = window.scrollY;
			isScrolled = scrollY > 50;
		};

		window.addEventListener('scroll', updateScroll);

		return () => {
			window.removeEventListener('scroll', updateScroll);
		};
	});

    function isActiveUrl(path: string) {
      return activeUrl === path ? 'text-foreground' : 'text-muted-foreground';
    }

</script>

<header
	class="fixed left-0 right-0 top-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-secondary shadow-md'
		: 'bg-transparent'}"
	class:text-white={!isScrolled}
	class:text-gray-900={isScrolled}
>
	<nav class="container mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 text-base">
		<a href="/" class="flex items-center justify-start gap-2 text-lg font-semibold md:text-base">
			<span class="text-white  font-bold text-3xl">LayLowRent</span>
		</a>
		<ul class="flex flex-1 justify-end space-x-8">
			<li><a href="#louer" class="{isScrolled ? 'text-accent' : 'text-white'}">Louer mon logement</a></li>
			<li><a href="#blog" class="{isScrolled ? 'text-accent' : 'text-white'}">Le blog</a></li>
			<li><a href="#proprietaire" class="{isScrolled ? 'text-accent' : 'text-white'}">Je suis propriétaire</a></li>
		</ul>   
		<Button
			class={isScrolled ? 'flex-none bg-primary text-white' : 'flex-none border bg-transparent text-white'} >Mon compte</Button
		>
	</nav>
</header>
