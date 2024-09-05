<script lang="ts">
    import { SignUpForm, SignInForm } from "$lib/components/auth";
    import { dialogStore } from '$lib/stores/dialogStore';
	import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "$lib/components/ui/dialog";
  export let data;
  $: ({ signUpForm, signInForm } = data);

  </script>
  
  {#if $dialogStore.signUp}
    <Dialog bind:open={$dialogStore.signUp} >
      <DialogContent class="sm:max-w-[425px]">
        <SignUpForm  />
        <DialogClose />
      </DialogContent>
    </Dialog>
  {/if}
  
  {#if $dialogStore.signIn}
    <Dialog bind:open={$dialogStore.signIn} >
      <DialogContent class="sm:max-w-[425px]">
        <SignInForm {signInForm}/>
      </DialogContent>
    </Dialog>
  {/if}