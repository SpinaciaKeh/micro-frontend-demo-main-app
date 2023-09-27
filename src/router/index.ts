import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css'

const routes = [
  {
    path: '',
    redirect: {
      name: 'home'
    },
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/index.vue')
      },
      {
        path: '/app/app-vue3-vite/:pathMatch(.*)*',
        name: 'app-vue3-vite',
        meta: {},
        component: () => import('@/components/SubApp.vue')
      },
      {
        path: '/app/app-vue2-webpack/',
        name: 'app-vue2-webpack',
        meta: {},
        component: () => import('@/components/SubApp.vue')
      },
      {
        path: '/map',
        name: 'map',
        meta: {},
        component: () => import('@/views/MapIframe.vue')
      },
      {
        path: '/other',
        name: 'other',
        component: () => import('@/views/ProxyIframe.vue')
      },
      {
        path: '/login',
        name: 'login',
        meta: {},
        component: () => import('@/views/Login.vue')
      },
      {
        path: '/404',
        name: '404 Not Found',
        component: () => import('@/views/NotFound.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
