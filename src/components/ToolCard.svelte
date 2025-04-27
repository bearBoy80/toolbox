<script lang="ts">
  import type { Tool } from '../types/Tool';
  import { onMount } from 'svelte';
  import { bookmarks, toggleBookmark } from '../stores/bookmarks';
  
  export let tool: Tool;
  
  let mounted = false;
  $: isToolBookmarked = $bookmarks.some(item => item.id === tool.id);
  
  function handleBookmark(event: MouseEvent) {
    event.stopPropagation();
    toggleBookmark(tool);
  }
  
  function handleUse() {
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    if (!recentlyViewed.some((t: Tool) => t.id === tool.id)) {
      recentlyViewed.unshift(tool);
      if (recentlyViewed.length > 5) recentlyViewed.pop();
      localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
    
    window.open(tool.url, '_blank');
  }
  
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
<div 
  class="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 group h-full flex flex-col"
  tabindex="0"
  role="article"
  aria-label={tool.name}
>
  <div class="relative">
    <div class="h-44 p-6 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
      <img 
        src={tool.icon} 
        alt={`${tool.name} icon`}
        class="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110" 
        loading="lazy"
      />
      
      <button 
        class="absolute top-2 right-2 btn btn-circle btn-sm {isToolBookmarked ? 'btn-primary' : 'btn-ghost bg-base-100/50 backdrop-blur-sm'}"
        on:click={handleBookmark}
        aria-label={isToolBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill={isToolBookmarked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </button>
    </div>
  </div>
  
  <div class="p-4 flex flex-col flex-grow">
    <div class="flex items-start justify-between mb-2">
      <h3 class="text-lg font-semibold text-base-content line-clamp-1">{tool.name}</h3>
      <span class="badge badge-primary badge-sm shrink-0 ml-2">{tool.category}</span>
    </div>
    
    <p class="text-base-content/70 text-sm line-clamp-2 mb-4">{tool.description}</p>
    
    <div class="mt-auto">
      <div class="flex gap-2 flex-wrap mb-3">
        {#each tool.tags as tag}
          <span class="badge badge-ghost badge-sm">{tag}</span>
        {/each}
      </div>
      
      <div class="flex justify-between items-center mt-3">
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-xs text-primary/70 hover:text-primary transition-colors"
          aria-label={`Learn more about ${tool.name}`}
        >
          Learn More
        </a>
        <button 
          class="btn btn-primary btn-sm" 
          on:click={handleUse}
          aria-label={`Use ${tool.name}`}
        >
          Use Tool
        </button>
      </div>
    </div>
  </div>
</div>
{/if}