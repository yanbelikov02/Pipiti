<template>
    <nav class="menu">
      <a href="/#products">Продукты</a>
      <a href="/#about">О компании</a>
      <a href="/#video">Видео</a>
      <a href="/#contact">Контакты</a>
      <router-link to="/parser">Аудио парсер</router-link>
    </nav>
  </template>
  
  <script setup>
  // логики пока нет
  </script>
  
  <style scoped>
  .menu {
    display: flex;
    gap: 20px;
  }
  .menu a {
    color: var(--white);
    text-decoration: none;
    font-size: 14px;
    transition: opacity 0.2s;
  }
  .menu a:hover {
    opacity: 0.8;
  }
  </style>