<script lang="ts">
  import { derived } from "svelte/store";
  import { isToSee } from "../../../../lib/store";
  import store from '../../../../lib/store';
  import { Tabs, TabItem, Skeleton, Badge } from "flowbite-svelte";
  import Episode from "./Episode.svelte";

  export let show: any;

  $: episodeStore = show && $store?.episodes(show.id);
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
  $: numberNotSeen = episodeStandardList && derived(episodeStandardList,(episodes) => (episodes as any[])?.filter(({user}) => !user?.seen).length);
  $: episodeSpecialList = episodeList && derived(episodeList, (episodes) => (episodes as any[])?.filter(({special}: any) => !!special));
  $: numberNotSeenSpecial = episodeSpecialList && derived(episodeSpecialList,(episodes) => (episodes as any[])?.filter(({user}) => !user?.seen).length);
  $: episodeFutureList = episodeList && derived(episodeList, (episodes) => (episodes as any[])?.filter(({date, special}: any) => !isToSee(date) && !special));

</script>

<div class="m-2 mt-4">
  {#if $episodeList}
    {@const hasSpecialEpisode = $episodeSpecialList && $episodeSpecialList.length > 0}
    {@const hasFutureEpisode = $episodeFutureList && $episodeFutureList.length > 0}
    {@const withTab = hasSpecialEpisode || hasFutureEpisode}

    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-1">
      {#if (withTab) }
        <Tabs tabStyle="underline">
          <TabItem open>
            <div slot="title">To Watch {#if $numberNotSeen && $numberNotSeen > 0 }<Badge rounded>{$numberNotSeen}</Badge>{/if}</div>
            <ul>
              {#each $episodeStandardList as episode}
                <li><Episode episode={episode} store={episodeStore} isLast={$numberNotSeen <= 1} /></li>
              {/each}
            </ul>
          </TabItem>
          {#if (hasFutureEpisode) }
            <TabItem>
              <div slot="title">Future Episodes <Badge rounded color="dark">{$episodeFutureList.length}</Badge></div>
              <ul>
                {#each $episodeFutureList as episode}
                  <li><Episode episode={episode} store={episodeStore} isLast={false}/></li>
                {/each}
              </ul>
            </TabItem>
          {/if}
          {#if (hasSpecialEpisode) }
            <TabItem>
              <div slot="title">Special Episodes {#if $numberNotSeenSpecial && $numberNotSeenSpecial > 0 }<Badge rounded>{$numberNotSeenSpecial}</Badge>{/if}</div>
              <ul>
              {#each $episodeSpecialList as episode}
                <li><Episode episode={episode} store={episodeStore} isLast={false}/></li>
              {/each}
            </ul>
            </TabItem>
          {/if}
        </Tabs>
      {:else}
        <ul class="m-3">
          {#each $episodeStandardList as episode}
            <li><Episode episode={episode} store={episodeStore} isLast={$numberNotSeen <= 1} /></li>
          {/each}
        </ul>
      {/if}
    </div>
  {:else if !$episodeStoreList || ($episodeStoreList).fetchStatus !== 'idle'}
    <div class="ml-2 flex-initial">
      <Skeleton />
    </div>
  {/if}
</div>
