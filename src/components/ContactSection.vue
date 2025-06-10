<template>
  <div class="contact-wrapper" id="contacto">
    <div class="contact-pattern"></div>
    <section class="contact">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Contáctanos</h2>
        <div class="contact-content">
          <div class="contact-info" data-aos="fade-right" data-aos-duration="1000">
            <h3>Información de Contacto</h3>
            <div class="info-item">
              <font-awesome-icon icon="phone" class="icon" />
              <p>+54 221 6172108</p>
            </div>
            <div class="info-item">
              <font-awesome-icon icon="envelope" class="icon" />
              <p>contacto@conectacapitalpartners.com</p>
            </div>
            <div class="social-links" data-aos="fade-up" data-aos-delay="200">
              <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="#" class="social-link">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
            </div>
          </div>

          <form class="contact-form" data-aos="fade-left" data-aos-duration="1000">
            <div class="form-group" data-aos="fade-up" data-aos-delay="100">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group" data-aos="fade-up" data-aos-delay="200">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group" data-aos="fade-up" data-aos-delay="300">
              <label for="phone">Teléfono</label>
              <input type="tel" id="phone" name="phone">
            </div>
            
            <div class="form-group" data-aos="fade-up" data-aos-delay="400">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            
            <button type="submit" class="submit-button" data-aos="fade-up" data-aos-delay="500">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value)
}
</script>

<style scoped>
.contact-wrapper {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background-color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.contact-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(#3498db11 2px, transparent 2px),
    radial-gradient(#2ecc7111 2px, transparent 2px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  opacity: 0.5;
}

.contact {
  padding: 100px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #1a3b5d;
  font-size: 2.5rem;
  font-weight: 700;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.contact-info {
  background-color: #1a3b5d;
  padding: 3rem;
  border-radius: 10px;
  color: white;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.info-item .icon {
  font-size: 1.5rem;
  color: #4a90e2;
}

.info-item p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
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
  transform: translateY(-3px);
}

.contact-form {
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1a3b5d;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #1a3b5d;
  outline: none;
  box-shadow: 0 0 0 2px rgba(26, 59, 93, 0.1);
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  background-color: #1a3b5d;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-button:hover {
  background-color: #152f4a;
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .contact-info,
  .contact-form {
    padding: 2rem;
  }
}
</style> 