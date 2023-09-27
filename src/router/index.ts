import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import { useAuthStore } from '@/store'
import { ElMessage } from 'element-plus'

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

const whiteList = ['/home', '/404', '/login']

NProgress.configure({ showSpinner: false })

router.beforeEach((to, _, next) => {
  NProgress.start()
  if (!to.matched.length) {
    // 先判断路径是否存在
    next('/404')
  } else if (whiteList.includes(to.path)) {
    // 再判断路径是否位于白名单
    next()
  } else {
    // 最后判断是否有授权
    const { hasToken } = useAuthStore()
    if (!hasToken) {
      ElMessage.warning('Unauthorized! Please sign in!')
      next('/login')
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
