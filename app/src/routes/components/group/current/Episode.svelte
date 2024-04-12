<script lang="ts">
  import { Badge, Checkbox, Spinner } from "flowbite-svelte";
  import type { StoreEpisode } from "../shows.store";
  import type { ChangeEventHandler } from "svelte/elements";
  import type { CheckboxEvents } from "flowbite-svelte/Checkbox.svelte";

  export let store: StoreEpisode | undefined;
  export let episode: any;

  let badgeColor: 'green' | 'primary';
  $: badgeColor = episode.user?.seen ? 'green' : 'primary';
  $: watch = store?.watch;

  const creteMutateParameter = (e: Event) => {
    const watch = (e.target as HTMLInputElement)?.checked;
    return {id: episode.id as string, watch}
  }
</script>

<div class="flex">
  <div class="flex-none pt-1 w-8">
    {#if ($watch)}
      {@const req = $watch}
      {#if req.isPending && req.variables?.id === episode.id}
        <div class="-mt-1">
          <Spinner size={4} />
        </div>
      {:else}
        <Checkbox checked={episode.user?.seen} on:change={(e) => req.mutate(creteMutateParameter(e))} />
      {/if}
    {/if}
  </div>
  <div class="flex-none  w-20">
    <Badge color={badgeColor}>s:{episode.season || 0} e:{episode.episode}</Badge>
  </div>
  <div class="grow text-ellipsis overflow-hidden">{episode.title}</div>
  <div class="flex-none w-20 italic text-slate-500 text-xs">
    {episode.date}
  </div>
</div>
