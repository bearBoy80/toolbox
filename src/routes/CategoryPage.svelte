<script lang="ts">
  import { tools, categories } from '../data/toolsData';
  import ToolGrid from '../components/ToolGrid.svelte';
  import SearchBar from '../components/SearchBar.svelte';
  import { onMount } from 'svelte';
  
  export let category: string = '';
  let filteredTools = tools;
  let searchQuery = '';
  let selectedCategory = category || 'all';
  let currentCategory = categories.find(c => c.id === category) || { name: 'All Tools', id: 'all', color: 'primary' };
  
  function filterTools() {
    filteredTools = tools.filter(tool => {
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
  
  function handleSearch(event: CustomEvent) {
    searchQuery = event.detail;
    filterTools();
  }
  
  onMount(() => {
    filterTools();
    
    // Update meta tags for SEO
    const categoryName = currentCategory.name;
    document.title = `${categoryName} Tools - ToolBox`;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Discover the best ${categoryName.toLowerCase()} tools to enhance your workflow. Compare features, read reviews, and find the perfect tools for your needs.`);
    }

    // Add structured data for the category page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': `${categoryName} Tools`,
      'description': `Collection of ${categoryName.toLowerCase()} tools and resources`,
      'url': `https://toolbox.com/category/${category}`,
      'numberOfItems': filteredTools.length,
      'itemListElement': filteredTools.map((tool, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'SoftwareApplication',
          'name': tool.name,
          'description': tool.description,
          'url': tool.url,
          'applicationCategory': tool.category
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  });
</script>

<div class="container mx-auto px-4 py-8">
  <div class="mb-8">
    <h1 class="text-4xl font-bold mb-4">
      {currentCategory.name}
    </h1>
    <p class="text-base-content/70 text-lg max-w-3xl">
      {#if selectedCategory === 'all'}
        Explore our complete collection of tools across all categories.
      {:else}
        Discover the best {currentCategory.name.toLowerCase()} tools to enhance your workflow.
      {/if}
    </p>
  </div>

  <div class="flex flex-col md:flex-row gap-8">
    <!-- Sidebar with categories -->
    <aside class="w-full md:w-64 shrink-0">
      <div class="sticky top-24">
        <h2 class="text-lg font-semibold mb-4">Categories</h2>
        <div class="flex flex-col gap-2">
          <button 
            class="btn btn-ghost justify-start {selectedCategory === 'all' ? 'bg-primary/10 text-primary' : ''}"
            on:click={() => {
              selectedCategory = 'all';
              filterTools();
            }}
          >
            All Tools
          </button>
          {#each categories as cat}
            <button 
              class="btn btn-ghost justify-start {selectedCategory === cat.id ? 'bg-primary/10 text-primary' : ''}"
              on:click={() => {
                selectedCategory = cat.id;
                filterTools();
              }}
            >
              {cat.name}
            </button>
          {/each}
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <main class="flex-1">
      <div class="mb-6">
        <SearchBar on:search={handleSearch} />
      </div>

      <div class="mb-6 flex items-center justify-between">
        <p class="text-base-content/70">
          Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
        </p>
        <!-- Add sorting options here if needed -->
      </div>

      <ToolGrid tools={filteredTools} />
    </main>
  </div>
</div>