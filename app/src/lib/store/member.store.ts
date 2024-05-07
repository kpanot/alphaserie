import { createQuery } from '@tanstack/svelte-query'
import type { MembersApi } from 'sdk';
import { derived, writable } from 'svelte/store';

const MEMBER_LABEL = 'member';

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param membersApi Member API instance
 */
const members = (userId: string, membersApi: MembersApi) => {
  const userIdLabel = { userId };

  /** information relative to the user  */
  const members = createQuery({
    queryKey: [userIdLabel, MEMBER_LABEL],
    queryFn: () => membersApi.getMembersInfos({ id: userId }) as any as Promise<{ member: { stats: any } }>
  });

  return {
    members
  }
};

/** Store Type */
export type StoreMember = ReturnType<typeof members>;

/**
 * Writable store to define the APIs to use
 */
export const registerMemberApis = writable<{ userId: string, membersApi: MembersApi }>();

/**
 * Store of Shows
 * @param userId ID of the logged used
 * @param showsApi Show API instance
 * @param episodesApi Episode API instance
 */
export default derived<typeof registerMemberApis, StoreMember>(registerMemberApis, ($apis, set) => {
  if ($apis) {
    set(members($apis.userId, $apis.membersApi));
  }
});
