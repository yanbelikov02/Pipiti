<template>
  <header :class="['main-header', { 'header--scrolled': scrolled }]">
    <div class="header-content">
      <a href="/" class="logo-link">
        <img src="@/assets/logo.png" alt="PipitiGroup Logo" class="logo" />
      </a>
      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Открыть меню">
        <span :class="['burger-line', { open: menuOpen }]"></span>
        <span :class="['burger-line', { open: menuOpen }]"></span>
        <span :class="['burger-line', { open: menuOpen }]"></span>
      </button>
      <HeaderMenu :mobile="isMobile" :open="menuOpen" @close="menuOpen = false" />
      <div class="header-actions">
        <LoginButton @login="handleLogin" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderMenu from './HeaderMenu.vue';
import LoginButton from './LoginButton.vue';

const scrolled = ref(false);
const menuOpen = ref(false);
const isMobile = ref(false);

const handleLogin = () => {
  alert('Заглушка: переход в личный кабинет.');
};

const onScroll = () => {
  scrolled.value = window.scrollY > 40;
};

const onResize = () => {
  isMobile.value = window.innerWidth <= 900;
  if (!isMobile.value) menuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);
  onResize();
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  /* background: rgba(20, 24, 28, 0.25); */
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.08);
  transition: background 0.3s;
}
.main-header.header--scrolled {
  background: var(--primary-dark);
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.12);
  transition: background 0.3s, box-shadow 0.3s;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  height: 68px;
  position: relative;
}
.logo-link {
  display: flex;
  align-items: center;
  min-width: 120px;
}
.logo {
  height: 38px;
  width: auto;
  display: block;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1200;
  margin-left: 12px;
}
.burger-line {
  width: 26px;
  height: 3px;
  background: var(--white);
  margin: 4px 0;
  border-radius: 2px;
  transition: all 0.3s;
}
.burger-line.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.burger-line.open:nth-child(2) {
  opacity: 0;
}
.burger-line.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
@media (max-width: 900px) {
  .header-content {
    padding: 0 12px;
  }
  .burger {
    display: flex;
  }
}
</style>