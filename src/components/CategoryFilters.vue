<template>
    <div class="category-filters">
      <button v-for="category in categories" :key="category" @click="filterByCategory(category)">
        {{ category }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryFilters',
    data() {
      return {
        categories: ['Appetizers', 'Main Courses', 'Desserts', 'Snacks'],
      };
    },
    methods: {
      filterByCategory(category) {
        alert(`Filtering by category: ${category}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .category-filters {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }
  button {
    padding: 10px;
  }
  </style>
  