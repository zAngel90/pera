<template>
  <section class="services-detail" :id="currentService">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">{{ serviceTitle }}</h2>
      <div class="service-content" data-aos="fade-up" data-aos-delay="100">
        <p>{{ serviceDescription }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const currentService = ref('')
const services = {
  'financiamiento': {
    title: 'Financiamiento y gestión bancaria',
    description: 'Nos especializamos en centralizar el vínculo de las empresas con sus entidades financieras. Esto les permite enfocarse en su operación principal mientras nosotros gestionamos todo el proceso: desde el acceso inicial hasta la renovación y mejora de las líneas de crédito. Trabajamos con bancos, ALyCs y SGRs, buscando siempre condiciones competitivas y a medida para cada cliente.'
  },
  'gestion-activos': {
    title: 'Gestión de activos e inversión',
    description: 'Diseñamos estrategias de inversión acordes a la realidad financiera de cada empresa, combinando seguridad, rendimiento y disponibilidad. Además, aprovechamos todas las herramientas del mercado de capitales —como obligaciones negociables simples, cheques de pago diferido, pagarés bursátiles, entre otros— para complementar las fuentes de financiamiento tradicionales.'
  },
  'optimizacion': {
    title: 'Optimización de estructuras financieras',
    description: 'Analizamos en profundidad la estructura de pasivos de cada compañía para reducir el costo financiero total, reorganizar vencimientos y mejorar su perfil crediticio. Nuestro objetivo es que cada peso financiado tenga un impacto positivo y medible en la rentabilidad y la liquidez del negocio. Trabajamos con una mirada integral, contemplando tanto la coyuntura macroeconómica como la planificación de largo plazo.'
  },
  'consultoria': {
    title: 'Consultoría legal, contable e impositiva',
    description: 'Contamos con una red de aliados estratégicos conformada por estudios jurídicos, contables e impositivos, que trabajan codo a codo con nosotros para brindar un acompañamiento integral. Esto nos permite asesorar a nuestros clientes en aspectos clave como la revisión de contratos, planificación fiscal, cumplimiento normativo, estructuración societaria y gestión laboral.'
  }
}

const serviceTitle = computed(() => {
  return services[currentService.value]?.title || ''
})

const serviceDescription = computed(() => {
  return services[currentService.value]?.description || ''
})

const updateService = () => {
  const hash = window.location.hash
  const service = hash.split('/')[1]
  if (services[service]) {
    currentService.value = service
  }
}

onMounted(() => {
  updateService()
  window.addEventListener('hashchange', updateService)
})

watch(currentService, (newService) => {
  if (newService && !window.location.hash.includes(newService)) {
    window.location.hash = `#servicios/${newService}`
  }
})
</script>

<style scoped>
.services-detail {
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

.service-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: justify;
}

.service-content p {
  color: #64748b;
  font-size: 1.2rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .services-detail {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .service-content p {
    font-size: 1.1rem;
  }
}
</style> 