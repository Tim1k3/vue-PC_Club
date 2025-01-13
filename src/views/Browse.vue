<template>
    <div>
      <FeaturedGames />
      <TopDownloaded />
    </div>
  </template>
  
  <script>
  import FeaturedGames from '@/components/FeaturedGames.vue';
  import TopDownloaded from '@/components/TopDownloaded.vue';
  
  export default {
    name: 'Browse',
    components: {
      FeaturedGames,
      TopDownloaded
    }
  };
  </script>
  