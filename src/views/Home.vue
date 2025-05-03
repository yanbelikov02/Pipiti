<template>
  <main>
    <HeroSection />
    <AboutSection />
    <ProductSection />
    <FeaturesSection />
    <AdvantagesSection />
    <UseCaseSection />
    <VideoSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<script setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import AboutSection from '@/components/landing/AboutSection.vue'
import ProductSection from '@/components/landing/ProductSection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import AdvantagesSection from '@/components/landing/AdvantagesSection.vue'
import UseCaseSection from '@/components/landing/UseCaseSection.vue'
import VideoSection from '@/components/landing/VideoSection.vue'
import ContactSection from '@/components/landing/ContactSection.vue'
import FooterSection from '@/components/landing/Footer.vue'

</script>

<style scoped>
main {
  padding-top: 56px; /* Компенсация для фиксированной шапки */
}
</style>