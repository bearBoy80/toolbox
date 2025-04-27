<script lang="ts">
  import type { Tool } from '../types/Tool';
  import ToolCard from './ToolCard.svelte';
  
  export let tools: Tool[] = [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 mb-12">
  {#each tools as tool, i}
    <div class="animate-fade-in" style="animation-delay: {i * 50}ms">
      <ToolCard {tool} />
    </div>
  {/each}
  
  {#if tools.length === 0}
    <div class="col-span-full text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-4 text-primary opacity-50">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <h3 class="text-xl font-semibold mb-2">No tools found</h3>
      <p class="text-base opacity-75">Try adjusting your search or filter criteria</p>
    </div>
  {/if}
</div>