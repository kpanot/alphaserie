<svelte:options customElement="alpha-series" />

<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
  import { EpisodesApi, SeasonsApi, ShowsApi, BetaseriesWithToken } from 'sdk';
  import Groups from './components/Groups.svelte';

  import { configuration } from '../lib/environment';
  import { registerShowApis } from 'store/show.store';
  import { ApiFetchClient } from "@ama-sdk/core";

  const { betaseries_user_id } = window as any as {betaseries_user_id: string} ;
  const betaseriesWithToken = new BetaseriesWithToken({key: configuration.betaseries_official_api_key});
  const apiClient = new ApiFetchClient({requestPlugins: [betaseriesWithToken], basePath: configuration.apiBasePath});

  const showsApi = apiClient && new ShowsApi(apiClient);
  const episodesApi = apiClient && new EpisodesApi(apiClient);
  const seasonsApi = apiClient && new SeasonsApi(apiClient);

  if (betaseries_user_id && showsApi && episodesApi && seasonsApi) {
    registerShowApis.set({userId: betaseries_user_id, showsApi, episodesApi, seasonsApi});
  }

</script>

<Tabs tabStyle="underline">
  <TabItem open title="Simplified">
    <Groups filter={undefined} />
  </TabItem>
  <TabItem title="Current">
    <slot />
  </TabItem>
</Tabs>
