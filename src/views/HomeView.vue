<template>
  <main class="home-view">
    <Hero />
    <ServicesSection />
    <WhyChooseUs />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style scoped>
.home-view {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
}

/* Reset global margins that podrían estar afectando */
:global(body),
:global(#app) {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>