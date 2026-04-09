<script lang="ts">
  import { derived } from 'svelte/store';
  import GroupItem from "../GroupItem.svelte";
  import SearchResult from "../../search/SearchResult.svelte";
  import searchStore from 'store/search.store';
  import showStore from 'store/show.store';
  import { filterShow } from 'store/show.store';
  import { Skeleton } from "flowbite-svelte";

  export let filter: string | undefined;

  // Get counts from current and archived to determine if we should show search
  $: currentStore = $showStore?.currentStore;
  $: archiveStore = $showStore?.archiveStore;

  $: currentCount = currentStore && derived(currentStore, ({data}) => {
    if (!data) return 0;
    return data.pages
      .reduce((acc, page) => {
        acc.push(...page.shows);
        return acc;
      }, [])
      .filter(filterShow(filter))
      .length;
  });

  $: archiveCount = archiveStore && derived(archiveStore, ({data}) => {
    if (!data) return 0;
    return data.pages
      .reduce((acc, page) => {
        acc.push(...page.shows);
        return acc;
      }, [])
      .filter(filterShow(filter))
      .length;
  });

  // Show search results when filter produces no results
  $: shouldShowSearch = filter &&
                        filter.length > 2 &&
                        $currentCount === 0 &&
                        $archiveCount === 0 &&
                        currentStore &&
                        ($currentStore)?.fetchStatus === 'idle';

  $: searchResults = shouldShowSearch ? $searchStore.search(filter!).list : undefined;
  $: shows = searchResults && derived(searchResults, ({data}) => data?.shows);
  $: count = shows && derived(shows, (shows) => shows?.length || 0);
</script>

{#if shouldShowSearch && $searchResults}
  <GroupItem title="Search result" color="orange" count={$searchResults.fetchStatus !== 'idle' ? null : $count?.toString() || '0'}>
    {#if $searchResults.fetchStatus !== 'idle' && !$shows}
      <Skeleton />
    {:else if $shows && $shows.length > 0}
      <div class="bg-base-200 rounded-lg p-2 dark:text-gray-300">
        <ul>
          {#each $shows as show}
            <li><SearchResult {show} /></li>
          {/each}
        </ul>
      </div>
    {:else}
      <div class="text-center italic opacity-50 mt-4">
        No shows found matching "{filter}"
      </div>
    {/if}
  </GroupItem>
{/if}
