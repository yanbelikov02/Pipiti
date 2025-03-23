<template>
    <div 
      class="drop-zone" 
      @dragover.prevent 
      @dragenter.prevent 
      @drop="onDrop"
    >
      <p>Перетащите файл сюда или</p>
      <button @click="onTrigger" class="file-btn">Выбрать файл</button>
      <input type="file" ref="fileInput" hidden accept="audio/mp3, audio/wav" @change="onFileChange" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['file-selected']);
  const fileInput = ref(null);
  
  const onTrigger = () => fileInput.value.click();
  
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) emit('file-selected', file);
  };
  
  const onDrop = (event) => {
    const file = event.dataTransfer.files[0];
    if (file) emit('file-selected', file);
  };
  </script>
  
  <style scoped>
  .drop-zone {
    border: 2px dashed var(--accent);
    padding: 30px;
    border-radius: 10px;
    background: var(--light);
    margin-bottom: 15px;
    cursor: pointer;
    transition: background 0.3s;
    text-align: center;
  }
  .drop-zone:hover {
    background: #e0f7f7;
  }
  .file-btn {
    background: var(--primary);
    color: var(--white);
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    transition: background 0.3s;
  }
  .file-btn:hover {
    background: var(--primary-dark);
  }
  </style>