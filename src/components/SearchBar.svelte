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

<div class="relative w-full md:w-96">
  <div class="flex">
    <input 
      type="text" 
      placeholder="Search tools..." 
      class="input input-bordered w-full pr-10 focus:outline-primary" 
      bind:value={searchValue}
      on:keydown={handleKeydown}
    />
    <button 
      class="btn btn-primary ml-2"
      on:click={handleSearch}
      aria-label="Search"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </button>
  </div>
</div>