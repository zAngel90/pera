<template>
  <div class="service-detail">
    <div class="service-header">
      <div class="container">
        <h1>Optimización de Estructuras Financieras</h1>
        <div class="icon">
          <font-awesome-icon icon="balance-scale" />
        </div>
      </div>
    </div>
    
    <div class="container content">
      <div class="service-content" data-aos="fade-up">
        <h2>¿Cómo te ayudamos?</h2>
        <ul>
          <li>Análisis integral de la estructura de pasivos</li>
          <li>Reestructuración de deudas y obligaciones</li>
          <li>Optimización de costos financieros</li>
          <li>Mejora de indicadores financieros</li>
          <li>Planificación financiera estratégica</li>
        </ul>

        <h2>Beneficios</h2>
        <ul>
          <li>Reducción de costos financieros</li>
          <li>Mejora en el flujo de caja</li>
          <li>Estructura financiera más eficiente</li>
          <li>Mayor capacidad de crecimiento</li>
          <li>Mejor posición negociadora</li>
        </ul>

        <div class="cta-section">
          <h2>¿Necesitas optimizar tu estructura financiera?</h2>
          <router-link to="/contacto" class="cta-button">Contáctanos</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-detail {
  min-height: 100vh;
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

.service-header {
  background: #1a3b5d;
  color: white;
  padding: 120px 0 60px;
  text-align: center;
  margin-top: 0;
}

.service-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content {
  padding: 60px 0;
}

.service-content {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #1a3b5d;
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #64748b;
}

li::before {
  content: "•";
  color: #1a3b5d;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.cta-section {
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.cta-button {
  display: inline-block;
  background: #1a3b5d;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #2c5282;
}

@media (max-width: 768px) {
  .service-header h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style> 