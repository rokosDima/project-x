import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)
import index from './router'
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
    },
});
app.config.globalProperties.$http = axios;
createApp(App).use(pinia).use(index).use(vuetify).mount('#app')
