<script lang="ts">
  import type { ApiClient } from '@ama-sdk/core';
  import { EpisodesApi, ShowsApi } from 'sdk';
  import GroupArchived from "./group/archive/GroupArchived.svelte";
  import GroupCurrent from './group/current/GroupCurrent.svelte';
  import showsStore from './group/shows.store';

  export let apiClient: ApiClient | undefined;
  export let userId: string | undefined;
  export let filter: string | undefined;

  let showsApi: ShowsApi | undefined;

  $: showsApi = apiClient && new ShowsApi(apiClient);
  $: episodeApi = apiClient && new EpisodesApi(apiClient);
  $: store = userId && showsApi && episodeApi ? showsStore(userId, showsApi, episodeApi) : undefined;
</script>

<GroupCurrent store={store} filter={filter} />
<GroupArchived store={store} filter={filter} />
