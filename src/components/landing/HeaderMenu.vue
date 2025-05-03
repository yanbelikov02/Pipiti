<template>
  <nav :class="['menu', { mobile, open }]">
    <div v-if="mobile && open" class="menu-overlay" @click="$emit('close')"></div>
    <div :class="['menu-inner', { mobile, open }]">
      <a v-for="item in menu" :key="item.id" @click.prevent="handleClick(item)" :href="item.href" class="nav-link">
        {{ item.label }}
      </a>
    </div>
  </nav>
</template>

<script setup>
import { inject, defineProps, defineEmits } from 'vue';
const isAuthenticated = inject('isAuthenticated', false);
const props = defineProps({
  mobile: Boolean,
  open: Boolean
});
const emit = defineEmits(['close']);
const menu = [
  { id: 1, label: 'О компании', href: '#about', section: 'about' },
  { id: 2, label: 'Продукты', href: '#products', section: 'products' },
  { id: 3, label: 'Что делает', href: '#features', section: 'features' },
  { id: 5, label: 'Преимущества', href: '#advantages', section: 'advantages' },
  { id: 4, label: 'Примеры', href: '#use-case', section: 'use-case' },
  { id: 6, label: 'Видео', href: '#video', section: 'video' },
  { id: 7, label: 'Контакты', href: '#contact', section: 'contact' },
];
function handleClick(item) {
  if (item.section) {
    const el = document.getElementById(item.section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  if (props.mobile) emit('close');
}
</script>

<style scoped>
.menu {
  display: flex;
  gap: 32px;
  align-items: center;
}
.menu .menu-inner {
  display: flex;
  gap: 32px;
  align-items: center;
}
.nav-link {
  color: var(--white);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 6px 0;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
  cursor: pointer;
}
.nav-link::after {
  content: '';
  display: block;
  height: 2px;
  width: 0;
  background: var(--accent);
  transition: width 0.2s;
  position: absolute;
  left: 0; bottom: 0;
  border-radius: 2px;
}
.nav-link:hover, .nav-link:focus {
  color: var(--accent);
}
.nav-link:hover::after, .nav-link:focus::after {
  width: 100%;
}
.bot-link {
  background: var(--accent);
  color: var(--white);
  padding: 4px 12px;
  border-radius: 999px;
  margin-left: 8px;
  font-weight: 600;
  transition: background 0.2s;
}
.bot-link:hover {
  background: var(--primary);
}
/* Мобильное меню */
.menu.mobile {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1100;
  display: block;
  pointer-events: none;
}
.menu.mobile .menu-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1101;
  opacity: 1;
  transition: opacity 0.3s;
  pointer-events: auto;
}
.menu.mobile .menu-inner {
  position: fixed;
  top: 0; right: 0;
  width: 82vw;
  max-width: 340px;
  height: 100vh;
  background: rgba(20,24,28,0.98);
  box-shadow: -2px 0 16px 0 rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 32px 24px 24px 24px;
  z-index: 1200;
  transform: translateX(100%);
  transition: transform 0.3s;
  pointer-events: auto;
}
.menu.mobile.open {
  pointer-events: auto;
}
.menu.mobile.open .menu-inner {
  transform: translateX(0);
}
.menu.mobile .nav-link {
  font-size: 18px;
  padding: 16px 0;
  border-radius: 8px;
  margin: 0 0 4px 0;
  width: 100%;
  text-align: left;
}
.menu.mobile .bot-link {
  margin-left: 0;
  margin-top: 12px;
  width: 100%;
  text-align: left;
}
@media (max-width: 900px) {
  .menu {
    gap: 0;
  }
  .menu .menu-inner {
    display: none;
  }
  .menu.mobile .menu-inner {
    display: flex;
  }
}
</style>