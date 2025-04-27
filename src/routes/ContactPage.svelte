<script lang="ts">
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitted = false;
  
  async function handleSubmit() {
    isSubmitting = true;
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    submitted = true;
    isSubmitting = false;
    formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
</script>

<div class="container mx-auto px-4 py-12">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-6">Contact Us</h1>
    
    <div class="grid md:grid-cols-2 gap-12">
      <div>
        <p class="text-lg text-base-content/80 mb-8">
          Have questions, suggestions, or want to submit a tool? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Email</h3>
              <p class="text-base-content/70">support@toolbox.com</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold">Location</h3>
              <p class="text-base-content/70">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          {#if submitted}
            <div class="text-center py-8">
              <div class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-success">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Message Sent!</h3>
              <p class="text-base-content/70">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          {:else}
            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
              <div class="form-control">
                <label class="label" for="name">
                  <span class="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  bind:value={formData.name} 
                  class="input input-bordered w-full" 
                  required 
                />
              </div>
              
              <div class="form-control">
                <label class="label" for="email">
                  <span class="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  bind:value={formData.email} 
                  class="input input-bordered w-full" 
                  required 
                />
              </div>
              
              <div class="form-control">
                <label class="label" for="subject">
                  <span class="label-text">Subject</span>
                </label>
                <input 
                  type="text" 
                  id="subject"
                  bind:value={formData.subject} 
                  class="input input-bordered w-full" 
                  required 
                />
              </div>
              
              <div class="form-control">
                <label class="label" for="message">
                  <span class="label-text">Message</span>
                </label>
                <textarea 
                  id="message"
                  bind:value={formData.message} 
                  class="textarea textarea-bordered h-32" 
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary w-full {isSubmitting ? 'loading' : ''}" 
                disabled={isSubmitting}
              >
                Send Message
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>