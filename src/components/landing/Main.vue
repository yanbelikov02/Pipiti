<template>
    <div id="app">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FeaturesSection />
      <UseCaseSection />
      <AdvantagesSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from './components/landing/Header.vue';
  import HeroSection from './components/landing/HeroSection.vue';
  import AboutSection from './components/landing/AboutSection.vue';
  import ProductSection from './components/landing/ProductSection.vue';
  import FeaturesSection from './components/landing/FeaturesSection.vue';
  import UseCaseSection from './components/landing/UseCaseSection.vue';
  import AdvantagesSection from './components/landing/AdvantagesSection.vue';
  import VideoSection from './components/landing/VideoSection.vue';
  import ContactSection from './components/landing/ContactSection.vue';
  import Footer from './components/landing/Footer.vue';
  
  </script>
  
  <style>
  :root {
    --primary: #009494;
    --primary-dark: #045c5c;
    --accent: #40cece;
    --bg: #e6f9f9;
    --text-dark: #083c3c;
    --white: #ffffff;
  }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text-dark);
    font-family: 'Segoe UI', sans-serif;
  }
  </style>