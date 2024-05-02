<script lang="ts">
  import { Alert, Button, Navbar, Progressbar } from 'flowbite-svelte';
  import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
  import { EpisodesApi, MembersApi, PlanningApi, SearchApi, SeasonsApi, ShowsApi } from 'sdk';
  import User from './components/User.svelte';
  import Filter from './components/Filter.svelte';
  import Planning from './components/Planning.svelte';
  import { configuration } from '../lib/environment';
  import store, { registerApis } from '../lib/store';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { AuthenticationApi, BetaseriesIdentifier } from 'sdk';
  import { ApiFetchClient, ExceptionReply, type ApiClient } from '@ama-sdk/core';
  import Groups from './components/Groups.svelte';

  let apiClient: ApiClient | undefined;
  let userId: string | undefined;
  let filter: string = '';
  let displayErrorBanner = false;

  const retrieveToken = () => {
    window.location.href = encodeURI(`https://www.betaseries.com/authorize?client_id=${configuration.client_id}&redirect_uri=${configuration.redirect_uri}`)
  }

  onMount(() => {
    if (!$page.url.searchParams.has('code')) {
      retrieveToken();
    } else {
      const code = $page.url.searchParams.get('code')!;

      const betaseriesIdentifier = new BetaseriesIdentifier({...configuration, code, onFailure: () => {displayErrorBanner = true;}});
      apiClient = new ApiFetchClient({requestPlugins: [betaseriesIdentifier], basePath: configuration.apiBasePath});
      const authApi = new AuthenticationApi(apiClient);
      betaseriesIdentifier.api = authApi;
    }
  });

  $: showsApi = apiClient && new ShowsApi(apiClient);
  $: episodesApi = apiClient && new EpisodesApi(apiClient);
  $: searchApi = apiClient && new SearchApi(apiClient);
  $: seasonsApi = apiClient && new SeasonsApi(apiClient);
  $: planningApi = apiClient && new PlanningApi(apiClient);
  $: membersApi = apiClient && new MembersApi(apiClient);
  $: userId && showsApi && episodesApi && searchApi && seasonsApi && planningApi && membersApi
    ? registerApis.set({userId, showsApi, episodesApi, searchApi, seasonsApi, planningApi, membersApi})
    : undefined;

  $: membersStore = $store?.membersStore;
</script>


{#if apiClient}
  <div class="relative px-3 sm:px-8">
    <Navbar class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b bg-gray-50 border-grey-600">
      <div class="shrink hidden sm:block">
        <User apiClient={apiClient} bind:userId={userId} />
      </div>
      {#if ($membersStore)}
        {@const stats = $membersStore.data?.member.stats}
        <div class="flex-1 px-5 hidden sm:block pt-2 max-w-4xl">
          {#if (!$membersStore.data && $membersStore.fetchStatus !== 'idle')}
            <div></div>
          {:else}
            <Progressbar progress={stats?.progress} size="h-1.5" />
            <div class="text-xs flex">
              <div class="shrink">
                <span class="text-gray-500"><span class="font-bold">{stats?.episodes}</span> seen</span> <span class="mx-2">/</span> <span class="text-primary-600"><span class="font-bold">{stats?.episodes_to_watch}</span> to see</span>
              </div>
              <div class="flex-1 text-right text-gray-400">
                <span class="font-bold">{stats?.progress}</span> %
              </div>
            </div>
          {/if}
        </div>
      {/if}
      <div class="flex w-full sm:w-auto order-2">
        <Filter bind:filter={filter} />
      </div>
    </Navbar>
    <div class="mx-auto container pt-20">
      {#if (displayErrorBanner)}
        <Alert color="red" dismissable class="mb-2">
          <ExclamationCircleSolid slot="icon" class="w-5 h-5" />
          Failed to identify the user.
          <Button slot="close-button" size="xs" on:click={() => retrieveToken()} class="ms-auto">Retry</Button>
        </Alert>
      {/if}
      <div class="flex flex-row">
        <div class="flex-initial shrink-0 w-0 sm:w-1/4 pr-4 hidden sm:block">
          <Planning />
        </div>
        <div class="flex-auto ">
          <Groups filter={filter} />
        </div>
      </div>
    </div>
  </div>
{/if}
