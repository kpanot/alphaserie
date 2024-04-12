import { createMutation, useQueryClient, createInfiniteQuery, createQuery } from '@tanstack/svelte-query'
import type { EpisodesApi, ShowsApi } from 'sdk';
import { derived,  } from 'svelte/store';

const LIMIT_SUMMARIZE_PARALLEL = 199;

const ARCHIVES_LABEL = 'archives';
const CURRENT_LABEL = 'current';
const EPISODE_LABEL = 'episodes';
const EPISODE_SHOW = 'show';

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
const shows = (userId: string, showsApi: ShowsApi, episodesApi: EpisodesApi) => {
  const userIdLabel = { userId };
  const client = useQueryClient();

  /**
   * Store for episodes
   * @param showId Show ID
   */
  const episodes = (showId: string) => {
    const showIdLabel = { showId };

    /**
     * List of the episodes of the show
     */
    const list = createQuery({
      queryKey: [userIdLabel, EPISODE_LABEL, showIdLabel],
      queryFn: () => showsApi.getShowsEpisodes({ id: showId }) as any as Promise<{ episodes: any }>
    });

    /** Determine if an episode has been watched or not */
    const watch = createMutation({
      mutationFn: ({ id, watch }: { id: string, watch: boolean }) => watch ? episodesApi.postEpisodesWatched({ id }) : episodesApi.deleteEpisodesWatched({ id }),
      onSuccess: () => client.invalidateQueries({ queryKey: [userIdLabel, EPISODE_LABEL, showIdLabel], refetchType: 'active' })
    });

    return {
      list,
      watch
    };
  };

  /** Archived show store */
  const archiveStore = derived(
    createInfiniteQuery({
      queryKey: [userIdLabel, EPISODE_SHOW, ARCHIVES_LABEL],
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
      queryKey: [userIdLabel, EPISODE_SHOW, CURRENT_LABEL],
      initialPageParam: { offset: 0 },
      getNextPageParam: (lastPage: any, _allPages, lastPageParam) => lastPage.shows.length === LIMIT_SUMMARIZE_PARALLEL ? { offset: lastPageParam.offset + 1 } : undefined,
      queryFn: ({ pageParam }) => {
        return showsApi.getShowsMember({
          offset: `${(pageParam.offset as number) * LIMIT_SUMMARIZE_PARALLEL}`,
          id: userId,
          order: 'last_seen',
          excluded_status: 'archived',
          summary: 'true',
          includes: 'userVisited',
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

  const refresh = () => client.invalidateQueries({ queryKey: [userIdLabel, EPISODE_SHOW], refetchType: 'active' });

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

  return {
    currentStore,
    archiveStore,
    unarchive,
    archive,
    episodes
  }
};

/** Store Type */
export type Store = ReturnType<typeof shows>;
/** Episode sub-store */
export type StoreEpisode = ReturnType<Store['episodes']>;

let cache!: Store;

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
export default (userId: string, showsApi: ShowsApi, episodesApi: EpisodesApi) => (cache ||= shows(userId, showsApi, episodesApi));
