<script lang="ts">
  import { Checkbox, TextPlaceholder } from "flowbite-svelte";
  import GroupItem from "../GroupItem.svelte";
  import ShowBadge from "./ShowBadge.svelte";
  import {filterShow, hasNextToSee} from 'store/show.store';
  import store from 'store/show.store';
  import { derived } from "svelte/store";

  export let filter: string | undefined;

 let finishedOnly = false;

  $: unarchive = $store?.unarchive;
  $: archiveStore = $store?.archiveStore;
  $: shows = archiveStore && derived(archiveStore, ({data}) => {
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

<GroupItem title="Archived" color="gray" count={count ? $count : 0}  canHide={!!$archiveStore && ($archiveStore).fetchStatus === 'idle'}>
  <div class="mt-2" slot="command">
    <Checkbox on:change={switchFinishFilter}><span class="text-slate-400">Not finished only</span></Checkbox>
  </div>
  {#if !$shows}
    <TextPlaceholder size="xxl" class="mt-8" />
  {:else}
    <div class="flex flex-wrap">
      {#each $shows as show}
        {@const req = $unarchive}
        {#if req}
          <ShowBadge
            color="{!hasNextToSee(show) ? 'dark' : 'primary'}"
            show="{show}"
            isLoading="{req.isPending && req.variables === show.id}"
            on:unarchive={() => req.mutate(show.id)} />
        {/if}
      {/each}
    </div>
  {/if}
</GroupItem>
