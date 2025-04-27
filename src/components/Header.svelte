<script lang="ts">
  import { bookmarks } from '../stores/bookmarks';
  
  export let isDarkMode: boolean;
  export let toggleDarkMode: () => void;
  
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function navigate(path: string) {
    window.history.pushState({}, '', path);
    const popStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(popStateEvent);
    isMenuOpen = false;
  }
</script>

<header class="bg-base-100 shadow-md sticky top-0 z-50">
  <div class="container mx-auto px-4">
    <div class="navbar py-3">
      <div class="navbar-start">
        <button on:click={() => navigate('/')} class="flex items-center">
          <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <span class="text-2xl font-bold text-primary">ToolBox</span>
        </button>
      </div>
      
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><button on:click={() => navigate('/')} class="font-medium">Home</button></li>
          <li><button on:click={() => navigate('/category/all')} class="font-medium">Categories</button></li>
          <li><button on:click={() => navigate('/about')} class="font-medium">About</button></li>
          <li><button on:click={() => navigate('/contact')} class="font-medium">Contact</button></li>
        </ul>
      </div>
      
      <div class="navbar-end">
        <button 
          class="btn btn-circle btn-ghost mr-2"
          on:click={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {#if isDarkMode}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          {/if}
        </button>
        
        <button 
          class="btn btn-primary hidden md:flex gap-2"
          on:click={() => navigate('/bookmarks')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
          </svg>
          Bookmarks ({$bookmarks.length})
        </button>
        
        <div class="dropdown dropdown-end lg:hidden">
          <button 
            tabindex="0" 
            class="btn btn-ghost" 
            on:click={toggleMenu}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {#if isMenuOpen}
            <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><button on:click={() => navigate('/')}>Home</button></li>
              <li><button on:click={() => navigate('/category/all')}>Categories</button></li>
              <li><button on:click={() => navigate('/about')}>About</button></li>
              <li><button on:click={() => navigate('/contact')}>Contact</button></li>
              <li>
                <button 
                  class="flex items-center gap-2"
                  on:click={() => navigate('/bookmarks')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                  Bookmarks ({$bookmarks.length})
                </button>
              </li>
            </ul>
          {/if}
        </div>
      </div>
    </div>
  </div>
</header>