import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'loginpage',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signuppage',
      component: SignupPage
    },
  ]
})

export default router
