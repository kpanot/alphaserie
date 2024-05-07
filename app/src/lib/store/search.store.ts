import { createQuery } from '@tanstack/svelte-query'
import type { SearchApi } from 'sdk';
import { derived, writable } from 'svelte/store';
import { LIMIT_SEARCH_RESULT } from './constance';

const SEARCH_LABEL = 'search';

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
const search = (searchApi: SearchApi) => {
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

  return {
    search
  }
};

/** Store Type */
export type StoreSearch = ReturnType<typeof search>;

/**
 * Writable store to define the APIs to use
 */
export const registerSearchApis = writable<{ searchApi: SearchApi }>();

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
export default derived<typeof registerSearchApis, StoreSearch>(registerSearchApis, ($apis, set) => {
  if ($apis) {
    set(search($apis.searchApi));
  }
});
