import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import store from "./store";
const app = createApp(App)

app.use(createPinia())
app.use(router).use(ArcoVue).use(ArcoVueIcon).use(store)
app.mount('#app')
