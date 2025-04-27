<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Category } from '../types/Tool';
  
  export let categories: Category[] = [];
  export let selectedCategory: string = 'all';
  
  const dispatch = createEventDispatcher();
  
  function selectCategory(category: string) {
    dispatch('categorySelect', category);
  }
</script>

<div class="flex flex-wrap gap-3 justify-start my-8" id="categories">
  <button 
    class="btn btn-sm {selectedCategory === 'all' ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'btn-ghost'} rounded-full"
    on:click={() => selectCategory('all')}
  >
    All
  </button>
  
  {#each categories as category}
    <button 
      class="btn btn-sm {selectedCategory === category.id ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'btn-ghost'} rounded-full"
      on:click={() => selectCategory(category.id)}
    >
      {category.name}
    </button>
  {/each}
</div>