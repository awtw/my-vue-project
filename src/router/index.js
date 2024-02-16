import { createRouter, createWebHashHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import SideProject from '../components/SideProject.vue'
import Experience from '../components/Experience.vue'
import Education from '../components/Education.vue'
import Thesis from '../components/Thesis.vue'
import Contact from '../components/Contact.vue'
import Support from '../components/Support.vue'
import Error from '../components/Error.vue'
import Login from '../components/login.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/SideProject',
      name: 'SideProject',
      component: SideProject
    },
    {
      path: '/Experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/Education',
      name: 'Education',
      component: Education
    },
    {
      path: '/Thesis',
      name: 'Thesis',
      component: Thesis
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Support',
      name: 'Support',
      component: Support
    },
    {
      path: '/',
      name: 'Home',
      component: AboutMe
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: Error
  }
  ]
})

export default router
