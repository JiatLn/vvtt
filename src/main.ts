import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { keepPiniaPlugin } from 'pinia-plugin-keep'

import App from './App.vue'
import router from './router'
import { setupGlobDirectives } from '@/directives'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/global.scss'

const app = createApp(App)
const pinia = createPinia()

pinia.use(keepPiniaPlugin)

app.use(router).use(pinia)

// register global directives
setupGlobDirectives(app)

app.mount('#app')
