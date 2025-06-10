import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUniversity,
  faChartLine,
  faBalanceScale,
  faBriefcase,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faTimes,
  faHandshake,
  faUsers,
  faShieldAlt,
  faClock,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { 
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Agregar los iconos a la biblioteca
library.add(
  faUniversity,
  faChartLine,
  faBalanceScale,
  faBriefcase,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faTimes,
  faHandshake,
  faUsers,
  faShieldAlt,
  faClock,
  faCheckCircle,
  faWhatsapp,
  faFacebook,
  faTwitter,
  faLinkedinIn
)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

// Inicializar AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
})

app.mount('#app')
