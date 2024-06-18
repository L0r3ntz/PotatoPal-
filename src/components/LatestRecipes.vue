<template>
    <section class="latest-recipes">
      <h2>Latest Recipes</h2>
      <ul>
        <li v-for="recipe in latestRecipes" :key="recipe.id">
          <img :src="recipe.thumbnail" :alt="recipe.title">
          <span>{{ recipe.title }}</span>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    name: 'LatestRecipes',
    data() {
      return {
        latestRecipes: [
          { id: 1, title: 'Mashed Potatoes', thumbnail: 'path/to/thumb1.jpg' },
          { id: 2, title: 'Potato Salad', thumbnail: 'path/to/thumb2.jpg' },
          // Add more recipes here...
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .latest-recipes {
    margin: 20px;
  }
  .latest-recipes ul {
    list-style-type: none;
    padding: 0;
  }
  .latest-recipes li {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  .latest-recipes img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }
  </style>
  