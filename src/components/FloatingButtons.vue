<template>
  <div class="floating-buttons">
    <a href="https://wa.me/TUNUMERO" target="_blank" class="whatsapp-button" title="Contactar por WhatsApp">
      <font-awesome-icon :icon="['fab', 'whatsapp']" />
    </a>

    <button class="contact-button" @click="showContactForm = true" title="Contacto rápido">
      <font-awesome-icon icon="envelope" />
    </button>

    <div class="quick-contact-modal" v-if="showContactForm" @click.self="showContactForm = false">
      <div class="modal-content" data-aos="fade-up">
        <button class="close-button" @click="showContactForm = false">
          <font-awesome-icon icon="times" />
        </button>
        
        <h3>Contacto Rápido</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nombre y Apellido</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>

          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input type="tel" id="phone" v-model="formData.phone" required>
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>

          <div class="form-group">
            <label for="reason">Motivo de contacto</label>
            <select id="reason" v-model="formData.reason" required>
              <option value="">Seleccione un motivo</option>
              <option value="financiamiento">Financiamiento</option>
              <option value="inversiones">Inversiones</option>
              <option value="asesoria">Asesoría</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <button type="submit" class="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showContactForm = ref(false)
const formData = ref({
  name: '',
  phone: '',
  email: '',
  reason: ''
})

const handleSubmit = () => {
  // Aquí iría la lógica para enviar el formulario
  console.log('Formulario enviado:', formData.value)
  showContactForm.value = false
  formData.value = {
    name: '',
    phone: '',
    email: '',
    reason: ''
  }
}
</script>

<style scoped>
.floating-buttons {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
}

.whatsapp-button,
.contact-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.whatsapp-button {
  background-color: #25D366;
  text-decoration: none;
}

.contact-button {
  background-color: #1a3b5d;
}

.whatsapp-button:hover,
.contact-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.quick-contact-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #64748b;
  cursor: pointer;
  padding: 0.5rem;
}

.modal-content h3 {
  color: #1a3b5d;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
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
.form-group select {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #1a3b5d;
  outline: none;
  box-shadow: 0 0 0 2px rgba(26, 59, 93, 0.1);
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: #1a3b5d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background-color: #152f4a;
}

@media (max-width: 768px) {
  .floating-buttons {
    right: 1rem;
    bottom: 1rem;
  }

  .whatsapp-button,
  .contact-button {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }

  .modal-content {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style> 