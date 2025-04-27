<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import ToolGrid from './components/ToolGrid.svelte';
  import Hero from './components/Hero.svelte';
  import CategoryFilter from './components/CategoryFilter.svelte';
  import RecentlyViewed from './components/RecentlyViewed.svelte';
  import CategoryPage from './routes/CategoryPage.svelte';
  import AboutPage from './routes/AboutPage.svelte';
  import ContactPage from './routes/ContactPage.svelte';
  import TermsPage from './routes/TermsPage.svelte';
  import PrivacyPage from './routes/PrivacyPage.svelte';
  import CookiesPage from './routes/CookiesPage.svelte';
  import BookmarksPage from './routes/BookmarksPage.svelte';
  import ToolCard from './components/ToolCard.svelte';
  import { tools, categories } from './data/toolsData';
  
  let currentRoute = 'home';
  let routeParams = {};
  let filteredTools = [...tools];
  let selectedCategory = 'all';
  let searchQuery = '';
  let isDarkMode = false;
  
  $: featuredTools = tools.filter(tool => tool.featured);
  $: newTools = tools.slice(-4);
  
  function handleRoute() {
    const path = window.location.pathname;
    if (path.startsWith('/category')) {
      currentRoute = 'category';
      routeParams = { category: path.split('/')[2] };
    } else if (path === '/about') {
      currentRoute = 'about';
    } else if (path === '/contact') {
      currentRoute = 'contact';
    } else if (path === '/terms') {
      currentRoute = 'terms';
    } else if (path === '/privacy') {
      currentRoute = 'privacy';
    } else if (path === '/cookies') {
      currentRoute = 'cookies';
    } else if (path === '/bookmarks') {
      currentRoute = 'bookmarks';
    } else {
      currentRoute = 'home';
      routeParams = {};
    }
  }
  
  function filterTools(category: string) {
    selectedCategory = category;
    if (category === 'all') {
      filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filteredTools = tools.filter(tool => 
        tool.category === category && 
        (tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         tool.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
  }
  
  function handleSearch(event: CustomEvent) {
    searchQuery = event.detail;
    filterTools(selectedCategory);
  }
  
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }
  
  onMount(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    
    handleRoute();
    window.addEventListener('popstate', handleRoute);
    
    return () => {
      window.removeEventListener('popstate', handleRoute);
    };
  });
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-br from-base-100 to-base-200">
  <Header {isDarkMode} {toggleDarkMode} />
  
  <main class="flex-grow">
    {#if currentRoute === 'home'}
      <div class="container mx-auto px-4 py-6">
        <Hero on:search={handleSearch} />
        
        <!-- Featured Tools Section -->
        <section class="my-12">
          <h2 class="section-title flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            Featured Tools
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each featuredTools as tool}
              <div class="animate-fade-in">
                <ToolCard {tool} />
              </div>
            {/each}
          </div>
        </section>
        
        <!-- New Tools Section -->
        <section class="my-12">
          <h2 class="section-title flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            New Tools
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {#each newTools as tool}
              <div class="animate-fade-in">
                <ToolCard {tool} />
              </div>
            {/each}
          </div>
        </section>
        
        <RecentlyViewed />
      </div>
    {:else if currentRoute === 'category'}
      <CategoryPage category={routeParams.category} />
    {:else if currentRoute === 'about'}
      <AboutPage />
    {:else if currentRoute === 'contact'}
      <ContactPage />
    {:else if currentRoute === 'terms'}
      <TermsPage />
    {:else if currentRoute === 'privacy'}
      <PrivacyPage />
    {:else if currentRoute === 'cookies'}
      <CookiesPage />
    {:else if currentRoute === 'bookmarks'}
      <BookmarksPage />
    {/if}
  </main>
  
  <Footer />
</div>