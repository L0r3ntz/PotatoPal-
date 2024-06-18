<template>
    <section class="featured-recipes">
      <h2>Featured Recipes</h2>
      <div class="recipes">
        <div v-for="recipe in featuredRecipes" :key="recipe.id" class="recipe">
          <img :src="recipe.image" :alt="recipe.title">
          <h3>{{ recipe.title }}</h3>
          <p>{{ recipe.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FeaturedRecipes',
    data() {
      return {
        featuredRecipes: [
          { id: 1, title: 'Baked Potato', description: 'A simple and delicious baked potato.', image: 'path/to/image1.jpg' },
          { id: 2, title: 'Potato Soup', description: 'Warm and creamy potato soup.', image: 'path/to/image2.jpg' },
          // Add more recipes here...
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .featured-recipes {
    margin: 20px;
  }
  .recipes {
    display: flex;
    gap: 20px;
  }
  .recipe img {
    width: 150px;
    height: 100px;
    object-fit: cover;
  }
  .recipe {
    flex: 1;
  }
  </style>
  