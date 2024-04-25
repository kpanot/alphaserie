<script lang="ts">
  import { Spinner } from 'flowbite-svelte';
  import type { ApiClient } from '@ama-sdk/core';
  import { MembersApi } from 'sdk';
  import { createEventDispatcher } from 'svelte';

  export let apiClient: ApiClient | undefined;
  export let userId: string | undefined;

	const dispatch = createEventDispatcher<{identified: string}>();

  $: membersApi = apiClient && new MembersApi(apiClient);
  $: memberResult = membersApi?.getMembersInfos({}) as any;
  $: memberResult?.then(({member}: any) => { userId = member.id; dispatch('identified', member.id); });
</script>
{#if membersApi}
  {#await memberResult}
    <div class=''>
      <Spinner size="8" />
    </div>
  {:then {member}}
    <img src={member.avatar} alt="profile" class="border-dashed border-2 border-orange-500 h-10 w-10 rounded-full inline-block"/>
    <span class="ml-2 mt-2 inline-block whitespace-nowrap font-semibold dark:text-white">{member.login}</span>
  {/await}
{/if}
