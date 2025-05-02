// 📁 src/components/LoginButton.vue
<template>
  <div>
    <Button label="Вход" @click="showModal = true" />


    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal">
        <h3 class="modal-title">Вход в личный кабинет</h3>
        <form @submit.prevent="handleSubmit">
          <input type="text" v-model="login" placeholder="Логин" required />
          <input type="password" v-model="password" placeholder="Пароль" required />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button'

const showModal = ref(false);
const login = ref('');
const password = ref('');

const handleSubmit = () => {
  alert(`Логин: ${login.value}\nПароль: ${password.value}`);
  showModal.value = false;
};
</script>

<style scoped>
.login-btn {
  background: var(--accent);
  color: var(--white);
  border: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}
.login-btn:hover {
  background: var(--primary-dark);
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
.modal button {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}
.modal button:hover {
  background: var(--primary-dark);
}
</style>