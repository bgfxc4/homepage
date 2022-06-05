import { createApp } from 'vue'
import { createPinia } from 'pinia'
import jQuery from "jquery"

import App from './App.vue'
import router from './router'

window.$ = jQuery
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
