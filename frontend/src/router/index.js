import { createRouter, createWebHistory } from 'vue-router/dist/vue-router'
import Home from '@/view/Home.vue'
import Comparison from '@/view/Comparison.vue'
import Login from '@/view/LoginForm.vue'
import Register from '@/view/RegisterForm.vue'
import LoginFrm from '@/components/LoginFrm.vue'
import RegisterFrm from '@/components/RegisterFrm.vue'
import Inquiry from '@/view/Toinquiry.vue'
import Reply from '@/view/ToReply.vue'
import GetReply from '@/components/PostReply.vue'

import UserTest from '@/components/Userpage.vue'
import MainTest from '@/view/MainPageFrm.vue'
import NavTest from '@/components/NewNav.vue'
import SlideTest from '@/components/swiperslider.vue'

const routes = [
  { path: '/home', component: Home },
  { path: '/comparison', component: Comparison },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/loginfrm', component: LoginFrm },
  { path: '/registerfrm', component: RegisterFrm },
  { path: '/inquiry', component: Inquiry },
  { path: '/reply', component: Reply },
  { path: '/postreply', component: GetReply },
  
  
  { path: '/userpage', component: UserTest, name: 'muserage' },
  { path: '/testpage', component: MainTest, name: 'mainpage' },
  { path: '/testnav', component: NavTest, name: 'navbar' },
  { path: '/testslide', component: SlideTest, name: 'testslide' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
