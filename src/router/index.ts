import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ShoppingBasket from '@/views/ShoppingBasket.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/basket',
    name: 'Shopping',
    component: ShoppingBasket
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
