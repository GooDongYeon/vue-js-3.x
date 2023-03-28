import Login from '@/components/LoginForm.vue'
import Register from '@/components/RegisterForm.vue'
import {createRouter, createWebHistory} from 'vue-router/dist/vue-router'


const routes = [
  {path: '/login', component: Login},
  {path: '/register', component: Register},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
