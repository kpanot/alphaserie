<script lang="ts">
  import { Badge } from "flowbite-svelte";

  export let canHide: boolean = false;
  export let count: string | null;
  export let title: string;
  export let color: 'orange' | 'gray' | 'green' | 'black' | 'primary';

  const textColorMap = {
    black: 'text-black',
    orange: 'text-orange-600',
    primary: 'text-primary-600',
    green: 'text-green-500',
    gray: 'text-gray-400'
  };

  const lineColorMap = {
    black: 'border-black',
    orange: 'border-orange-600',
    primary: 'border-primary-600',
    green: 'border-green-500',
    gray: 'border-gray-400'
  };
</script>

<div class="mb-4">
  <div class="flex">
    <div class="flex-1">
      <h2 class="{textColorMap[color]} text-2xl inline-block">{title}</h2>
      {#if count}
        <Badge rounded color="dark">{count}</Badge>
      {/if}
    </div>
    <div class="flex-none">
      <slot name="command"></slot>
    </div>
  </div>
  <hr class="border-1 {lineColorMap[color]} mb-3" />
  <div class="mb-4">
    {#if !canHide || (typeof count !== 'undefined' && count !== null && +count > 0)}
      <slot></slot>
    {:else}
      <div class="text-center italic text-slate-400">
        Nothing to show
      </div>
    {/if}
  </div>
</div>
