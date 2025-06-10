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
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-services">
          <h3>Servicios</h3>
          <ul>
            <li><a href="#">Inversión Estratégica</a></li>
            <li><a href="#">Capital de Trabajo</a></li>
            <li><a href="#">Expansión Empresarial</a></li>
            <li><a href="#">Asesoría Financiera</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Contacto</h3>
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <span>Av. Principal 123, Ciudad Empresarial</span>
            </li>
            <li>
              <i class="fas fa-phone"></i>
              <span>+1 234 567 890</span>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <span>contacto@bridgecapital.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ new Date().getFullYear() }} Bridge Capital. Todos los derechos reservados.</p>
        </div>
        <div class="legal-links">
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a3b5d;
  color: white;
  padding: 80px 0 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
.footer-services h3,
.footer-contact h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.footer-links ul,
.footer-services ul,
.footer-contact ul {
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

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-contact i {
  font-size: 1.2rem;
}

.footer-bottom {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  color: rgba(255, 255, 255, 0.8);
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-links a:hover {
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