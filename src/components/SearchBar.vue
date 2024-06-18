<template>
    <div class="search-bar">
      <input type="text" placeholder="Search for potato recipes..." v-model="query" />
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        query: '',
      };
    },
    methods: {
      search() {
        alert(`Searching for ${this.query}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  input {
    width: 300px;
    padding: 10px;
    margin-right: 10px;
  }
  button {
    padding: 10px;
  }
  </style>
  