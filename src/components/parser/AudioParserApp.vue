<template>
  <div class="parser-app">
    <DropZone @file-selected="handleFileUpload" />
    <FileInfo v-if="selectedFile" :file="selectedFile" />
    <UploadButton :disabled="!selectedFile" @upload="uploadFile" />
    <MetadataTable v-if="metadata" :data="metadata" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DropZone from './DropZone.vue';
import FileInfo from './FileInfo.vue';
import UploadButton from './UploadButton.vue';
import MetadataTable from './MetadataTable.vue';

const selectedFile = ref(null);
const metadata = ref(null);

const handleFileUpload = (file) => {
  selectedFile.value = file;
};

const uploadFile = async () => {
  if (!selectedFile.value) return;

  const useMock = true;

  if (useMock) {
    metadata.value = {
      "название": "Путь к звёздам",
      "исполнитель": "Группа Вдохновение",
      "альбом": "Звуки Вселенной",
      "год": 2025,
      "жанр": "Электронная музыка",
      "длительность": "03:45",
      "битрейт": "320 kbps",
      "формат файла": "MP3",
      "кодек": "MPEG-1 Audio Layer III",
      "комментарии": "Сгенерированные метаданные для демонстрационных целей"
    };
    return;
  }

  const formData = new FormData();
  formData.append("file", selectedFile.value);

  try {
    const response = await fetch("https://example.com/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Ошибка загрузки");

    metadata.value = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
  }
};
</script>

<style scoped>
.parser-app {
  margin-top: 20px;
  text-align: left;
}
</style>