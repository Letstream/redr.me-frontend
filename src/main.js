import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Load our CSS after Bootstrap for overrides to take effect
import './assets/main.css'

const app = createApp(App)

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)

// Router
app.use(router)

// Store
import { createPinia } from 'pinia'
import useStore from "./store"

const pinia = createPinia()
app.use(pinia)

const store = useStore()
app.config.globalProperties.$store = store

// APIEndpoints
import apiendpoints from '../apiendpoints'
app.config.globalProperties.$apiendpoints = apiendpoints

// Helper Functions
import { showToast } from './utils/helpers'
app.config.globalProperties.$helpers = {
    showToast
}

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
app.use(ToastPlugin)

// Requests Handler
import Request from './utils/requests'
app.config.globalProperties.$http = Request

app.mount('#app')
