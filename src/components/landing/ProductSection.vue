<template>
  <section class="products" id="products">
    <div class="container">
      <h2>Наши продукты</h2>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h3>SecureNet</h3>
          <p>Платформа для анализа сетевого трафика и выявления угроз в реальном времени. Используется в корпоративных системах и государственных учреждениях.</p>
          <a href="#contact" class="learn-more">Подробнее →</a>
        </div>

        <div class="product-card">
          <div class="product-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3>DataSentinel</h3>
          <p>Инструмент для аудита и защиты данных в облачных и локальных средах. Включает модуль шифрования и интеллектуального мониторинга.</p>
          <a href="#contact" class="learn-more">Подробнее →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  padding: 80px 20px;
  background: var(--bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 36px;
  color: var(--primary);
  text-align: center;
  margin-bottom: 48px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.product-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.product-icon {
  width: 56px;
  height: 56px;
  background: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: white;
}

h3 {
  font-size: 20px;
  color: var(--primary);
  margin-bottom: 16px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 24px;
  flex-grow: 1;
}

.learn-more {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: opacity 0.2s;
}

.learn-more:hover {
  opacity: 0.8;
}

@media (max-width: 640px) {
  .products {
    padding: 60px 20px;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 32px;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    padding: 24px;
  }
}
</style>