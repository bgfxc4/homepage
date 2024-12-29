import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'
import jQuery from "jquery"

import App from './App.vue'
import router from './router'
import store from "./store"

import 'bootstrap/dist/css/bootstrap.css'
//import './assets/css/bootstrap.min.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(fas, far, fab)

window.$ = jQuery
const app = createApp(App)

app.use(createBootstrap())

app.use(router)
app.use(store)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
