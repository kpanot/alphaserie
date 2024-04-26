<script lang="ts">
  import { derived } from 'svelte/store';
  import store from '../../lib/shows.store';
  import { Badge, Skeleton, Timeline, TimelineItem } from 'flowbite-svelte';
  import { CalendarWeekSolid, ExclamationCircleSolid, BookmarkSolid } from 'flowbite-svelte-icons';
  import GroupItem from './group/GroupItem.svelte';

  const LimitOfPlanningItemToDisplay = 30;

  const isToday = (date?: string) => {
    if (!date) {
      return false;
    }
    const d = new Date(date);
    const today = new Date();
    return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDay() === today.getDay();
  }

  const hasSeasonFirst = (episodes?: any[]) => {
    return episodes?.some(({episode}) => episode === 1);
  }

  const shortText = (text?: string, limit = 20) => {
    return text ?`${text.slice(0, limit)}${text.length > limit ? '...' : ''}` : '';
  }

  $: planningStore = $store?.planningStore;
  $: planning = planningStore && derived(planningStore, ({data}) => {
      return data &&
        Object.entries<any>(
          data.episodes
            .filter(({ date }) => (new Date(date)).getTime() > (new Date(new Date().setDate(new Date().getDate() - 1)).getTime()))
            .reduce((acc, episode) => {
              acc[episode.date] ||= [];
              acc[episode.date].push(episode);
              return acc;
            }, {} as Record<string, any>)
        )
        .sort(([a]: any, [b]: any) => {
          if (!a) {
            return 1;
          } else if (!b) {
            return -1;
          } else {
            const res = new Date(a).getTime() - new Date(b).getTime();
            return res || 0;
          }
        }).slice(0, LimitOfPlanningItemToDisplay);
    });
</script>
{#if ($planningStore)}
  <GroupItem title="In coming" color="black" count={null}>
    <div class="bg-gray-100 py-3 pr-2 rounded-lg transition-all duration-75 border-transparent border-2">
      {#if (!$planning && $planningStore.fetchStatus !== 'idle')}
        <div class="m-2 flex-initial">
          <Skeleton />
        </div>
      {:else if ($planning)}
        <Timeline order="vertical">
          {#each $planning as episodeObj}
            <TimelineItem title="{episodeObj[0]}">
              <svelte:fragment slot="icon">
                <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                {#if (hasSeasonFirst(episodeObj[1]))}
                  <ExclamationCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                {:else}
                  {#if (isToday(episodeObj[0]))}
                    <BookmarkSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  {:else}
                    <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  {/if}
                {/if}
                </span>
              </svelte:fragment>
              {#each episodeObj[1] as episode}
                <div class="text-sm mb-1">
                  {shortText(episode.show.title)}
                  <Badge color="primary">s:{episode.season || 0} e:{episode.episode}</Badge>
                  {#if (episode.title)}
                    <p class="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">{episode.title}</p>
                  {/if}
                </div>
              {/each}
            </TimelineItem>
          {/each}
        </Timeline>
      {/if}
    </div>
  </GroupItem>
{/if}
