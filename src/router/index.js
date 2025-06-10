import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FinanciamientoView from '../views/FinanciamientoView.vue'
import GestionActivosView from '../views/GestionActivosView.vue'
import OptimizacionView from '../views/OptimizacionView.vue'
import ConsultoriaView from '../views/ConsultoriaView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/servicios/financiamiento',
      name: 'financiamiento',
      component: FinanciamientoView
    },
    {
      path: '/servicios/gestion-activos',
      name: 'gestion-activos',
      component: GestionActivosView
    },
    {
      path: '/servicios/optimizacion',
      name: 'optimizacion',
      component: OptimizacionView
    },
    {
      path: '/servicios/consultoria',
      name: 'consultoria',
      component: ConsultoriaView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router 