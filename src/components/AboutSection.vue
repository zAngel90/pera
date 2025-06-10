<template>
  <section class="about" id="nosotros">
    <div class="container">
      <div class="about-content">
        <div class="about-text" data-aos="fade-up" data-aos-duration="1000">
          <h2>Quiénes Somos</h2>
          <p>Somos un equipo con más de quince años de trayectoria en el mundo financiero, convencidos de que las empresas necesitan algo más que productos: necesitan aliados que entiendan su día a día, sus desafíos y su potencial. Por eso, creamos <strong>CONECTA CAPITAL PARTNERS</strong> para acompañarlas en cada decisión clave, ofreciendo soluciones integrales que combinan financiamiento, estrategia y gestión.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 100px 0;
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-text {
  max-width: 800px;
  text-align: center;
}

.about-text h2 {
  color: #1a3b5d;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.about-text p {
  color: #64748b;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 0;
  }

  .about-text h2 {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 1.1rem;
  }
}
</style> 