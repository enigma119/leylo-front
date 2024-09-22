<!-- src/lib/components/CityGrid.svelte -->
<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Card, CardContent } from "$lib/components/ui/card";
  
    const cities = [
      { name: 'Point E', image: 'https://www.keur-immo.com/wp-content/uploads/2023/07/dakar-point-e.jpeg' },
      { name: 'Dakar Plateau', image: 'https://media.istockphoto.com/id/1478392916/photo/bceao-building-and-the-minaret-of-the-grand-mosque-dakar-senegal.jpg?s=2048x2048&w=is&k=20&c=-xSQQ8Ai6HnNfDXRsbEfzwxaYcmqJOLI9x25cn3xr4E=' },
      { name: 'Foire', image: 'https://mediaim.expedia.com/destination/2/70f1a717f41b3241140d53d316fab051.jpg?impolicy=fcrop&w=400&h=225&q=mediumLow' },
      { name: 'Mermoz', image: 'https://media.istockphoto.com/id/533552225/photo/the-mosque-of-divinity.jpg?s=1024x1024&w=is&k=20&c=AuiBppdBXXytUvLJvobRsfvEIFXkiNwJPQP7EOAn9XY=' },
      { name: 'Mariste', image: 'https://getran.com/wp-content/uploads/2016/09/axa212.jpg' },
      { name: 'Mbao', image: 'https://media.bazarafrique.com/upload/post/623158a9d25a5828120264.jpg' },
      { name: 'Keur Massar', image: 'https://lequotidien.sn/wp-content/uploads/2024/05/Logements-sociaux.jpg' },
      { name: 'Medina', image: 'https://www.senenews.com/wp-content/uploads/2022/02/33101900-30650098.jpg' },
      { name: 'Mbour', image: 'https://q-xx.bstatic.com/xdata/images/city/608x352/896569.webp?k=520877a94b46b6fcfac228ee7399405ed267ccb15be8e46c881d403216f1e3c4&o=' },
      { name: 'Thiès', image: 'https://images.pexels.com/photos/4249014/pexels-photo-4249014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },      
    ];
  </script>
  

  <section class="bg-gray-100 py-10">
    <div class="container mx-auto max-w-6xl px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Explorez les meilleures offres dans toutes les villes du Sénégal</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {#each cities as city}
          <Card class="h-28 relative rounded-md">
            <div class="absolute inset-0 bg-[#38419485] opacity-50 rounded-md"></div>
            <div class="h-full rounded-md w-full bg-cover bg-center" style="background-image: url({city.image});">
              <CardContent class="p-3 h-full flex justify-center items-center relative z-10">
                <p class="p-2  rounded-md bg-destructive text-center text-primary font-semibold">{city.name}</p>
              </CardContent>
            </div>
          </Card>
        {/each}
      </div>
      <div class="mt-10 text-center">
        <Button variant="outline" class="bg-primary text-white" size="lg">Voir toutes les villes</Button>
      </div>
    </div>
  </section>

  