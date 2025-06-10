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
            Servicios
            <i class="fas fa-chevron-down"></i>
          </button>
          <div class="dropdown-content" :class="{ 'show-dropdown': isDropdownOpen }">
            <router-link to="/servicios/financiamiento" class="dropdown-item" @click="closeMenu">Financiamiento y Gestión Bancaria</router-link>
            <router-link to="/servicios/gestion-activos" class="dropdown-item" @click="closeMenu">Gestión de Activos e Inversión</router-link>
            <router-link to="/servicios/optimizacion" class="dropdown-item" @click="closeMenu">Optimización de Estructuras Financieras</router-link>
            <router-link to="/servicios/consultoria" class="dropdown-item" @click="closeMenu">Consultoría Legal, Contable e Impositiva</router-link>
          </div>
        </div>
        <router-link to="/nosotros" class="nav-link" @click="closeMenu">Nosotros</router-link>
        <router-link to="/contacto" class="nav-link" @click="closeMenu">Contacto</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isScrolled = ref(false);
const showNavLogo = ref(false);
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  setTimeout(() => {
    showNavLogo.value = true;
  }, 3800);
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

const toggleDropdown = () => {
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
  height: 150px;
  width: auto;
  filter: brightness(1);
  transition: all 0.3s ease;
}

.navbar-scrolled .nav-logo {
  height: 120px;
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
    height: 100vh;
    width: 80%;
    max-width: 400px;
    background: white;
    flex-direction: column;
    gap: 0;
    padding: 100px 2rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .nav-links.show {
    right: 0;
  }

  .nav-link, .dropdown-toggle {
    color: #1a3b5d !important;
    text-shadow: none;
    padding: 1rem 0;
    font-size: 1.2rem;
    width: 100%;
    text-align: left;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-content {
    position: static;
    display: none;
    box-shadow: none;
    padding-left: 1rem;
  }

  .dropdown-content.show-dropdown {
    display: block;
  }

  .dropdown-item {
    padding: 0.8rem 0;
  }

  .dropdown:hover .dropdown-content {
    display: none;
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