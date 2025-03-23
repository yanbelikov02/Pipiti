<template>
  <div class="container">
    <h1 class="title">Аудио Парсер</h1>

    <DropZone @file-selected="handleFileUpload" />

    <FileInfo v-if="selectedFile" :file="selectedFile" />

    <UploadButton :disabled="!selectedFile" @upload="uploadFile" />

    <MetadataTable v-if="metadata" :data="metadata" />
  </div>
</template>

<script>
import { ref } from "vue";
import DropZone from "./components/parser/DropZone.vue";
import FileInfo from "./components/parser/FileInfo.vue";
import UploadButton from "./components/parser/UploadButton.vue";
import MetadataTable from "./components/parser/MetadataTable.vue";

export default {
  components: {
    DropZone,
    FileInfo,
    UploadButton,
    MetadataTable,
  },
  setup() {
    const selectedFile = ref(null);
    const metadata = ref(null);

    const handleFileUpload = (file) => {
      selectedFile.value = file;
    };

    const uploadFile = async () => {
  if (!selectedFile.value) return;

  // Заглушка — использовать вместо API при необходимости
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

    return { selectedFile, metadata, handleFileUpload, uploadFile };
  },
};
</script>

<style>
:root {
  --primary: #009494;
  --primary-dark: #045c5c;
  --secondary: #11a7a8;
  --accent: #40cece;
  --light: #f8f9fa;
  --white: #ffffff;
}

.container {
  max-width: 500px;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: var(--primary);
}
</style>