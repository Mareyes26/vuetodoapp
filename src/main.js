import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleCheck  } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck as regularFaCirlceCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(regularFaCirlceCheck, faCircleCheck)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
