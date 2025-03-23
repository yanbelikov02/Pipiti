<template>
    <div class="product">
      <h4>{{ title }}</h4>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
  });
  </script>
  
  <style scoped>
  .product {
    background: var(--white);
    border-left: 5px solid var(--primary);
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  .product h4 {
    margin-top: 0;
    color: var(--primary-dark);
  }
  </style>