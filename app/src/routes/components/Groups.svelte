<script lang="ts">
  import GroupArchived from "./group/archive/GroupArchived.svelte";
  import GroupCurrent from './group/current/GroupCurrent.svelte';

  export let filter: string | undefined;
</script>

<GroupCurrent filter={filter} />
<GroupArchived filter={filter} />
