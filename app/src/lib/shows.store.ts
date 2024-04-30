import { createMutation, useQueryClient, createInfiniteQuery, createQuery } from '@tanstack/svelte-query'
import type { EpisodesApi, SearchApi, SeasonsApi, ShowsApi, PlanningApi } from 'sdk';
import { derived, writable } from 'svelte/store';

const LIMIT_SUMMARIZE_PARALLEL = 199;
const LIMIT_SEARCH_RESULT = 50;

const ARCHIVES_LABEL = 'archives';
const CURRENT_LABEL = 'current';
const EPISODE_LABEL = 'episodes';
const SHOW_LABEL = 'show';
const SEARCH_LABEL = 'search';
const PLANNING_LABEL = 'planning';

/**
 * Filter the shows to display based on their names
 * @param filter text to match in names
 */
export const filterShow = (filter: string | undefined) => {
  const cleanFilter = filter?.toLowerCase();
  return (show: any): boolean => !cleanFilter ||
    show.title.toLowerCase().includes(cleanFilter) ||
    show.original_title?.toLowerCase().includes(cleanFilter) ||
    Object.values<string>(show.alias || {}).some((alias) => alias.includes(cleanFilter));
}

/**
 * Determine if the show has currently episode to see
 * @param show
 */
export const hasNextToSee = (show: any) => {
  const date = show?.userVisited?.next?.date;
  return isToSee(date);
};

/**
 * Determine if the date is already passed
 * @param date
 */
export const isToSee = (date?: string) => {
  return !!date && new Date(date) <= new Date();
};

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
const shows = (userId: string, showsApi: ShowsApi, episodesApi: EpisodesApi, searchApi: SearchApi, seasonsApi: SeasonsApi, planningApi: PlanningApi) => {
  const userIdLabel = { userId };
  const client = useQueryClient();

  const search = (searchText: string) => {
    const searchTextLabel = { searchText };

    /** List of the episodes of the show  */
    const list = createQuery({
      queryKey: [SEARCH_LABEL, searchTextLabel],
      queryFn: () => searchApi.getSearchShows({ text: searchText, limit: `${LIMIT_SEARCH_RESULT}` }) as any as Promise<{ shows: any[] }>
    });

    return {
      list
    };
  }

  /**
   * Store for episodes
   * @param showId Show ID
   */
  const episodes = (showId: string) => {
    const showIdLabel = { showId };

    /** List of the episodes of the show  */
    const list = createQuery({
      queryKey: [userIdLabel, EPISODE_LABEL, showIdLabel],
      queryFn: () => showsApi.getShowsEpisodes({ id: showId }) as any as Promise<{ episodes: any }>
    });

    /** Determine if an episode has been watched or not */
    const watch = createMutation({
      mutationFn: ({ id, watch }: { id: string, watch: boolean, isLast?: boolean }) => watch ? episodesApi.postEpisodesWatched({ id }) : episodesApi.deleteEpisodesWatched({ id }),
      onSuccess: async (_data, { isLast }) => {
        console.log(isLast);
        await client.invalidateQueries({ queryKey: [userIdLabel, EPISODE_LABEL, showIdLabel], refetchType: 'active' })
        await client.invalidateQueries({ queryKey: [userIdLabel, SHOW_LABEL, CURRENT_LABEL], refetchType: isLast ? 'active' : 'none' })
      }
    });

    return {
      list,
      watch
    };
  };

  const getFormattedMonth = (d: Date = new Date()) => {
    const month = (d.getMonth() % 12) + 1;
    console.log(`${d.getFullYear()}-${(month < 10 ? '0' : '')}${month}`)
    return `${d.getFullYear()}-${(month < 10 ? '0' : '')}${month}`;
  };

  const now = new Date();
  const formattedDate = getFormattedMonth(now);
  const formattedDateNextMonth = getFormattedMonth(new Date(now.setMonth(now.getMonth() + 1)));

  /** Planning of  */
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

  /** Archived show store */
  const archiveStore = derived(
    createInfiniteQuery({
      queryKey: [userIdLabel, SHOW_LABEL, ARCHIVES_LABEL],
      initialPageParam: { offset: 0 },
      getNextPageParam: (lastPage: any, _allPages, lastPageParam) => lastPage.shows.length === LIMIT_SUMMARIZE_PARALLEL ? { offset: lastPageParam.offset + 1 } : undefined,
      queryFn: ({pageParam}) => {
        return showsApi.getShowsMember({
          offset: `${(pageParam.offset as number) * LIMIT_SUMMARIZE_PARALLEL}`,
          id: userId,
          status: 'archived',
          summary: 'true',
          includes: 'userVisited',
          limit: `${LIMIT_SUMMARIZE_PARALLEL}`
        }) as any as Promise<{shows: any}>;
      }
    }),
    ($store) => {
      if ($store.hasNextPage) {
        $store.fetchNextPage();
      }
      return $store;
    }
  );

  /** Currently followed show store */
  const currentStore = derived(
    createInfiniteQuery({
      queryKey: [userIdLabel, SHOW_LABEL, CURRENT_LABEL],
      initialPageParam: { offset: 0 },
      getNextPageParam: (lastPage: any, _allPages, lastPageParam) => lastPage.shows.length === LIMIT_SUMMARIZE_PARALLEL ? { offset: lastPageParam.offset + 1 } : undefined,
      queryFn: ({ pageParam }) => {
        return showsApi.getShowsMember({
          offset: `${(pageParam.offset as number) * LIMIT_SUMMARIZE_PARALLEL}`,
          id: userId,
          order: 'last_seen',
          excluded_status: 'archived',
          summary: 'true',
          includes: 'seasons,userVisited',
          limit: `${LIMIT_SUMMARIZE_PARALLEL}`
        }) as any as Promise<{ shows: any }>;
      }
    }),
    ($store) => {
      if ($store.hasNextPage) {
        $store.fetchNextPage();
      }
      return $store;
    }
  );

  const refresh = () => client.invalidateQueries({ queryKey: [userIdLabel, SHOW_LABEL], refetchType: 'active' });

  /** Action to unarchive the show */
  const unarchive = createMutation({
    mutationFn: (id: string) => showsApi.deleteShowsArchive({ id }),
    onSuccess: () => refresh()
  });

  /** Action to archive the show */
  const archive = createMutation({
    mutationFn: (id: string) => showsApi.postShowsArchive({ id }),
    onSuccess: () => refresh()
  });

  /** Mark the given seasons as seen */
  const markAllAsSeen = createMutation({
    mutationFn: ({ id, seasons }: { id: string, seasons: string[] }) => Promise.all(seasons.map((season) => seasonsApi.postSeasonsWatched({id, season}))),
    onSuccess: async (_data, {id}) => {
      client.invalidateQueries({ queryKey: [userIdLabel, SHOW_LABEL, CURRENT_LABEL], refetchType: 'active' });
      await client.invalidateQueries({ queryKey: [userIdLabel, EPISODE_LABEL, { showId: id }], refetchType: 'active' });
    }
  });

  const allShows = derived([currentStore, archiveStore], ([current, archive]) => {
    return [
      ...(current?.data?.pages || []),
      ...(archive?.data?.pages || [])
    ].map((page) => page.shows).flat();
  });

  /** Action to follow a show */
  const follow = createMutation({
    mutationFn: (id: string) => showsApi.postShowsShow({ id }),
    onSuccess: () => refresh()
  });

  return {
    planningStore,
    markAllAsSeen,
    allShows,
    currentStore,
    archiveStore,
    unarchive,
    archive,
    episodes,
    search,
    follow
  }
};

/** Store Type */
export type Store = ReturnType<typeof shows>;
/** Episode sub-store */
export type StoreEpisode = ReturnType<Store['episodes']>;

/**
 * Writable store to define the APIs to use
 */
export const registerApis = writable<{ userId: string, showsApi: ShowsApi, episodesApi: EpisodesApi, searchApi: SearchApi, seasonsApi: SeasonsApi, planningApi: PlanningApi }>();

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
export default derived<typeof registerApis, Store>(registerApis, ($apis, set) => {
  if ($apis) {
    set(shows($apis.userId, $apis.showsApi, $apis.episodesApi, $apis.searchApi, $apis.seasonsApi, $apis.planningApi));
  }
});
