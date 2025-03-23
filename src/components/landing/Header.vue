<template>
  <header class="header">
    <img src="@/assets/logo.png" alt="PipitiGroup Logo" class="logo" />
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
}

.logo {
  height: 32px;
}
</style>