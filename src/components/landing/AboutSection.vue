<template>
  <section class="about gradient-bg" id="about">
    <div class="info">
      <h3>О компании</h3>
      <p>PipitiGroup разрабатывает масштабируемые решения для кибербезопасности, соответствующие стандартам будущего.</p>
    </div>
  </section>
</template>

<style scoped>
.about.gradient-bg {
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('@/assets/about-bg.jpg') center/cover no-repeat;
  color: white;
  padding: 90px 20px;
  text-align: center;
}
.info {
  max-width: 700px;
  margin: auto;
}
h3 {
  font-size: 30px;
  color: var(--accent);
  margin-bottom: 16px;
}
p {
  font-size: 16px;
  line-height: 1.6;
}
</style>