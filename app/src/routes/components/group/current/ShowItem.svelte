<script lang="ts">
  import { Button, Spinner } from "flowbite-svelte";
  import { hasNextToSee, type Store } from "../../../../lib/shows.store";
  import { ArchiveArrowDownSolid, ChevronDownOutline, ChevronUpOutline, LinkOutline } from "flowbite-svelte-icons";
  import { createEventDispatcher } from "svelte";
  import EpisodeList from "./EpisodeList.svelte";

  export let show: any;
  export let isArchivedLoading: boolean;

  let expended: boolean = false;
  const dispatch = createEventDispatcher();

  $: hasNext = hasNextToSee(show);
  $: isFinished = show?.status === 'Ended';
  $: textColor = hasNext ? 'text-orange-500' : (isFinished ? 'text-green-500' : 'text-gray-500');
  $: cssClass = `w-4 h-4 -m-1 ${textColor} ` + (hasNext ? 'hover:text-orange-700' : (isFinished ? 'hover:text-green-700' : 'hover:text-gray-700'));
  $: bgCssClass = hasNext ? 'hover:border-orange-400': (isFinished ? 'hover:border-green-400' : 'hover:border-slate-300');
</script>

<div class="w-full ml-1 mb-1 p-1 rounded-md dark:border-gray-700 divide-gray-200 font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 flex-initial transition-all duration-75 border-transparent border-2 {bgCssClass}">
  <div class="flex">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a
      href="javascript: void(0);"
      role="button"
      class="flex-1 {textColor}"
      on:click={() => expended = !expended}>
      {show.title}
    </a>
    <div class="flex-none w-7">
      <a href="https://www.betaseries.com/serie/{show.slug}" target="_blank" class="text-center font-medium inline-flex items-center justify-center px-3 py-2 text-xs">
        <LinkOutline class="{cssClass}" />
      </a>
    </div>
    <div class="flex-none w-7">
      {#if isArchivedLoading}
      <div class="pl-2">
        <Spinner size={4} />
      </div>
      {:else}
        <Button size="xs" color="none" title="Archive" on:click={()=> dispatch('archive')}>
          <ArchiveArrowDownSolid class="{cssClass}" />
        </Button>
      {/if}
    </div>
    <div class="flex-none w-7">
      <Button size="xs" color="none" title="ExpendCollapse" on:click={() => expended = !expended}>
        {#if expended}
          <ChevronUpOutline class="{cssClass}" />
        {:else}
          <ChevronDownOutline class="{cssClass}" />
        {/if}
      </Button>
    </div>
  </div>
  {#if expended}
    <div>
      <hr class="border-1 border-stale-500 m-2" />
      <EpisodeList show={show} />
    </div>
  {/if}
</div>
