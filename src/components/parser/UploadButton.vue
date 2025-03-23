<template>
  <transition name="fade-scale">
    <button
      class="upload-btn"
      :disabled="disabled"
      @click="$emit('upload')"
    >
      Загрузить
    </button>
  </transition>
</template>

<script setup>
defineProps({ disabled: Boolean });
</script>

<style scoped>
.upload-btn {
  background: var(--accent);
  color: var(--white);
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background 0.3s;
}
.upload-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.upload-btn:hover:enabled {
  background: var(--primary-dark);
}

.fade-scale-enter-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from {
  transform: scale(0.9);
  opacity: 0;
}
.fade-scale-enter-to {
  transform: scale(1);
  opacity: 1;
}
</style>