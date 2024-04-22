<script lang="ts">
  import { Skeleton } from 'flowbite-svelte';
  import store from '../../../lib/shows.store';
  import SearchResult from './SearchResult.svelte';

  export let search: string | undefined;

  $: searchResults = search ? $store.search(search).list : undefined;
</script>
{#if ($searchResults) }
  {@const shows = ($searchResults).data?.shows }
  {@const ss = ($searchResults).data?.shows }

  {#if (shows)}
    {#if (shows.length > 0)}
      <ul>
        {#each shows as show}
          <li><SearchResult show={show} /></li>
        {/each}
      </ul>
    {:else}
      <div class="italic text-center mt-12 mb-12 text-gray-400">
        No result found
      </div>
    {/if}
  {:else if ($searchResults).fetchStatus !== 'idle'}
    <div class="ml-2 flex-initial">
      <Skeleton />
    </div>
  {/if}
{:else}
  <div class="italic text-center mt-12 mb-12 text-gray-400">
    Waiting for search
  </div>
{/if}
