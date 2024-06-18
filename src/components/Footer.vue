<template>
    <footer class="footer">
      <div class="contact-info">
        <p>Contact us: info@potatopal.com</p>
        <p>&copy; 2024 PotatoPal. All rights reserved.</p>
      </div>
      <div class="social-media">
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">Instagram</a>
      </div>
      <div class="privacy-policy">
        <router-link to="/privacy-policy">Privacy Policy</router-link>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #f8f8f8;
    padding: 20px;
    text-align: center;
  }
  .footer div {
    margin: 10px 0;
  }
  </style>
  