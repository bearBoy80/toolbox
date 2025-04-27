<script lang="ts">
  import { onMount } from 'svelte';
  
  let teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'With over 15 years of experience in tech, Sarah leads our mission to make digital tools more accessible.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'A full-stack developer with a passion for creating intuitive user experiences and scalable solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Emily ensures our tool descriptions and resources are helpful, accurate, and up-to-date.'
    }
  ];

  onMount(() => {
    // Update meta tags for SEO
    document.title = 'About ToolBox - Our Mission and Team';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn about ToolBox\'s mission to simplify tool discovery and meet our team of experts dedicated to helping you find the best digital tools.');
    }

    // Add structured data for the organization
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ToolBox',
      'description': 'Your curated gateway to the digital world\'s most powerful tools.',
      'url': 'https://toolbox.com',
      'employee': teamMembers.map(member => ({
        '@type': 'Person',
        'name': member.name,
        'jobTitle': member.role
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  });
</script>

<div class="container mx-auto px-4 py-12">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-6">About ToolBox</h1>
    
    <div class="prose prose-lg max-w-none mb-12">
      <p class="lead text-xl text-base-content/80 mb-8">
        ToolBox is your curated gateway to the digital world's most powerful tools. We believe in making professional tools accessible, organized, and easy to discover.
      </p>
      
      <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
      <p class="mb-8 text-base-content/70">
        We're on a mission to simplify the way people discover and use digital tools. In today's fast-paced world, finding the right tool shouldn't be a challenge. That's why we've created a platform that brings together the best resources across various categories, making them easily accessible to everyone.
      </p>
      
      <h2 class="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div class="card bg-base-100 shadow-lg">
          <div class="card-body">
            <h3 class="card-title text-primary">Curated Selection</h3>
            <p>Every tool is carefully reviewed and tested before being added to our platform.</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-lg">
          <div class="card-body">
            <h3 class="card-title text-primary">User-Focused</h3>
            <p>Our platform is designed with your needs in mind, making tool discovery intuitive and efficient.</p>
          </div>
        </div>
        
        <div class="card bg-base-100 shadow-lg">
          <div class="card-body">
            <h3 class="card-title text-primary">Always Updated</h3>
            <p>We constantly update our collection to ensure you have access to the latest and best tools.</p>
          </div>
        </div>
      </div>
    </div>
    
    <h2 class="text-2xl font-semibold mb-8">Meet Our Team</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each teamMembers as member}
        <div class="card bg-base-100 shadow-lg">
          <figure class="px-4 pt-4">
            <img src={member.image} alt={member.name} class="rounded-xl w-full h-48 object-cover" />
          </figure>
          <div class="card-body">
            <h3 class="card-title">{member.name}</h3>
            <p class="text-sm text-primary font-medium">{member.role}</p>
            <p class="text-base-content/70">{member.bio}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>