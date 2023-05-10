import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import checkbox from 'vue-material-checkbox'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import VueApexCharts from "vue3-apexcharts";

/* add icons to the library */
library.add(faBars)
library.add(faXmark)
library.add(faTrashCan)
createApp(App).use(router).use(checkbox).component('font-awesome-icon', FontAwesomeIcon).use(VueApexCharts).mount('#app')
