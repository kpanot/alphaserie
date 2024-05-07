import { createQuery } from '@tanstack/svelte-query'
import type { PlanningApi } from 'sdk';
import { derived, writable } from 'svelte/store';

const PLANNING_LABEL = 'planning';

/**
 * Store of Planning
 * @param userId ID of the logged used
 * @param planningApi Planning API instance
 */
const planning = (userId: string, planningApi: PlanningApi) => {
  const userIdLabel = { userId };

  const getFormattedMonth = (d: Date = new Date()) => {
    const month = (d.getMonth() % 12) + 1;
    console.log(`${d.getFullYear()}-${(month < 10 ? '0' : '')}${month}`)
    return `${d.getFullYear()}-${(month < 10 ? '0' : '')}${month}`;
  };

  const now = new Date();
  const formattedDate = getFormattedMonth(now);
  const formattedDateNextMonth = getFormattedMonth(new Date(now.setMonth(now.getMonth() + 1)));

  /** Planning of the user */
  const planningStore = createQuery({
    queryKey: [userIdLabel, PLANNING_LABEL],
    queryFn: async () => {
      const res = await Promise.all([
        planningApi.getPlanningMember({ month: formattedDate, id: userId, unseen: 'true' }) as any as Promise<{ episodes: any[] }>,
        planningApi.getPlanningMember({ month: formattedDateNextMonth, id: userId, unseen: 'true' }) as any as Promise<{ episodes: any[] }>
       ]);
      return res.reduce(({ episodes }, acc) => {
        acc.episodes = [...acc.episodes, ...episodes];
        return acc;
      }, { episodes: [] } as { episodes: any[]});
    }
  });

  return {
    planningStore
  }
};

/**
 * Writable store to define the APIs to use
 */
export const registerPlanningApis = writable<{ userId: string, planningApi: PlanningApi }>();

/** Planning Type */
export type StorePlanning = ReturnType<typeof planning>;

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
export default derived<typeof registerPlanningApis, StorePlanning>(registerPlanningApis, ($apis, set) => {
  if ($apis) {
    set(planning($apis.userId, $apis.planningApi));
  }
});
