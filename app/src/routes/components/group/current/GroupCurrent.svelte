<script lang="ts">
  import { TextPlaceholder, Checkbox } from "flowbite-svelte";
  import GroupItem from "../GroupItem.svelte";
  import { filterShow, hasNextToSee } from '../../../../lib/store';
  import store from '../../../../lib/store';
  import { derived } from "svelte/store";
  import ShowItem from "./ShowItem.svelte";

  export let filter: string | undefined;

  let finishedOnly = false;
  let expendedMap: Record<string, boolean> = {};

  $: archive = $store?.archive;
  $: currentStore = $store?.currentStore;
  $: shows = currentStore && derived(currentStore, ({data}) => {
      return data && data.pages
        .reduce((acc, page) => {
          acc.push(...page.shows);
          return acc;
        }, [])
        .filter(filterShow(filter))
        .filter((show: any) => finishedOnly ? hasNextToSee(show) : true)
    });
  $: count = shows && derived(shows, (shows) => shows?.length || 0);

  const switchFinishFilter = (e: Event) => {
    finishedOnly = (e.target as HTMLInputElement)?.checked;
  }
</script>

<GroupItem title="Current" color="primary" count={count ? $count : 0} canHide={!!$currentStore && ($currentStore).fetchStatus === 'idle'}>
  <div class="mt-2" slot="command">
    <Checkbox on:change={switchFinishFilter}><span class="text-slate-400">Not up-to-date only</span></Checkbox>
  </div>
  {#if !$shows}
    <TextPlaceholder size="xxl" class="mt-8" />
  {:else}
    <div>
      <ul>
        {#each $shows as show}
          {@const reqArchive = $archive}
          {#if reqArchive}
            <li>
              <ShowItem show={show} on:archive={() => reqArchive.mutate(show.id)}  isArchivedLoading="{reqArchive.isPending && reqArchive.variables === show.id}" bind:expended={expendedMap[show.id]} />
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}
</GroupItem>
