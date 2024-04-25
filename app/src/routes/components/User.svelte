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
<div class="hidden">
  {#if membersApi}
    {#await memberResult}
      <div class='m-auto text-center mt-4'>
        <Spinner size="10" />
      </div>
    {:then {member}}
      <img src={member.avatar} alt="profile" class="m-auto border-dashed border-4 border-orange-500 h-28 w-28 rounded-full"/>
      <div class="mt-2 self-center whitespace-nowrap font-semibold dark:text-white text-center">{member.login}</div>
    {/await}
  {/if}
</div>
