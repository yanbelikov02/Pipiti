<template>
    <div class="file-info">
      <p>Выбранный файл: <strong>{{ file.name }}</strong></p>
      <p>Размер: {{ formattedSize }}</p>
      <p>Тип: {{ file.type }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';

  const props = defineProps({
    file: Object,
  });
  
  const formattedSize = computed(() => {
    const size = props.file.size;
    if (size < 1024) return `${size} Байт`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} КБ`;
    return `${(size / (1024 * 1024)).toFixed(1)} МБ`;
  });
  </script>
  
  <style scoped>
  .file-info {
    margin-bottom: 15px;
    background: var(--light);
    padding: 10px;
    border-radius: 8px;
    text-align: left;
    font-size: 14px;
    color: #333;
  }
  .file-info strong {
    color: var(--primary);
  }
  </style>