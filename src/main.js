import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

const app = createApp(App)

const queryClient = new QueryClient()
app.use(createPinia())
app.use(VueQueryPlugin, queryClient);


app.mount('#app')
