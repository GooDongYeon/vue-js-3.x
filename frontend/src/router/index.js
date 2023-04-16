import Home from '@/view/Home.vue'
import Comparison from '@/view/Comparison.vue'
import Login from '@/view/LoginForm.vue'
import Register from '@/view/RegisterForm.vue'
import LoginFrm from '@/components/LoginFrm.vue'
import RegisterFrm from '@/components/RegisterFrm.vue'
import { createRouter, createWebHistory } from 'vue-router/dist/vue-router'


const routes = [
  { path: '/home', component: Home },
  { path: '/comparison', component: Comparison },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/loginfrm', component: LoginFrm },
  { path: '/registerfrm', component: RegisterFrm },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
