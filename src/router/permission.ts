import NProgress from 'nprogress'
import { useAuthStore } from '@/store'
import { ElMessage } from 'element-plus'
import router from '@/router/index.ts'

const whiteList = ['/home', '/404', '/login']

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
