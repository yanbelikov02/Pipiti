<template>
  <section class="advantages gradient-bg" id="advantages">
    <div class="container">
      <h3>Преимущества платформы</h3>
      <div class="advantages-grid">
        <div class="advantage-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="content">
            <h4>Независимость</h4>
            <p>Платформа работает автономно, без влияния финансовых и юридических институтов</p>
          </div>
        </div>

        <div class="advantage-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <div class="content">
            <h4>Масштабируемость</h4>
            <p>Возможность расширения за счёт подключения новых камер и устройств пользователями</p>
          </div>
        </div>

        <div class="advantage-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div class="content">
            <h4>Международная совместимость</h4>
            <p>Лёгкая интеграция с другими ИИ-платформами по всему миру</p>
          </div>
        </div>

        <div class="advantage-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div class="content">
            <h4>Этичность</h4>
            <p>Исключена работа с персональными данными, только общедоступная информация</p>
          </div>
        </div>

        <div class="advantage-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="content">
            <h4>Поведенческая аналитика</h4>
            <p>Накопление данных для построения алгоритмов предсказания рисков</p>
          </div>
        </div>

        <div class="advantage-card">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
          </div>
          <div class="content">
            <h4>Прозрачность контроля</h4>
            <p>Обработка данных происходит строго по тематическим алгоритмам без внешнего влияния</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.advantages {
  padding: 60px 20px;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('@/assets/advantages-bg.jpg') center/cover no-repeat;
  color: white;
}

.container {
  max-width: 1200px;
  margin: auto;
}

h3 {
  font-size: 32px;
  color: var(--accent);
  margin-bottom: 40px;
  text-align: center;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.advantage-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.advantage-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.icon {
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: var(--accent);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.icon svg {
  width: 20px;
  height: 20px;
}

.content {
  flex: 1;
}

h4 {
  font-size: 16px;
  margin-bottom: 8px;
  color: var(--accent);
  font-weight: 600;
}

p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;
}

@media (max-width: 1024px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .advantages {
    padding: 40px 20px;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 32px;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .advantage-card {
    padding: 16px;
  }
}
</style> 