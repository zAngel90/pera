<template>
  <section class="why-choose-us" id="porque-elegirnos">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">¿Por Qué Elegirnos?</h2>
      <div class="content" data-aos="fade-up" data-aos-delay="100">
        <p>Porque hablamos el mismo idioma que nuestros clientes. Conocemos el sistema financiero desde adentro, entendemos los tiempos de las empresas y sabemos que cada decisión financiera puede marcar un antes y un después. Además, trabajamos con una red de aliados estratégicos que nos permite dar respuestas rápidas, integrales y confiables.</p>
      </div>

      <div class="mission-vision">
        <div class="mission" data-aos="fade-right" data-aos-delay="200">
          <h3>Misión</h3>
          <p>Impulsar el crecimiento sostenible de las empresas, brindando soluciones financieras a medida, gestionando de forma centralizada sus relaciones con el sistema bancario y el mercado de capitales, y acompañándolas con una red de aliados estratégicos en temas legales, contables y de gestión.</p>
        </div>

        <div class="vision" data-aos="fade-left" data-aos-delay="300">
          <h3>Visión</h3>
          <p>Ser el socio financiero de referencia para las empresas que buscan optimizar su estructura financiera, mejorar su liquidez y acceder a capital inteligente, combinando agilidad, conocimiento técnico y un trato personalizado y confiable.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-us {
  padding: 100px 0;
  background-color: white;
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

.content {
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
}

.content p {
  color: #64748b;
  font-size: 1.2rem;
  line-height: 1.8;
}

.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 4rem;
}

.mission, .vision {
  background: #f8f9fa;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.mission:hover, .vision:hover {
  transform: translateY(-5px);
}

.mission h3, .vision h3 {
  color: #1a3b5d;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.mission p, .vision p {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 968px) {
  .mission-vision {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .why-choose-us {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .content p {
    font-size: 1.1rem;
  }

  .mission h3, .vision h3 {
    font-size: 1.5rem;
  }

  .mission p, .vision p {
    font-size: 1rem;
  }
}
</style> 