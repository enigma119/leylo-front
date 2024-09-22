<!-- src/lib/components/Header.svelte -->
<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';

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
</script>

<header
	class="fixed left-0 right-0 top-0 z-50 transition-all duration-300 {isScrolled
		? 'bg-white shadow-md'
		: 'bg-transparent'}"
	class:text-white={!isScrolled}
	class:text-gray-900={isScrolled}
>
	<nav class="container mx-auto flex max-w-7xl items-center gap-4 px-4 py-2">
		<a href="/" class="flex items-center justify-start gap-2 text-lg font-semibold md:text-base">
			<span class="text-2xl font-bold text-gray-900 dark:text-[#ccd6f6]">Laylowrent</span>
		</a>
		<ul class="flex flex-1 justify-end space-x-8">
			<li><a href="#louer" class="hover:text-gray-300">Louer mon logement</a></li>
			<li><a href="#blog" class="hover:text-gray-300">Le blog</a></li>
			<li><a href="#proprietaire" class="hover:text-gray-300">Je suis propriétaire</a></li>
		</ul>
		<Button
			variant={isScrolled ? 'default' : 'outline'}
			class={isScrolled
				? ''
				: 'text flex-none border-white text-white hover:bg-white hover:text-gray-900'}
			>Mon compte</Button
		>
	</nav>
</header>
