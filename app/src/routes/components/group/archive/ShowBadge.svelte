<script lang="ts">
  import { Badge, Spinner } from "flowbite-svelte";
  import { ArrowUpOutline } from "flowbite-svelte-icons";
  import type { BadgeProps } from "flowbite-svelte/Badge.svelte";
  import { createEventDispatcher } from "svelte";

  export let show: any;
  export let isLoading: boolean = false;
  export let color: BadgeProps['color'];

  const badgeClass: Record<string, string> = {
    dark: 'hover:border-slate-300',
    green: 'hover:border-green-300',
    primary: 'hover:border-primary-500'
  }

  const buttonClass: Record<string, string> = {
    dark: 'bg-gray-300 text-white dark:text-gray-800 hover:bg-gray-400 hover:text-gray',
    green: 'bg-green-300 text-white dark:text-green-800 hover:bg-green-400 hover:text-green',
    primary: 'bg-primary-500 text-white dark:text-primary-800 hover:bg-primary-600 hover:text-primary'
  }

  const dispatch = createEventDispatcher();
</script>
{#if show}
  <Badge dismissable color="{color}" class="flex-initial transition-all duration-75 ml-2 mb-2 border-transparent border-2 {badgeClass[color || 'dark']}">
    <a href="https://www.betaseries.com/serie/{show.slug}" target="_blank">{show.title}</a>
    <div slot="close-button">
      {#if isLoading}
        <div class="ml-2">
          <Spinner size={4} />
        </div>
      {:else}
        <button on:click={() => dispatch('unarchive')} title="Unarchive" class="inline-flex transition-all duration-100 items-center rounded-full p-0.5 my-0.5 ms-1.5 -me-1.5 text-sm {buttonClass[color || 'dark']}" aria-label="Unarchive">
          <ArrowUpOutline class="h-3 w-3" />
          <span class="sr-only">Unarchive</span>
        </button>
      {/if}
    </div>
  </Badge>
{/if}
