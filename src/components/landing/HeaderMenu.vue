<template>
    <nav class="menu">
      <a @click.prevent="scrollToSection('about')">О компании</a>
      <a @click.prevent="scrollToSection('products')">Продукты</a>
      <a @click.prevent="scrollToSection('features')">Что делает</a>
      <a @click.prevent="scrollToSection('use-case')">Примеры</a>
      <a @click.prevent="scrollToSection('advantages')">Преимущества</a>
      <a @click.prevent="scrollToSection('video')">Видео</a>
      <a @click.prevent="scrollToSection('contact')">Контакты</a>
      <a v-if="isAuthenticated" href="https://t.me/OrcaAnalystBot" target="_blank" class="bot-link">
        @OrcaAnalystBot
      </a>
    </nav>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  
  const isAuthenticated = inject('isAuthenticated', false);
  
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
  .bot-link {
    background: var(--accent);
    padding: 4px 8px;
    border-radius: 4px;
  }
  </style>