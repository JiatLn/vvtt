import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { keepPiniaPlugin } from 'pinia-plugin-keep'

import App from './App.vue'
import router from './router'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/global.less'

const app = createApp(App)
const pinia = createPinia()

pinia.use(keepPiniaPlugin)

app.use(router).use(pinia)

app.mount('#app')

