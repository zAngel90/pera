<template>
  <section class="testimonials" id="testimonios">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Lo que dicen nuestros clientes</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="100">
          <div class="testimonial-image">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Cliente 1">
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"Bridge Capital transformó nuestra visión de crecimiento en realidad. Su equipo profesional y dedicado nos guió en cada paso del proceso."</p>
            <div class="testimonial-author">
              <h4>Carlos Rodríguez</h4>
              <p>CEO, TechStart</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="200">
          <div class="testimonial-image">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Cliente 2">
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"La experiencia y profesionalismo de Bridge Capital nos permitió expandir nuestras operaciones a nivel nacional."</p>
            <div class="testimonial-author">
              <h4>Ana Martínez</h4>
              <p>Directora Financiera, GrowthCorp</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="300">
          <div class="testimonial-image">
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Cliente 3">
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"El equipo de Bridge Capital demostró un compromiso excepcional con nuestro éxito. Su asesoramiento fue clave para nuestro crecimiento."</p>
            <div class="testimonial-author">
              <h4>Miguel Sánchez</h4>
              <p>Fundador, InnovateTech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 100px 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  color: #1a3b5d;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-header p {
  color: #64748b;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}

.quote-icon {
  color: #1a3b5d;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.2;
}

.testimonial-text {
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.author-info h4 {
  color: #1a3b5d;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.author-info span {
  color: #64748b;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .testimonials {
    padding: 60px 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: 1.1rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>