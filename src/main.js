// import './assets/main.css'

// import 'primevue/resources/primevue.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('Button', Button);
app.mount('#app');