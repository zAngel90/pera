<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="logo-container" :class="{ 'show-logo': showNavLogo }">
        <img src="https://i.postimg.cc/Bnr0PgpR/image-removebg-preview-2.png" alt="Bridge Capital Logo" class="nav-logo">
      </div>
      
      <!-- Botón hamburguesa para móvil -->
      <button class="mobile-menu-btn" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ 'show': isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link>
        <div class="dropdown" @click="toggleDropdown">
          <button class="nav-link dropdown-toggle">
            <span>Servicios</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="dropdown-content" :class="{ 'show-dropdown': isDropdownOpen }">
            <router-link to="/servicios/financiamiento" class="dropdown-item" @click="closeMenu">Financiamiento y Gestión Bancaria</router-link>
            <router-link to="/servicios/gestion-activos" class="dropdown-item" @click="closeMenu">Gestión de Activos e Inversión</router-link>
            <router-link to="/servicios/optimizacion" class="dropdown-item" @click="closeMenu">Optimización de Estructuras Financieras</router-link>
            <router-link to="/servicios/consultoria" class="dropdown-item" @click="closeMenu">Consultoría Legal, Contable e Impositiva</router-link>
          </div>
        </div>
        <a href="#nosotros" class="nav-link" @click="scrollToNosotros">Nosotros</a>
        <a href="#contacto" class="nav-link" @click="scrollToContact">Contacto</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const isScrolled = ref(false);
const showNavLogo = ref(false);
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const scrollToSection = async (sectionId, e) => {
  e.preventDefault();
  closeMenu();
  
  // Si no estamos en la página principal, primero navegamos a ella
  if (route.path !== '/') {
    await router.push('/');
    // Esperamos un momento para que la página se cargue
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToNosotros = (e) => scrollToSection('nosotros', e);
const scrollToContact = (e) => scrollToSection('contacto', e);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  setTimeout(() => {
    showNavLogo.value = true;
  }, 3800);

  // Agregar evento para cerrar el menú al hacer clic fuera
  document.addEventListener('click', (event) => {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(event.target)) {
      closeMenu();
    }
  });
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) {
    isDropdownOpen.value = false;
  }
};

const toggleDropdown = (event) => {
  event.stopPropagation(); // Evita que el evento se propague
  if (window.innerWidth <= 768) {
    isDropdownOpen.value = !isDropdownOpen.value;
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  isDropdownOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: transparent;
  transition: all 0.3s ease;
  z-index: 1000;
}

.navbar-scrolled {
  background: white;
  padding: 0.3rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.5s ease;
  visibility: hidden;
}

.show-logo {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.nav-logo {
  height: 100px;
  width: auto;
  filter: brightness(1);
  transition: all 0.3s ease;
}

.navbar-scrolled .nav-logo {
  height: 80px;
  filter: brightness(0);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled .nav-link {
  color: #1a3b5d;
  text-shadow: none;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  color: white;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.show-dropdown {
  display: block !important;
}

.dropdown-item {
  color: #1a3b5d;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  display: block;
  transition: background-color 0.3s ease;
  font-size: 1.05rem;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

/* Estilos para móvil */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.mobile-menu-btn span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: white;
  margin: 6px 0;
  transition: all 0.3s ease;
}

.navbar-scrolled .mobile-menu-btn span {
  background-color: #1a3b5d;
}

.mobile-menu-btn.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-btn.is-active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .nav-logo {
    height: 110px;
  }

  .navbar-scrolled .nav-logo {
    height: 90px;
    filter: brightness(0);
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background: white;
    flex-direction: column;
    gap: 1rem;
    padding: 6rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  .nav-links.show {
    right: 0;
  }

  .nav-link {
    color: #1a3b5d !important;
    text-shadow: none;
    font-size: 1.2rem;
    width: 100%;
    text-align: left;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-toggle {
    width: 100%;
    color: #1a3b5d;
    justify-content: flex-start;
    padding: 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }

  .fa-chevron-down {
    margin-left: auto;
  }

  .dropdown-content {
    position: static;
    display: none;
    width: 100%;
    box-shadow: none;
    background: #f8f9fa;
    margin-top: 0.5rem;
  }

  .dropdown:hover .dropdown-content {
    display: none;
  }

  .show-dropdown {
    display: block !important;
  }

  .dropdown-item {
    padding: 1rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .nav-logo {
    height: 90px;
  }

  .navbar-scrolled .nav-logo {
    height: 75px;
    filter: brightness(0);
  }
}
</style> 