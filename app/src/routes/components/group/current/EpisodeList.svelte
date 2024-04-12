<script lang="ts">
  import { derived } from "svelte/store";
  import { isToSee, type Store } from "../shows.store";
  import { Skeleton, Button, Badge } from "flowbite-svelte";
  import Episode from "./Episode.svelte";
  import { ChevronDownOutline, ChevronUpOutline } from "flowbite-svelte-icons";

  export let show: any;
  export let stores: Store | undefined;

  let displaySpecial: boolean = false;
  let displayFuture: boolean = false;

  $: episodeStore = show && stores?.episodes(show.id);
  $: episodeStoreList = episodeStore?.list;
  $: episodeList = episodeStoreList && derived(episodeStoreList, ({data}: any) => data?.episodes
    .sort((a: any, b: any) => {
      if (!a.date) {
        return 1;
      } else if (!b.date) {
        return -1;
      } else {
        const res = new Date(b.date).getTime() - new Date(a.date).getTime();
        if (!res) {
          return +b.season < +a.season || +b.episode < +a.episode ? -1 : 1;
        }
        return res;
      }
    }));
  $: episodeStandardList = episodeList && derived(episodeList, (episodes) => (episodes as any[])?.filter(({date, special}: any) => isToSee(date) && !special));
  $: episodeSpecialList = episodeList && derived(episodeList, (episodes) => (episodes as any[])?.filter(({special}: any) => !!special));
  $: numberNotSeenSpecial = episodeSpecialList && derived(episodeSpecialList,(episodes) => (episodes as any[])?.filter(({user}) => !user?.seen).length);
  $: episodeFutureList = episodeList && derived(episodeList, (episodes) => (episodes as any[])?.filter(({date, special}: any) => !isToSee(date) && !special));
</script>

<div class="m-2">
  {#if $episodeList}
    <ul>
        {#if $episodeSpecialList && ($episodeSpecialList).length > 0}
          <div class="text-center">
            <Button on:click={() => displaySpecial = !displaySpecial} color="none" size="xs" class="hover:underline">
              <span class="text-slate-500">
              {#if displaySpecial} <ChevronUpOutline /> {:else} <ChevronDownOutline /> {/if}
              </span>
              <span class="text-slate-500">
                {#if displaySpecial} Hide {:else} Display {/if} special episodes
                {#if $numberNotSeenSpecial && $numberNotSeenSpecial > 0 }<Badge rounded>{$numberNotSeenSpecial}</Badge>{/if}
              </span>
              <span class="text-slate-500">
              {#if displaySpecial} <ChevronUpOutline /> {:else} <ChevronDownOutline /> {/if}
              </span>
            </Button>
          </div>
        {/if}
        {#if displaySpecial}
          {#each $episodeSpecialList as episode}
            <li><Episode episode={episode} store={episodeStore} /></li>
          {/each}
          <hr class="border-1 border-stale-500 m-2" />
        {/if}
        {#if $episodeFutureList && ($episodeFutureList).length > 0}
          <div class="text-center">
            <Button on:click={() => displayFuture = !displayFuture} color="none" size="xs" class="hover:underline">
              <span class="text-slate-500">
              {#if displayFuture} <ChevronUpOutline /> {:else} <ChevronDownOutline /> {/if}
              </span>
              <span class="text-slate-500">
                {#if displayFuture} Hide {:else} Display {/if} future episodes
              </span>
              <span class="text-slate-500">
              {#if displayFuture} <ChevronUpOutline /> {:else} <ChevronDownOutline /> {/if}
              </span>
            </Button>
          </div>
        {/if}
        {#if displayFuture}
          {#each $episodeFutureList as episode}
            <li><Episode episode={episode} store={episodeStore} /></li>
          {/each}
          <hr class="border-1 border-stale-500 m-2" />
        {/if}
      {#each $episodeStandardList as episode}
        <li><Episode episode={episode} store={episodeStore} /></li>
      {/each}
    </ul>
  {:else if !$episodeStoreList || ($episodeStoreList).fetchStatus !== 'idle'}
    <div class="ml-2 flex-initial">
      <Skeleton />
    </div>
  {/if}
</div>
