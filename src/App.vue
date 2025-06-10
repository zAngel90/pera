<script setup>
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingButtons from './components/FloatingButtons.vue'
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
})
</script>

<template>
  <Navbar />
  <router-view />
  <FloatingButtons />
  <FooterSection />
</template>

<style>
:root {
  --color-text: #2c3e50;
  --color-primary: #1a3b5d;
  --color-secondary: #4a90e2;
  --color-accent: #25D366;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-text);
  line-height: 1.6;
}

main {
  overflow-x: hidden;
}

/* Aplicamos el padding solo a las secciones que no son el hero */
main > *:not(:first-child) {
  padding-top: 72px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
