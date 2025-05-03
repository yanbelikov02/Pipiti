// 📁 src/components/HeroSection.vue
<template>
  <section class="hero">
    <div class="overlay">
      <h1>Добро пожаловать с нами<br />в безопасное будущее!</h1>
      <p>Первые среди первых — PipitiGroup</p>
      <a v-if="isAuthenticated" href="https://t.me/OrcaAnalystBot" target="_blank" class="telegram-button">
        Перейти в Telegram-бот
      </a>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';

const isAuthenticated = inject('isAuthenticated', false);
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/hero-bg.jpg') center 0 no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 80px 20px;
  text-align: center;
  color: white;
  font-family: 'Mr Eaves XL Mod OT', Helvetica, Arial, sans-serif;
  min-height: 570px;
}
.overlay {
  max-width: 1000px;
  margin: auto;
  padding: 60px 20px;
}
h1 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
}
p {
  font-size: 20px;
  opacity: 0.9;
}
.telegram-button {
  display: inline-block;
  background: var(--accent);
  color: var(--white);
  padding: 12px 32px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
  margin-top: 20px;
}
.telegram-button:hover {
  background: var(--primary);
}
@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 16px;
  }
}
@media (max-width: 900px) {
  /* .hero {
    background-attachment: scroll;
  } */
}
</style>