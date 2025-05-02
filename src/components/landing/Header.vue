<template>
  <header class="header">
    <a href="/">
      <img src="@/assets/logo.png" alt="PipitiGroup Logo" class="logo" />
    </a>
    <HeaderMenu />
    <LoginButton @login="handleLogin" />
  </header>
</template>

<script setup>
import HeaderMenu from './HeaderMenu.vue'
import LoginButton from './LoginButton.vue'

const handleLogin = () => {
  alert('Заглушка: переход в личный кабинет.');
};
</script>

<style scoped>
.header {
  background: var(--primary);
  padding: 6px 16px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Добавляем псевдоэлемент для компенсации высоты фиксированной шапки */
.header::after {
  content: '';
  display: block;
  height: 56px;
  position: relative;
}

a:hover img {
  opacity: 0.8;
}

.logo {
  height: 32px;
}
</style>