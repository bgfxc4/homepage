import { createApp } from 'vue'
import { createPinia } from 'pinia'
import jQuery from "jquery"

import App from './App.vue'
import router from './router'

import { BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
//import './assets/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(fas, far, fab)

window.$ = jQuery
const app = createApp(App)

app.use(BootstrapVue3)

app.use(createPinia())
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
