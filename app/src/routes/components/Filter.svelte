<script lang="ts">
  import { Button, Search, Modal } from 'flowbite-svelte';
  import { PlusOutline } from 'flowbite-svelte-icons';
  import { derived, writable, type Readable } from 'svelte/store';
  import SearchList from './search/SearchList.svelte';

  export let filter: string;

  let defaultModal = false;

  let timerId: any;
  const searchInput = writable<string>();
  const search: Readable<string> = derived(searchInput, (search, set) => {
    if (timerId) { clearTimeout(timerId); }
    timerId = setTimeout(() => set(search), 400)
  });

	const handleSearchKeydown = (e: KeyboardEvent) => {
    if((e.ctrlKey || e.metaKey) && e.key === 'f'){
      document.getElementById('filter')?.focus();
      e.preventDefault();
    }
	};

  $: if (defaultModal) {
    setTimeout(() => document.getElementById('search')?.focus(), 0)
  }

</script>

<svelte:window on:keydown={handleSearchKeydown} />

<div class="flex-1">
  <Search size="sm" placeholder="Filter" id="filter" bind:value={filter} />
</div>
<div class="flex-none pl-2 pt-1 sm:pt-0">
  <Button title="Follow a new show" size="xs" on:click={() => defaultModal = true}><PlusOutline size="sm" /></Button>
</div>

<Modal bind:open={defaultModal} autoclose>
  <div slot="header" class="pr-2 w-full">
    <Search size="sm" placeholder="Search for show ..." id="search" bind:value={$searchInput}>

    </Search>
  </div>

  <SearchList search={$search} />
</Modal>
