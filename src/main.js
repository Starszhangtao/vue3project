import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import vant from 'vant'

createApp(App).use(vant).use(store).use(router).mount('#app')
