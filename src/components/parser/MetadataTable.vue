<template>
  <transition name="fade-scale">
    <div class="metadata">
      <h2>Метаданные</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Ключ</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in data" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </transition>
</template>

<script setup>
defineProps({ data: Object });
</script>

<style scoped>
.metadata {
  margin-top: 20px;
  text-align: left;
  background: var(--light);
  padding: 15px;
  border-radius: 5px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.styled-table th {
  background: var(--primary);
  color: white;
  text-align: left;
  font-weight: bold;
}

.styled-table tr:nth-child(even) {
  background: #f1fdfd;
}

.styled-table tr:hover {
  background: #dff8f8;
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