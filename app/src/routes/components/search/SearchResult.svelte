<script lang="ts">
  import { derived } from 'svelte/store';
  import store from '../../../lib/shows.store';
  import { Spinner } from 'flowbite-svelte';

  export let show: {id: string, poster: string | undefined, title: string, release_date: string | undefined};

  const followedShowIds = derived($store.allShows, (shows) => shows.map(({id}) => id));
  $: isAlreadyFollowed = derived(followedShowIds, (ids) => ids.includes(show.id));
  $: follow = $store.follow
</script>

<a class="flex {$isAlreadyFollowed ? 'cursor-default' : 'hover:bg-slate-200 cursor-pointer'} pl-2 rounded-md" href={null} title="follow {show.title}" on:click={() => $follow.mutate(show.id)}>
  <div class="flex-none w-12 mt-1 mb-1">
    {#if ($follow.isPending && $follow.variables === show.id)}
      <Spinner size="7" />
    {:else}
      {#if (show.poster)}
        <img class="rounded-full w-8 h-8" src={show.poster} alt={show.title} />
      {:else}
        <div class="w-8 h-8 bg-slate-500 rounded-full">&nbsp;
        </div>
      {/if}
    {/if}
  </div>
  <div class="flex-1 mt-2 {$isAlreadyFollowed ? 'text-gray-300' : ''}">
    {show.title}
  </div>
  <div class="flex-none w-12 mt-1 mb-1 italic {$isAlreadyFollowed ? 'text-gray-300' : 'text-gray-400'} text-xs pt-2">
    {#if (show.release_date)}
      ({show.release_date})
    {/if}
  </div>
</a>
