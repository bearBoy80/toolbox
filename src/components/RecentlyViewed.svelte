<script lang="ts">
  import { onMount } from 'svelte';
  import type { Tool } from '../types/Tool';
  
  let recentTools: Tool[] = [];
  
  onMount(() => {
    const storedTools = localStorage.getItem('recentlyViewed');
    if (storedTools) {
      recentTools = JSON.parse(storedTools);
    }
    
    // Set up a listener to refresh when localStorage changes
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  });
  
  function handleStorageChange(event: StorageEvent) {
    if (event.key === 'recentlyViewed') {
      recentTools = JSON.parse(event.newValue || '[]');
    }
  }
</script>

{#if recentTools.length > 0}
  <section class="my-12">
    <h2 class="section-title flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Recently Viewed
    </h2>
    
    <div class="flex gap-4 overflow-x-auto pb-4 snap-x">
      {#each recentTools as tool}
        <div class="snap-start shrink-0 w-64">
          <div class="tool-card h-full">
            <div class="h-24 p-4 flex items-center justify-center bg-gradient-to-br from-{tool.color}-100 to-{tool.color}-50 dark:from-{tool.color}-900 dark:to-{tool.color}-800">
              <img src={tool.icon} alt={tool.name} class="w-10 h-10 object-contain" />
            </div>
            <div class="p-3">
              <h3 class="font-medium text-base">{tool.name}</h3>
              <p class="text-xs opacity-75 truncate">{tool.description}</p>
              <div class="mt-2">
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-sm btn-primary w-full"
                >
                  Open Tool
                </a>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
{/if}