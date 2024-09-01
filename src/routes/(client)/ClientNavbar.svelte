<script lang="ts">
  import { UserCircleOutline, AngleDownOutline } from 'flowbite-svelte-icons';
  import { Button } from 'flowbite-svelte';
  import { isSignInModalOpen } from '$lib/authModalStore';

  	import logo from '$lib/images/svelte-logo.svg';
    import abass from '$lib/images/abass.webp';
    import { page } from '$app/stores';

    $: activeUrl = $page.url.pathname;

    let isMenuOpen = false;
    let isDropdownOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function isActiveUrl(path: string) {
      return activeUrl === path ? 'text-blue-700' : 'text-gray-900';
    }

    function openDropdown() {
      isDropdownOpen = true;
    }

    function closeDropdown() {
      isDropdownOpen = false;
    }

    function openSignInModal() {
      $isSignInModalOpen = true
    }

  </script>
  



<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
  <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class=" flex-none w-40 flex items-center space-x-3 rtl:space-x-reverse">
        <img src="{logo}" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Leylo</span>
    </a>

    <div class="flex-none flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div on:mouseenter={openDropdown} on:mouseleave={closeDropdown} class="relative" role="button" tabindex="0">
        <div class="flex gap-2 items-center">
          <UserCircleOutline size="xl" />
          <span>Login</span>
          <AngleDownOutline size="sm" />
          <!-- <Avatar id="avatar-menu" src="{abass}"/> -->
        </div>
        <!-- Dropdow -->
        {#if isDropdownOpen}
          <div class="absolute right-0 z-10 w-60">
            <div class="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <Button color="blue" on:click={openSignInModal}>Se connecter</Button>
                </li>
              </ul>
            </div>
          </div>
        {/if}
      </div>

      <button on:click={toggleMenu}  data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>

    <div class="items-center justify-between {isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:grow  md:w-auto md:order-1" id="navbar-user">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="cars" class="block py-2 px-3 {isActiveUrl('/cars')} rounded md:bg-transparent md:p-0">Home</a>
        </li>
        <li>
          <a href="about" class="block py-2 px-3 {isActiveUrl('/about')} rounded md:bg-transparent md:p-0">About</a>
        </li>
        <li>
          <a href="services" class="block py-2 px-3 {isActiveUrl('/services')} rounded md:bg-transparent md:p-0">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>