<script lang="ts">
  import { Badge, Button, Indicator, Spinner } from "flowbite-svelte";
  import { hasNextToSee } from "store/show.store";
  import store from 'store/show.store';
  import { ArchiveArrowDownSolid, ChevronDownOutline, ChevronUpOutline, LinkOutline } from "flowbite-svelte-icons";
  import { createEventDispatcher } from "svelte";
  import EpisodeList from "./EpisodeList.svelte";
  import { derived } from "svelte/store";

  export let show: any;
  export let isArchivedLoading: boolean;
  export let expended: boolean = false;

  const dispatch = createEventDispatcher();
  const displayButtonLimit = 2;
  const markAllAsSeen = $store.markAllAsSeen;

  const markAsView = () => {
    $markAllAsSeen.mutate({id: show.id, seasons: show.seasons_details.map(({number}: {number: number}) => `${number}`)});
  }

  $: isRemaining = show?.userVisited?.remaining > 0 && (show?.userVisited?.remaining <= displayButtonLimit || expended);
  $: episodeStoreLatest = isRemaining ? $store?.latestEpisode(show.id) : undefined;
  $: latest = episodeStoreLatest && derived(episodeStoreLatest, ({data}: any) => data?.episode);
  $: hasNext = hasNextToSee(show);
  $: isFinished = show?.status === 'Ended';
  $: titleColor = hasNext ? 'border-orange-500' : (isFinished ? 'border-green-500' : 'border-transparent text-gray-500');
  $: textColor = hasNext ? 'text-primary-500' : (isFinished ? 'text-green-500' : 'text-gray-500');
  $: cssClass = `w-4 h-4 -m-1 ${textColor} ` + (hasNext ? 'hover:text-primary-700' : (isFinished ? 'hover:text-green-700' : 'hover:text-gray-700'));
  $: bgCssClass = hasNext ? 'hover:border-primary-400': (isFinished ? 'hover:border-green-400' : 'hover:border-slate-300 dark:hover:border-slate-500');
</script>

<div class="w-full mb-1 p-1 rounded-md dark:border-gray-700 divide-gray-200 font-medium bg-gray-100 text-black dark:bg-gray-700 dark:text-gray-300 flex-initial transition-all duration-75 border-transparent border-2 {bgCssClass}">
  <div class="flex">
    <a
      href={null}
      role="button"
      class="flex-1 border-l-4 pl-2 {titleColor}"
      on:click={() => expended = !expended}>
      {show.title}
    </a>
    {#if (isRemaining)}
      {#if ($episodeStoreLatest && !expended)}
        <div class="flex-none pl-2 hidden sm:block">
          <Badge color="none">
            {#if !$latest && ($episodeStoreLatest).fetchStatus !== 'idle'}
              loading <Spinner size={3} class="ml-2" />
            {:else if ($latest)}
              latest: s:{$latest.season || 0} e:{$latest.episode}
            {/if}
          </Badge>
        </div>
      {/if}

      {@const req = $markAllAsSeen}
      <div class="flex-none w-32 pl-2">
        <Button title="Mark all the episodes as viewed" outline size="xs" class="relative ml-auto" on:click={() => markAsView()}>
          {#if req.isPending && req.variables?.id === show.id}
            <Spinner size={3} class="-ml-1 mr-1" />
            <span class="-mt-1 -mb-1">Marking...</span>
          {:else}
            <span class="-mt-1 -mb-1">Mark episodes</span>
          {/if}
          <Indicator color="orange" border size="xl" placement="top-right">
            <span class="text-white text-xs font-bold">{show.userVisited?.remaining < 100 ? show.userVisited?.remaining : '?'}</span>
          </Indicator>
        </Button>
      </div>
    {/if}
    <div class="flex-none w-7 hidden sm:block">
      <a href="https://www.betaseries.com/serie/{show.slug}" target="_blank" class="text-center font-medium inline-flex items-center justify-center px-3 py-2 text-xs">
        <LinkOutline class="{cssClass}" />
      </a>
    </div>
    <div class="flex-none w-7 hidden sm:block">
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
    <div class="flex-none w-7 hidden sm:block">
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
      <hr class="border-1 border-gray-500 dark:border-gray-800 m-2" />
      <EpisodeList show={show} />
    </div>
  {/if}
</div>
