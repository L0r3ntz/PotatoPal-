<template>
    <header class="header">
      <img src="@/assets/logo.svg" alt="PotatoPal Logo" class="logo">
      <nav class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/recipes">Recipes</router-link></li>
          <li><router-link to="/community">Community</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8;
  }
  .nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  .nav ul li {
    margin: 0;
  }
  .logo {
    height: 50px;
  }
  </style>
  