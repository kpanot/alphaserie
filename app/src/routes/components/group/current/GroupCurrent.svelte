<script lang="ts">
  import { TextPlaceholder, Spinner, Checkbox } from "flowbite-svelte";
  import GroupItem from "../GroupItem.svelte";
  import { filterShow, hasNextToSee, type Store } from '../shows.store';
  import { derived } from "svelte/store";
  import ShowItem from "./ShowItem.svelte";

  export let store: Store | undefined;
  export let filter: string | undefined;

  let finishedOnly = false;

  $: archive = store?.archive;
  $: currentStore = store?.currentStore;
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

<GroupItem title="Current" color="green" count={count ? $count : 0} canHide={!!$currentStore && ($currentStore).fetchStatus === 'idle'}>
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
              <ShowItem show={show} on:archive={() => reqArchive.mutate(show.id)}  isArchivedLoading="{reqArchive.isPending && reqArchive.variables === show.id}" stores={store} />
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  {/if}
</GroupItem>
