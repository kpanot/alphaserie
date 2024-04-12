<script lang="ts">
  import { Navbar } from 'flowbite-svelte';
  import { Search } from 'flowbite-svelte';

  let ref: any;

  export let filter: string;

	const handleSearchKeydown = (e: KeyboardEvent) => {
    if((e.ctrlKey || e.metaKey) && e.key === 'f'){
      ref.$$.root.getElementsByTagName('input')?.[0]?.focus();
      e.preventDefault();
    }
	}


</script>

<svelte:window on:keydown={handleSearchKeydown} />

<Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b">
  <div>
    <Search size="sm" placeholder="Filter" bind:value={filter} bind:this={ref} />
  </div>
</Navbar>
