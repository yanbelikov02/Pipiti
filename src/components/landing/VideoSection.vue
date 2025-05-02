<template>
    <section class="section" id="video">
      <h3>Видео о нас</h3>
  
      <div class="video-grid">
        <div class="video">
          <video
            width="100%"
            height="300"
            controls
          >
            <source :src="videoUrl" type="video/mp4">
            Ваш браузер не поддерживает видео.
          </video>
        </div>
  
        <div class="video">
          <video
            width="100%"
            height="300"
            controls
          >
            <source :src="videoUrl2" type="video/mp4">
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import videoUrl from '@/assets/video/video_2025-05-02_11-14-29.mp4'
  import videoUrl2 from '@/assets/video/video_2025-05-02_11-15-02.mp4'
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
    border-radius: 10px;
    overflow: hidden;
    background: transparent;
    line-height: 0;
  }
  .video video {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    .video-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>