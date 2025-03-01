import { createMutation, useQueryClient, createInfiniteQuery, createQuery } from '@tanstack/svelte-query'
import type { EpisodesApi, SeasonsApi, ShowsApi } from 'sdk';
import { derived, writable } from 'svelte/store';
import { LIMIT_SUMMARIZE_PARALLEL } from './constance';

const ARCHIVES_LABEL = 'archives';
const CURRENT_LABEL = 'current';
const EPISODE_LABEL = 'episodes';
const SHOW_LABEL = 'show';
const MEMBER_LABEL = 'member';

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
const shows = (userId: string, showsApi: ShowsApi, episodesApi: EpisodesApi, seasonsApi: SeasonsApi) => {
  const userIdLabel = { userId };
  const client = useQueryClient();

  /**
   * Store for episodes
   * @param showId Show ID
   */
  const episodes = (showId: string) => {
    const showIdLabel = { showId };

    /** Latest episode of the show */
    const latest = createQuery({
      queryKey: [userIdLabel, EPISODE_LABEL, showIdLabel, 'latest'],
      queryFn: () => episodesApi.getEpisodesLatest({ id: showId }) as any as Promise<{ episode: any }>
    });

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
        await client.invalidateQueries({ queryKey: [userIdLabel, EPISODE_LABEL, showIdLabel], refetchType: 'active' });
        await client.invalidateQueries({ queryKey: [userIdLabel, SHOW_LABEL, CURRENT_LABEL], refetchType: isLast ? 'active' : 'none' });
        client.invalidateQueries({ queryKey: [userIdLabel, MEMBER_LABEL], refetchType: 'active' });
      }
    });

    return {
      list,
      watch,
      latest
    };
  };

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

  const refresh = () => {
    client.invalidateQueries({ queryKey: [userIdLabel, MEMBER_LABEL], refetchType: 'active' })
    return client.invalidateQueries({ queryKey: [userIdLabel, SHOW_LABEL], refetchType: 'active' })
  };

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
    markAllAsSeen,
    allShows,
    currentStore,
    archiveStore,
    unarchive,
    archive,
    episodes,
    follow
  }
};

/** Store Type */
export type StoreShow = ReturnType<typeof shows>;
/** Episode sub-store */
export type StoreEpisode = ReturnType<StoreShow['episodes']>;

/**
 * Writable store to define the APIs to use
 */
export const registerShowApis = writable<{ userId: string, showsApi: ShowsApi, episodesApi: EpisodesApi, seasonsApi: SeasonsApi }>();

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
export default derived<typeof registerShowApis, StoreShow>(registerShowApis, ($apis, set) => {
  if ($apis) {
    set(shows($apis.userId, $apis.showsApi, $apis.episodesApi, $apis.seasonsApi));
  }
});
