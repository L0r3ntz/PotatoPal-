import './assets/main.css'

import { createApp } from 'vue'
import App from './views/Home.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // Define other routes here...
  ],
});