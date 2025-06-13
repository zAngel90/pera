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
          </div>

          <form class="contact-form" @submit="handleSubmit" data-aos="fade-left" data-aos-duration="1000">
            <div class="form-group" data-aos="fade-up" data-aos-delay="100">
              <label for="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                required
                :disabled="loading"
              >
            </div>
            
            <div class="form-group" data-aos="fade-up" data-aos-delay="200">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                required
                :disabled="loading"
              >
            </div>
            
            <div class="form-group" data-aos="fade-up" data-aos-delay="300">
              <label for="phone">Teléfono</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="formData.phone"
                :disabled="loading"
              >
            </div>
            
            <div class="form-group" data-aos="fade-up" data-aos-delay="400">
              <label for="message">Mensaje</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                required
                :disabled="loading"
              ></textarea>
            </div>

            <div v-if="error" class="error-message" data-aos="fade-up">
              {{ error }}
            </div>

            <div v-if="success" class="success-message" data-aos="fade-up">
              ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.
            </div>
            
            <button 
              type="submit" 
              class="submit-button" 
              :disabled="loading"
              data-aos="fade-up" 
              data-aos-delay="500"
            >
              {{ loading ? 'Enviando...' : 'Enviar Mensaje' }}
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
  phone: '',
  message: ''
})

const loading = ref(false)
const error = ref(null)
const success = ref(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  loading.value = true
  error.value = null
  success.value = false

  try {
    const response = await fetch('https://a788-2a02-4780-14-d842-00-1.ngrok-free.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify(formData.value)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Error al enviar el mensaje')
    }

    success.value = true
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  } catch (err) {
    console.error('Error detallado:', err)
    error.value = err.message || 'Error al conectar con el servidor. Por favor, intente nuevamente.'
  } finally {
    loading.value = false
  }
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
  position: relative;
  z-index: 1;
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
  height: fit-content;
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
  word-break: break-word;
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

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  background-color: #ffebee;
  color: #c62828;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.success-message {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

/* Tablet */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info,
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .contact-wrapper {
    padding: 4rem 0;
  }

  .container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .contact-content {
    gap: 2rem;
  }

  .contact-info,
  .contact-form {
    padding: 2rem;
  }

  .contact-info h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .info-item {
    margin-bottom: 1rem;
  }

  .info-item .icon {
    font-size: 1.2rem;
  }

  .info-item p {
    font-size: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    font-size: 0.9rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }

  .submit-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .contact-wrapper {
    padding: 3rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .contact-info,
  .contact-form {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }
}
</style> 