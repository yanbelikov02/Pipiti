<template>
  <section class="advantages" id="advantages">
    <div class="overlay">
      <h2>Преимущества</h2>
      <div class="cards">
        <div class="card">
          <h3>Независимость</h3>
          <p>Платформа работает автономно, без влияния финансовых и юридических институтов</p>
        </div>
        <div class="card">
          <h3>Масштабируемость</h3>
          <p>Возможность расширения за счёт подключения новых камер и устройств пользователями</p>
        </div>
        <div class="card">
          <h3>Международная совместимость</h3>
          <p>Лёгкая интеграция с другими ИИ-платформами по всему миру</p>
        </div>
        <div class="card">
          <h3>Этичность</h3>
          <p>Исключена работа с персональными данными, только общедоступная информация</p>
        </div>
        <div class="card">
          <h3>Поведенческая аналитика</h3>
          <p>Накопление данных для построения алгоритмов предсказания рисков</p>
        </div>
        <div class="card">
          <h3>Прозрачность контроля</h3>
          <p>Обработка данных происходит строго по тематическим алгоритмам без внешнего влияния</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.advantages {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/about-bg.jpg') center/cover no-repeat fixed;
  padding: 80px 20px;
  text-align: center;
  color: white;
  min-height: 800px;
}
.overlay {
  max-width: 1200px;
  margin: 0 auto;
}
h2 {
  font-size: 36px;
  margin-bottom: 40px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.card {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}
.card h3 {
  font-size: 24px;
  margin-bottom: 15px;
}
.card p {
  font-size: 16px;
  opacity: 0.9;
}
@media (max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style> 