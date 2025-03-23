<template>
    <section class="section" id="video">
      <h3>Видео о нас</h3>
  
      <div class="video-grid">
        <div class="video">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Видео №1"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
  
        <div class="video">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Видео №2"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // нет логики
  </script>
  
  <style scoped>
  .section {
    padding: 50px 20px 0 20px;
    max-width: 1000px;
    margin: auto;
  }
  .section h3 {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
  }
  .video-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .video {
    background: #ccc;
    border-radius: 10px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    .video-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>