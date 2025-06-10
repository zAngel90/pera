<template>
  <section class="hero">
    <div class="hero-content">
      <div class="logo-animation" :class="{ 'animate': startAnimation, 'fade-in': showInitialLogo }">
        <img src="https://i.postimg.cc/Bnr0PgpR/image-removebg-preview-2.png" alt="Bridge Capital Logo" class="hero-logo">
      </div>
      <h1 class="slogan" :class="{ 'show': showSlogan }">IMPULSAMOS NEGOCIOS<br>CON CAPITAL INTELIGENTE</h1>
    </div>
    <div class="overlay"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const startAnimation = ref(false)
const showSlogan = ref(false)
const showInitialLogo = ref(false)

const startHeroAnimation = () => {
  // Reseteamos las animaciones
  startAnimation.value = false
  showSlogan.value = false
  showInitialLogo.value = false
  
  // Iniciamos la secuencia de animación
  setTimeout(() => {
    showInitialLogo.value = true
    setTimeout(() => {
      startAnimation.value = true
      setTimeout(() => {
        showSlogan.value = true
      }, 1500)
    }, 2000)
  }, 300)
}

onMounted(() => {
  startHeroAnimation()

  // Reiniciamos la animación si el usuario recarga la página o vuelve a ella
  window.addEventListener('pageshow', startHeroAnimation)
})

onUnmounted(() => {
  window.removeEventListener('pageshow', startHeroAnimation)
})
</script>

<style scoped>
.hero {
  height: 100vh;
  height: 100svh;
  width: 100%;
  background-image: url('https://i.postimg.cc/xqVQtJK7/image.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  margin-top: 0;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, 
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.25) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-animation {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 2.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: 0;
  will-change: transform, opacity;
  z-index: 10;
}

.logo-animation.fade-in {
  opacity: 1;
  transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-animation.animate {
  left: 0;
  transform: translate(50px, -50vh) scale(0.45);
  opacity: 0;
  transition: all 2.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hero-logo {
  width: 650px;
  height: auto;
  filter: none;
  transition: all 2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center center;
}

.slogan {
  color: white;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
  letter-spacing: 2px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.8s ease;
}

.slogan.show {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
    height: 100svh;
  }

  .hero-content {
    padding: 0 1.5rem;
    min-height: 100svh;
  }

  .hero-logo {
    width: 450px;
  }

  .logo-animation.animate {
    transform: translate(20px, -50vh) scale(0.4);
    opacity: 0;
  }

  .slogan {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-top: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    width: 320px;
  }

  .logo-animation.animate {
    transform: translate(15px, -50vh) scale(0.35);
    opacity: 0;
  }

  .slogan {
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .hero {
    height: 120vh;
    height: 120svh;
  }

  .hero-content {
    min-height: 120vh;
    min-height: 120svh;
  }

  .hero-logo {
    width: 300px;
  }

  .slogan {
    font-size: 1.4rem;
  }
}
</style> 