<!-- src/lib/components/CityGrid.svelte -->
<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent } from "$lib/components/ui/card";
  
    const cities = [
      { name: 'Paris', image: '/path-to-paris-image.jpg' },
      { name: 'Bordeaux', image: '/path-to-bordeaux-image.jpg' },
      // Add other cities...
    ];
  </script>
  
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Louez pour un mois minimum, en France et en Belgique</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {#each cities as city}
          <Card>
            <CardContent class="p-0">
              <img src={city.image} alt={city.name} class="w-full h-32 object-cover" />
              <p class="p-4 text-center font-semibold">{city.name}</p>
            </CardContent>
          </Card>
        {/each}
      </div>
      <div class="mt-10 text-center">
        <Button variant="outline" size="lg">Voir toutes les villes</Button>
      </div>
    </div>
  </section>