<script lang="ts">
  import { Badge, Checkbox, Spinner } from "flowbite-svelte";
  import type { StoreEpisode } from "store/show.store";

  export let store: StoreEpisode | undefined;
  export let episode: any;
  export let isLast: boolean;
  export let isSubHover: boolean | null;

  let badgeColor: 'green' | 'primary' | 'red';
  $: badgeColor = episode.user?.seen ? 'green' : 'red';
  $: watch = store?.watch;

  const createMutateParameter = (e: Event) => {
    const watch = (e.target as HTMLInputElement)?.checked;
    return {id: episode.id as string, watch, isLast}
  }
</script>

<div class="rounded-md flex {!episode.user?.seen ? 'hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer' : ''} {!episode.user?.seen && isSubHover ? 'bg-slate-200/50 dark:bg-slate-700/50' : ''}" role="button" tabindex="0" on:mouseenter on:mouseleave>
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
