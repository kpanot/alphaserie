<script lang="ts">
  import User from './components/User.svelte';
  import Filter from './components/Filter.svelte';
  import { configuration } from '../lib/environment';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { AuthenticationApi, BetaseriesIdentifier } from 'sdk';
  import { ApiFetchClient, type ApiClient } from '@ama-sdk/core';
  import Groups from './components/Groups.svelte';

  let apiClient: ApiClient | undefined;
  let userId: string | undefined;
  let filter: string = '';
  onMount(() => {
    if (!$page.url.searchParams.has('code')) {
      window.location.href = encodeURI(`https://www.betaseries.com/authorize?client_id=${configuration.client_id}&redirect_uri=${configuration.redirect_uri}`);
    } else {
      const code = $page.url.searchParams.get('code')!;

      const betaseriesIdentifier = new BetaseriesIdentifier({...configuration, code});
      apiClient = new ApiFetchClient({requestPlugins: [betaseriesIdentifier], basePath: configuration.apiBasePath});
      const authApi = new AuthenticationApi(apiClient);
      betaseriesIdentifier.api = authApi;
    }
  });

</script>

{#if apiClient}
  <div class="relative px-8">
    <Filter bind:filter={filter} />
    <div class="mt-16">
      <div class="flex flex-row">
        <div class="flex-initial shrink-0 w-0 sm:w-1/5 collapse sm:visible">
          <User apiClient={apiClient} bind:userId={userId} />
        </div>
        <div class="flex-auto ">
          <Groups apiClient={apiClient} userId={userId} filter={filter} />
        </div>
      </div>
    </div>
  </div>
{/if}
