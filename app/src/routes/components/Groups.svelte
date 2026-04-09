<script lang="ts">
  import GroupArchived from "./group/archive/GroupArchived.svelte";
  import GroupCurrent from './group/current/GroupCurrent.svelte';
  import GroupSearch from './group/search/GroupSearch.svelte';

  export let filter: string | undefined;
</script>

<GroupSearch filter={filter} />
<GroupCurrent filter={filter} />
<GroupArchived filter={filter} />
