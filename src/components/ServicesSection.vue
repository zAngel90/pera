<template>
  <section class="services" id="servicios">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Nuestros Servicios</h2>
      <div class="services-grid">
        <router-link to="/servicios/financiamiento" class="service-card" data-aos="fade-up" data-aos-delay="100">
          <div class="icon">
            <font-awesome-icon icon="university" />
          </div>
          <h3>Financiamiento y gestión bancaria</h3>
          <p>Te ayudamos a acceder, renovar y mejorar tus líneas de crédito, centralizando la relación con bancos, ALyCs y SGRs.</p>
        </router-link>
        
        <router-link to="/servicios/gestion-activos" class="service-card" data-aos="fade-up" data-aos-delay="200">
          <div class="icon">
            <font-awesome-icon icon="chart-line" />
          </div>
          <h3>Gestión de activos e inversión</h3>
          <p>Diseñamos estrategias de inversión y aprovechamos el mercado de capitales para potenciar tu liquidez.</p>
        </router-link>
        
        <router-link to="/servicios/optimizacion" class="service-card" data-aos="fade-up" data-aos-delay="300">
          <div class="icon">
            <font-awesome-icon icon="balance-scale" />
          </div>
          <h3>Optimización de estructuras financieras</h3>
          <p>Reordenamos tus pasivos y reducimos el costo financiero total para mejorar tu rentabilidad.</p>
        </router-link>
        
        <router-link to="/servicios/consultoria" class="service-card" data-aos="fade-up" data-aos-delay="400">
          <div class="icon">
            <font-awesome-icon icon="briefcase" />
          </div>
          <h3>Consultoría legal, contable e impositiva</h3>
          <p>Contamos con aliados estratégicos que brindan soporte integral en temas legales, contables y fiscales.</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 70px;
  height: 70px;
  background: #1a3b5d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
}

.service-card h3 {
  color: #1a3b5d;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.service-card p {
  color: #64748b;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .services {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>