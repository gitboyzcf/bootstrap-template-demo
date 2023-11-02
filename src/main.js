import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import plugins from './plugins'
import { setupStore } from './stores'


async function bootstrap() {
  const app = createApp(App)
  
  app.use(router)
  app.use(plugins)

  await setupStore(app)

  app.mount('#app')
}

bootstrap()