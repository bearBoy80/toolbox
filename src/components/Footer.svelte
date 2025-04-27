<script lang="ts">
  import { categories } from '../data/toolsData';
  const year = new Date().getFullYear();
</script>

<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <div class="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    </div>
    <p class="mt-2 text-lg font-bold">ToolBox<br/>Discover the best tools for every task</p>
    <p class="opacity-75">Copyright © {year} - All rights reserved</p>
  </div> 
  
  <div>
    <span class="footer-title">Categories</span>
    {#each categories as category}
      <a href="/category/{category.id}" class="link link-hover">{category.name}</a>
    {/each}
  </div> 
  
  <div>
    <span class="footer-title">Company</span> 
    <a href="/about" class="link link-hover">About us</a> 
    <a href="/contact" class="link link-hover">Contact</a> 
    <a href="#" class="link link-hover">Submit a Tool</a> 
    <a href="#" class="link link-hover">Advertise with us</a>
  </div> 
  
  <div>
    <span class="footer-title">Legal</span> 
    <a href="/terms" class="link link-hover">Terms of use</a> 
    <a href="/privacy" class="link link-hover">Privacy policy</a> 
    <a href="/cookies" class="link link-hover">Cookie policy</a>
  </div>
</footer>

<div class="footer footer-center p-4 bg-base-300 text-base-content">
  <div class="flex flex-col md:flex-row items-center gap-2">
    <p>Built with</p>
    <div class="flex gap-3">
      <a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 link link-hover">
        <img src="https://svelte.dev/favicon.png" alt="Svelte" class="w-4 h-4"/>
        Svelte
      </a>
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 link link-hover">
        <img src="https://tailwindcss.com/favicons/favicon.ico" alt="Tailwind CSS" class="w-4 h-4"/>
        Tailwind CSS
      </a>
      <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 link link-hover">
        <img src="https://daisyui.com/favicon.ico" alt="DaisyUI" class="w-4 h-4"/>
        DaisyUI
      </a>
    </div>
  </div>
</div>