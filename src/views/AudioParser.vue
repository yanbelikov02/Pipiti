<template>
    <div class="page">
      <section class="parser">
        <h2>Аудио парсер</h2>
        <p>Загрузите аудиофайл, чтобы получить метаданные</p>
        <AudioParserApp />
      </section>
    </div>
  </template>
  
  <script setup>
  import AudioParserApp from '@/components/parser/AudioParserApp.vue';
  </script>
  
  <style scoped>
  .page {
    font-family: 'Mr Eaves XL Mod OT', Helvetica, Arial, sans-serif;
  }
  .parser {
    max-width: 800px;
    margin: auto;
    padding: 60px 20px;
    text-align: center;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    margin-bottom: 24px;
    color: var(--text-dark);
  }
  </style>