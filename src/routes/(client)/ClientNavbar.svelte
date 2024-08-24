<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
  	import logo from '$lib/images/svelte-logo.svg';
    import abass from '$lib/images/abass.webp';
    import { page } from '$app/stores';

    $: activeUrl = $page.url.pathname;
    let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
    let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  </script>
  
  <Navbar>
    <NavBrand href="/">
      <img src="{logo}" class="me-3 h-6 sm:h-9" alt="Leylo Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Leylo</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu" src="{abass}" />
      <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">abass@leylo.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    <NavUl {activeUrl} {activeClass} {nonActiveClass}>
      <NavLi href="/listing" active={true}>Cars</NavLi>
      <NavLi href="/about">Comment ca marche</NavLi>
      <NavLi href="/docs/components/navbar">Service</NavLi>
      <NavLi href="/pricing">A propos</NavLi>
    </NavUl>
  </Navbar>