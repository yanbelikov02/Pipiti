<template>
  <section class="about gradient-bg" id="about">
    <div class="info">
      <h3>О компании</h3>
      <p class="intro">АО «ПИПИТИ ГРУПП» представляет «PipitiGroup» — уникальную платформу на базе искусственного интеллекта для обработки данных и обеспечения общественной и корпоративной безопасности.</p>
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
  max-width: 800px;
  margin: auto;
}

h3 {
  font-size: 30px;
  color: var(--accent);
  margin-bottom: 24px;
}

.intro {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .about.gradient-bg {
    padding: 60px 20px;
  }
  
  h3 {
    font-size: 26px;
  }
  
  .intro {
    font-size: 16px;
  }
}
</style>