<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import Header from '@/components/landing/Header.vue';

const isAuthenticated = ref(false);

// Восстанавливаем состояние аутентификации при загрузке
onMounted(() => {
  const savedAuth = localStorage.getItem('isAuthenticated');
  if (savedAuth) {
    isAuthenticated.value = JSON.parse(savedAuth);
  }
});

// Делаем isAuthenticated доступным для всех компонентов
provide('isAuthenticated', isAuthenticated);
</script>

<style>
:root {
  --primary: #009494;
  --primary-dark: #045c5c;
  --accent: #40cece;
  --bg: #e6f9f9;
  --light: #f5f7f8;
  --text-dark: #083c3c;
  --white: #ffffff;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text-dark);
  font-family: 'Mr Eaves XL Mod OT', Helvetica, Arial, sans-serif;
}
</style>