// 📁 src/components/LoginButton.vue
<template>
  <div>
    <button v-if="!isAuthenticated" class="login-btn" @click="showModal = true">Вход</button>
    <button v-else class="logout-btn" @click="handleLogout">Выйти</button>

    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal">
        <div class="tabs">
          <button 
            :class="['tab', { active: activeTab === 'login' }]" 
            @click="activeTab = 'login'"
          >
            Вход
          </button>
          <button 
            :class="['tab', { active: activeTab === 'register' }]" 
            @click="activeTab = 'register'"
          >
            Регистрация
          </button>
        </div>

        <h3 class="modal-title">{{ activeTab === 'login' ? 'Вход в личный кабинет' : 'Регистрация' }}</h3>
        
        <form @submit.prevent="handleSubmit">
          <template v-if="activeTab === 'login'">
            <input type="text" v-model="login" placeholder="Логин" required />
            <input type="password" v-model="password" placeholder="Пароль" required />
          </template>
          <template v-else>
            <input type="text" v-model="registerLogin" placeholder="Логин" required />
            <input type="email" v-model="email" placeholder="Email" required />
            <input type="password" v-model="registerPassword" placeholder="Пароль" required />
            <input type="password" v-model="confirmPassword" placeholder="Подтвердите пароль" required />
          </template>
          <button type="submit">{{ activeTab === 'login' ? 'Войти' : 'Зарегистрироваться' }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
// import Button from 'primevue/button' // больше не нужен

const showModal = ref(false);
const activeTab = ref('login');
const isAuthenticated = inject('isAuthenticated');

// Login form data
const login = ref('');
const password = ref('');

// Registration form data
const registerLogin = ref('');
const email = ref('');
const registerPassword = ref('');
const confirmPassword = ref('');

const handleSubmit = () => {
  if (activeTab.value === 'login') {
    // Здесь будет реальная проверка логина и пароля
    isAuthenticated.value = true;
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    showModal.value = false;
  } else {
    if (registerPassword.value !== confirmPassword.value) {
      alert('Пароли не совпадают');
      return;
    }
    // Здесь будет реальная регистрация
    isAuthenticated.value = true;
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    showModal.value = false;
  }
};

const handleLogout = () => {
  isAuthenticated.value = false;
  localStorage.removeItem('isAuthenticated');
  login.value = '';
  password.value = '';
};
</script>

<style scoped>
.login-btn {
  background: var(--accent);
  color: var(--white);
  border: none;
  padding: 9px 22px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.18s, color 0.18s;
  outline: none;
  margin-left: 8px;
}
.login-btn:hover, .login-btn:focus {
  background: var(--primary);
  color: var(--white);
}
.logout-btn {
  background: transparent;
  color: var(--white);
  border: 1.5px solid var(--white);
  padding: 9px 22px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
  transition: background 0.18s, color 0.18s, border 0.18s;
}
.logout-btn:hover, .logout-btn:focus {
  background: var(--accent);
  color: var(--white);
  border-color: var(--primary);
}
@media (max-width: 900px) {
  .login-btn, .logout-btn {
    width: auto;
    min-width: 120px;
    font-size: 17px;
    padding: 11px 0 11px 0;
    margin-left: 0;
    border-radius: 999px;
    display: block;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: var(--white);
  padding: 24px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.tab {
  flex: 1;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: var(--text-dark);
  opacity: 0.7;
  transition: all 0.3s;
}

.tab.active {
  opacity: 1;
  color: var(--primary);
  border-bottom: 2px solid var(--primary);
}

.modal-title {
  margin-top: 0;
  font-size: 18px;
  margin-bottom: 12px;
  color: var(--text-dark);
}
.modal form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.modal input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
.modal button[type="submit"] {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}
.modal button[type="submit"]:hover {
  background: var(--primary-dark);
}
</style>