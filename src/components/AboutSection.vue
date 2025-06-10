<template>
  <section class="about" id="nosotros">
    <div class="container">
      <div class="about-content">
        <div class="about-text" data-aos="fade-right" data-aos-duration="1000">
          <h2>Quiénes Somos</h2>
          <p>Somos un equipo con más de quince años de trayectoria en el mundo financiero, convencidos de que las empresas necesitan algo más que productos: necesitan aliados que entiendan su día a día, sus desafíos y su potencial. Por eso, creamos <strong>CONECTA CAPITAL PARTNERS</strong> para acompañarlas en cada decisión clave, ofreciendo soluciones integrales que combinan financiamiento, estrategia y gestión.</p>
        </div>
        <div class="about-image" data-aos="fade-left" data-aos-duration="1000">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Equipo Conecta Capital">
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text {
  padding-right: 2rem;
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

.about-image {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.about-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(26, 59, 93, 0.2), transparent);
  z-index: 1;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.about-image:hover img {
  transform: scale(1.05);
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-text {
    padding-right: 0;
  }

  .about-image {
    max-height: 500px;
  }
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