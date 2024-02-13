import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})

export default router
