<template>
  <section class="use-case" id="use-case">
    <div class="container">
      <h3>Пример использования</h3>
      <p class="usecase-desc">
        Родитель устанавливает приложение, загружает фото ребёнка — и ИИ распознаёт его в городском пространстве, оповещая в случае угроз
      </p>
      <div class="cards-grid">
        <div class="card">
          <div class="icon">
            <svg width="32" height="32" fill="none" stroke="#009999" stroke-width="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          </div>
          <div>
            <div class="card-title">Нахождение в опасных местах</div>
            <div class="card-desc">ИИ оповещает, если ребёнок оказался в потенциально опасной зоне</div>
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <svg width="32" height="32" fill="none" stroke="#009999" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V7l-8-4-8 4v5c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div class="card-title">Признаки опьянения или насилия</div>
            <div class="card-desc">Система выявляет признаки опьянения или насилия и уведомляет родителей</div>
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <svg width="32" height="32" fill="none" stroke="#009999" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M16 8v8M8 8v8"/></svg>
          </div>
          <div>
            <div class="card-title">Выход из дома без сопровождения</div>
            <div class="card-desc">ИИ фиксирует самостоятельный выход ребёнка из дома и отправляет уведомление</div>
          </div>
        </div>
        <div class="card">
          <div class="icon">
            <svg width="32" height="32" fill="none" stroke="#009999" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M18 10h.01"/></svg>
          </div>
          <div>
            <div class="card-title">Контакты с подозрительными лицами</div>
            <div class="card-desc">Система анализирует окружение ребёнка и сообщает о контактах с подозрительными лицами</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.use-case {
  padding: 60px 0 60px 0;
  background: #e6f7fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

h3 {
  font-size: 36px;
  color: #009999;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
}

.usecase-desc {
  font-size: 17px;
  text-align: center;
  margin-bottom: 32px;
  color: #2d3a3a;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 28px 24px;
  min-height: 120px;
}

.icon {
  flex-shrink: 0;
  margin-top: 2px;
  background: #e0f7f6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.card-title {
  color: #008080;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.card-desc {
  color: #2d3a3a;
  font-size: 15px;
  opacity: 0.85;
}

@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  h3 {
    font-size: 24px;
  }
  .card {
    padding: 18px 10px;
  }
}
</style> 