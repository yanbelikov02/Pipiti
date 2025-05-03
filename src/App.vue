<template>
  <div id="app">
    <Header />
    <router-view />
     </div>
</template>

<script setup>
import Header from '@/components/landing/Header.vue';
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