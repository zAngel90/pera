<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="https://i.postimg.cc/Bnr0PgpR/image-removebg-preview-2.png" alt="Bridge Capital Logo" class="footer-logo">
          <p>Impulsamos negocios con capital inteligente. Soluciones financieras diseñadas para el crecimiento empresarial.</p>
          <div class="social-links">
            <a href="#" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#" @click="scrollToSection('nosotros')">Nosotros</a></li>
            <li><a href="#" @click="scrollToSection('servicios')">Servicios</a></li>
            <li><a href="#" @click="scrollToSection('contacto')">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-services">
          <h3>Servicios</h3>
          <ul>
            <li><a href="#" @click="navigateToService('/servicios/financiamiento')">Financiamiento y Gestión Bancaria</a></li>
            <li><a href="#" @click="navigateToService('/servicios/gestion-activos')">Gestión de Activos e Inversión</a></li>
            <li><a href="#" @click="navigateToService('/servicios/optimizacion')">Optimización de Estructuras</a></li>
            <li><a href="#" @click="navigateToService('/servicios/consultoria')">Consultoría Legal y Contable</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const scrollToSection = async (sectionId) => {
  if (route.path !== '/') {
    await router.push('/');
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = 100; // Altura aproximada del navbar
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const navigateToService = async (path) => {
  if (route.path === path) {
    // Si ya estamos en la página del servicio, scroll al top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Si no, navegar a la página del servicio
    await router.push(path);
  }
};
</script>

<style scoped>
.footer {
  background-color: #1a3b5d;
  color: white;
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
}

.footer-brand {
  max-width: 400px;
}

.footer-logo {
  height: 60px;
  margin-bottom: 1.5rem;
  filter: none;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: white;
  color: #1a3b5d;
}

.footer-links h3,
.footer-services h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.footer-links ul,
.footer-services ul {
  list-style: none;
  padding: 0;
}

.footer-links li,
.footer-services li {
  margin-bottom: 0.75rem;
}

.footer-links a,
.footer-services a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-services a:hover {
  color: white;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .legal-links {
    justify-content: center;
  }
}
</style>

<script>
export default {
  name: 'FooterSection'
}
</script> 