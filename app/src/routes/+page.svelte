<script lang="ts">
  import { Alert, Button } from 'flowbite-svelte';
  import { ExclamationCircleSolid } from 'flowbite-svelte-icons';
  import { EpisodesApi, PlanningApi, SearchApi, SeasonsApi, ShowsApi } from 'sdk';
  import User from './components/User.svelte';
  import Filter from './components/Filter.svelte';
  import Planning from './components/Planning.svelte';
  import { configuration } from '../lib/environment';
  import { registerApis } from '../lib/shows.store';
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
  $: userId && showsApi && episodesApi && searchApi && seasonsApi && planningApi
    ? registerApis.set({userId, showsApi, episodesApi, searchApi, seasonsApi, planningApi})
    : undefined;

</script>


{#if apiClient}
  <div class="relative px-3 sm:px-8">
    <Filter bind:filter={filter} />
    <div class="mt-16">
      {#if (displayErrorBanner)}
        <Alert color="red" dismissable class="mb-2">
          <ExclamationCircleSolid slot="icon" class="w-5 h-5" />
          Failed to identify the user.
          <Button slot="close-button" size="xs" on:click={() => retrieveToken()} class="ms-auto">Retry</Button>
        </Alert>
      {/if}
      <div class="flex flex-row">
        <div class="flex-initial shrink-0 w-0 sm:w-1/4 collapse sm:visible pr-4">
          <User apiClient={apiClient} bind:userId={userId} />
          <Planning />
        </div>
        <div class="flex-auto ">
          <Groups filter={filter} />
        </div>
      </div>
    </div>
  </div>
{/if}
