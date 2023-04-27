import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import { createPinia } from 'pinia'

// awsome icon import
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab, far)

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
