import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initStore } from '@/app/initStore'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/global.less'

const app = createApp(App)
const pinia = createPinia()

app.use(router).use(pinia)

app.mount('#app')

initStore()
