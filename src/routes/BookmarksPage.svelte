<script lang="ts">
  import { bookmarks } from '../stores/bookmarks';
  import ToolCard from '../components/ToolCard.svelte';
  import { onMount } from 'svelte';
  
  onMount(() => {
    document.title = 'My Bookmarks - ToolBox';
  });
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">My Bookmarks</h1>
  
  {#if $bookmarks.length === 0}
    <div class="text-center py-16">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto mb-4 text-primary/50">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
      </svg>
      <h2 class="text-2xl font-semibold mb-2">No bookmarks yet</h2>
      <p class="text-base-content/70">Start bookmarking tools you find interesting!</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each $bookmarks as tool}
        <div class="animate-fade-in">
          <ToolCard {tool} />
        </div>
      {/each}
    </div>
  {/if}
</div>