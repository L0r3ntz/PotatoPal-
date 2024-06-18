<template>
    <div class="home">
      <Header />
      <SearchBar />
      <FeaturedRecipes />
      <CategoryFilters />
      <LatestRecipes />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import FeaturedRecipes from '@/components/FeaturedRecipes.vue';
  import CategoryFilters from '@/components/CategoryFilters.vue';
  import LatestRecipes from '@/components/LatestRecipes.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'Home',
    components: {
      Header,
      SearchBar,
      FeaturedRecipes,
      CategoryFilters,
      LatestRecipes,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  