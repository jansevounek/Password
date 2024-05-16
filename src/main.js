import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import VueTypeWriter from 'vue-typewriter-effect'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)

app.use(BootstrapIconsPlugin)

app.use(MotionPlugin)

app.use(router)

app.mount('#app')
