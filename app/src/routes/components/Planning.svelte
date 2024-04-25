<script lang="ts">
  import { derived } from 'svelte/store';
  import store from '../../lib/shows.store';
  import { Badge, Skeleton, Timeline, TimelineItem } from 'flowbite-svelte';
  import { CalendarWeekSolid, ExclamationCircleSolid } from 'flowbite-svelte-icons';
  import GroupItem from './group/GroupItem.svelte';

  const LimitOfPlanningItemToDisplay = 30;

  $: planningStore = $store?.planningStore;
  $: planning = planningStore && derived(planningStore, ({data}) => {
      return data && data.episodes
        .filter(({ date }) => (new Date(date)).getTime() > Date.now())
        .sort((a: any, b: any) => {
          if (!a.date) {
            return 1;
          } else if (!b.date) {
            return -1;
          } else {
            const res = new Date(a.date).getTime() - new Date(b.date).getTime();
            return res || 0;
          }
        }).slice(0, LimitOfPlanningItemToDisplay);
    });
</script>
{#if ($planningStore)}
  <GroupItem title="In coming" color="black">
    <div class="bg-gray-100 py-3 pr-2 rounded-lg transition-all duration-75 border-transparent border-2">
      {#if ($planningStore && $planningStore.fetchStatus !== 'idle')}
        <div class="m-2 flex-initial">
          <Skeleton />
        </div>
      {:else if ($planning)}
        <Timeline order="vertical">
          {#each $planning as episode}
            <TimelineItem title="{episode.show.title}" date="Released on {episode.date}">
              <svelte:fragment slot="icon">
                <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
                  {#if (episode.episode === 1)}
                    <ExclamationCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  {:else}
                    <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  {/if}
                </span>
              </svelte:fragment>
              <div class="text-sm mb-1">
                <Badge color="primary">s:{episode.season || 0} e:{episode.episode}</Badge>
                {episode.title}
              </div>
              {#if (episode.description)}
                <p class="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">{episode.description}</p>
              {/if}
            </TimelineItem>
          {/each}
        </Timeline>
      {/if}
    </div>
  </GroupItem>
{/if}
