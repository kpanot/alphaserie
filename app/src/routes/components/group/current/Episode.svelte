<script lang="ts">
  import { Badge, Checkbox, Spinner } from "flowbite-svelte";
  import type { StoreEpisode } from "../../../../lib/shows.store";
  import { createEventDispatcher } from "svelte";

  export let store: StoreEpisode | undefined;
  export let episode: any;
  export let isLast: boolean;

  let badgeColor: 'green' | 'primary';
  $: badgeColor = episode.user?.seen ? 'green' : 'primary';
  $: watch = store?.watch;

  const createMutateParameter = (e: Event) => {
    const watch = (e.target as HTMLInputElement)?.checked;
    return {id: episode.id as string, watch, isLast}
  }
</script>

<div class="rounded-md flex {!episode.user?.seen ? 'hover:bg-slate-200 cursor-pointer' : ''}">
  <div class="flex-none pt-1 pl-1 w-8">
    {#if ($watch)}
      {@const req = $watch}
      {#if req.isPending && req.variables?.id === episode.id}
        <div class="-mt-1">
          <Spinner size={4} />
        </div>
      {:else}
        <Checkbox checked={episode.user?.seen} on:change={(e) => { req.mutate(createMutateParameter(e)); }} />
      {/if}
    {/if}
  </div>
  <div class="flex-none w-20">
    <div class="-mt-0.5">
      <Badge color={badgeColor}>s:{episode.season || 0} e:{episode.episode}</Badge>
    </div>
  </div>
  <a class="grow text-ellipsis overflow-hidden text-sm pt-1" href={null} on:click={() => !episode.user?.seen && ($watch)?.mutate({id: episode.id, watch: true})}>{episode.title}</a>
  <a class="flex-none w-20 italic text-slate-500 text-xs pt-1" href={null} on:click={() => !episode.user?.seen && ($watch)?.mutate({id: episode.id, watch: true})}>
    {episode.date}
  </a>
</div>
