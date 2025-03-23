<template>
  <section class="section contact" id="contact">
    <h3>Контакты</h3>
    <p>Свяжитесь с нами по следующим каналам:</p>
    <ul>
      <li>Email: <a href="mailto:info@pipitigroup.com">info@pipitigroup.com</a></li>
      <li>Телефон: +7 (495) 123-45-67</li>
      <li>Адрес: г. Москва, ул. Цифровая, 42</li>
    </ul>
  </section>
</template>

<script setup>
// логика не требуется
</script>

<style scoped>
.contact {
  font-family: 'Mr Eaves XL Mod OT', Helvetica, Arial, sans-serif;
  color: var(--text-dark);
  max-width: 1000px;
  margin: auto;
  padding: 60px 20px;
}
.contact h3 {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}
.contact p {
  font-size: 16px;
  margin-bottom: 12px;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}
li a {
  color: var(--primary);
  text-decoration: none;
}
li a:hover {
  text-decoration: underline;
}
</style>