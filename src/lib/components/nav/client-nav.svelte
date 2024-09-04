<script lang="ts">
    import CircleUser from "lucide-svelte/icons/circle-user";
    import Menu from "lucide-svelte/icons/menu";
    import Package2 from "lucide-svelte/icons/package-2";
    import { Button } from "$lib/components/ui/button/index";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index";
    import * as Sheet from "$lib/components/ui/sheet/index";
    import { dialogStore } from "$lib/stores/dialogStore"

    function openSignUpDialog() {
      dialogStore.set({ signUp: true, signIn: false });
    }

    function openSignInDialog() {
      dialogStore.set({ signUp: false, signIn: true });
    } 

    
  </script>


  <div class="flex min-h-screen w-full flex-col">
    <header class="bg-background sticky top-0 flex h-16 justify-between items-center gap-4 border-b px-4 md:px-6">
      <nav
        class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <a href="/" class="flex items-center gap-2 text-lg font-semibold md:text-base">
          <!-- <Package2 class="h-6 w-6" /> -->
          <span class="text-2xl font-bold text-gray-900 dark:text-[#ccd6f6]">Leylo</span>
        </a>
        <a href="/cars" class="text-foreground hover:text-foreground transition-colors">
          Cars
        </a>
        <a href="/services" class="text-muted-foreground hover:text-foreground transition-colors">
          Services
        </a>
        <a href="/reviews" class="text-muted-foreground hover:text-foreground transition-colors">
          Reviews
        </a>
        <a href="##" class="text-muted-foreground hover:text-foreground transition-colors min-w-fit">
          How it works
        </a>
      </nav>
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <div>
            <Button
              builders={[builder]}
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
            >
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </div>
        </Sheet.Trigger>
        <Sheet.Content side="left">
          <nav class="grid gap-6 text-lg font-medium">
            <a href="##" class="flex items-center gap-2 text-lg font-semibold">
              <Package2 class="h-6 w-6" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a href="##" class="hover:text-foreground"> Dashboard </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Orders </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Products </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Customers </a>
            <a href="##" class="text-muted-foreground hover:text-foreground"> Analytics </a>
          </nav>
        </Sheet.Content>
      </Sheet.Root>
      <div class="flex w-full justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <div >
                <Button 
                  builders={[builder]}
                  variant='ghost'
                  size="icon"
                  class="rounded-md flex items-center gap-2 w-auto px-2 border-none"
                >
                  <CircleUser class="h-5 w-5" />
                  <span> Se connecter</span>
                  <span class="sr-only">Toggle user menu</span>
                </Button>
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item on:click={openSignInDialog}>Se connecter</DropdownMenu.Item>
            <DropdownMenu.Item on:click={openSignUpDialog}>S'incrire</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
</div>