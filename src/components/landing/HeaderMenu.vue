<template>
    <nav class="menu">
      <a @click.prevent="scrollToSection('products')">Продукты</a>
      <a @click.prevent="scrollToSection('about')">О компании</a>
      <a @click.prevent="scrollToSection('video')">Видео</a>
      <a @click.prevent="scrollToSection('contact')">Контакты</a>
      <router-link to="/parser">Аудио парсер</router-link>
    </nav>
  </template>
  
  <script setup>
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
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
    cursor: pointer;
  }
  .menu a:hover {
    opacity: 0.8;
  }
  </style>