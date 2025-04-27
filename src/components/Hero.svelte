<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  let searchValue = '';
  
  function handleSearch() {
    dispatch('search', searchValue);
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
</script>

<section class="py-10 px-4 sm:px-6 md:px-8 lg:px-10 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Discover</span> the best tools for every task
    </h1>
    
    <p class="text-lg mb-8 max-w-2xl mx-auto text-base-content/80">
      Your curated collection of the most useful online tools and resources, all in one place. Find exactly what you need, when you need it.
    </p>
    
    <div class="flex justify-center mb-10">
      <div class="relative w-full max-w-2xl">
        <input 
          type="text" 
          placeholder="Search for tools..." 
          class="input input-lg bg-base-100 w-full pr-32 border-2 border-primary/20 focus:border-primary/40 transition-colors"
          bind:value={searchValue}
          on:keydown={handleKeydown}
        />
        <button 
          class="btn btn-primary btn-lg absolute right-0 top-0 rounded-l-none"
          on:click={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
    
    <div class="flex flex-wrap justify-center gap-3">
      <span class="text-sm font-medium text-base-content/60">Popular searches:</span>
      {#each ['productivity', 'design', 'development', 'ai', 'marketing'] as tag}
        <a 
          href="#{tag}" 
          class="text-sm font-medium text-primary/70 hover:text-primary transition-colors"
        >
          #{tag}
        </a>
      {/each}
    </div>
  </div>
</section>