import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import 'element-plus/es/components/message/style/css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
