// 📁 src/components/HeroSection.vue
<template>
  <section class="hero">
    <div class="overlay">
      <h1>Добро пожаловать с нами<br />в безопасное будущее!</h1>
      <p>Первые среди первых — PipitiGroup</p>
    </div>
  </section>
</template>

<script setup>
// логика не требуется
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/hero-bg.jpg') center/cover no-repeat;
  padding: 80px 20px;
  text-align: center;
  color: white;
  font-family: 'Mr Eaves XL Mod OT', Helvetica, Arial, sans-serif;
}
.overlay {
  max-width: 1000px;
  margin: auto;
  padding: 60px 20px;
}
h1 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 20px;
}
p {
  font-size: 20px;
  opacity: 0.9;
}
@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }
  p {
    font-size: 16px;
  }
}
</style>