<template>
  <div class="container">
    <h1 class="title">Аудио Парсер</h1>
    <div 
      class="drop-zone" 
      @dragover.prevent 
      @dragenter.prevent 
      @drop="handleDrop"
    >
      <p>Перетащите файл сюда или</p>
      <button @click="triggerFileInput" class="file-btn">Выбрать файл</button>
    </div>
    <input type="file" @change="handleFileUpload" accept="audio/mp3, audio/wav" hidden ref="fileInput" />
    
    <div v-if="selectedFile" class="file-info">
      <p>Выбранный файл: <strong>{{ selectedFile.name }}</strong></p>
    </div>
    
    <button @click="uploadFile" :disabled="!selectedFile" class="upload-btn">Загрузить</button>
    
    <div v-if="metadata" class="metadata">
      <h2>Метаданные</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Ключ</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, key) in metadata" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectedFile = ref(null);
    const metadata = ref(null);
    const fileInput = ref(null);
    
    const handleFileUpload = (event) => {
      selectedFile.value = event.target.files[0];
    };
    
    const handleDrop = (event) => {
      event.preventDefault();
      if (event.dataTransfer.files.length > 0) {
        selectedFile.value = event.dataTransfer.files[0];
      }
    };
    
    const triggerFileInput = () => {
      fileInput.value.click();
    };
    
    const uploadFile = async () => {
      if (!selectedFile.value) return;
      
      const formData = new FormData();
      formData.append("file", selectedFile.value);
      
      try {
        const response = await fetch("http://127.0.0.1:8000/extract-metadata/", {
          method: "POST",
          body: formData,
        });
        
        if (!response.ok) throw new Error("Ошибка загрузки");
        
        metadata.value = await response.json();
      } catch (error) {
        console.error("Ошибка загрузки файла:", error);
      }
    };
    
    return { selectedFile, metadata, handleFileUpload, handleDrop, uploadFile, triggerFileInput, fileInput };
  },
};
</script>

<style>
.container {
  max-width: 500px;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}
.drop-zone {
  border: 2px dashed #007bff;
  padding: 30px;
  border-radius: 10px;
  background: #f8f9fa;
  margin-bottom: 15px;
  cursor: pointer;
}
.drop-zone:hover {
  background: #e2e6ea;
}
.file-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
.file-btn:hover {
  background: #0056b3;
}
.upload-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
.upload-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.file-info {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}
.metadata {
  margin-top: 20px;
  text-align: left;
  background: #f8f9fa;
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
.styled-table th, .styled-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}
.styled-table th {
  background: #007bff;
  color: white;
  text-align: left;
  font-weight: bold;
}
.styled-table tr:nth-child(even) {
  background: #f9f9f9;
}
.styled-table tr:hover {
  background: #f1f1f1;
}
</style>