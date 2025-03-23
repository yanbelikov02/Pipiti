<template>
    <section class="section" id="products">
      <h3>Наши продукты</h3>
      <ProductCard
        title="SecureNet"
        description="Платформа для анализа сетевого трафика и выявления угроз в реальном времени. Используется в корпоративных системах и государственных учреждениях."
      />
      <ProductCard
        title="DataSentinel"
        description="Инструмент для аудита и защиты данных в облачных и локальных средах. Включает модуль шифрования и интеллектуального мониторинга."
      />
    </section>
  </template>
  
  <script setup>
  import ProductCard from './ProductCard.vue';
  </script>
  
  <style scoped>
  .section {
    padding: 50px 20px 0 20px;
    max-width: 1000px;
    margin: auto;
  }
  .section h3 {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
  }
  </style>