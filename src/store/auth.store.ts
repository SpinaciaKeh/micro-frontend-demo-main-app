import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { removeToken, setCookie } from '@/utils/cookie'
import { loginApi } from '@/api/auth.api.ts'
import { LoginParams, SimulateRequest } from '@/types/auth.type.ts'
import { ElMessage } from 'element-plus'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const username = ref<string>('')
  const token = ref<string>('')

  function logout() {
    username.value = ''
    token.value = ''
    removeToken()
    ElMessage.success('Logout successfully!')
    router.push('/login')
  }

  function login(params: LoginParams) {
    loginApi(params)
      .then((res: SimulateRequest) => {
        const data = res.data.token
        token.value = data
        username.value = params.username
        setCookie(data)
        ElMessage.success('Login successfully!')
        router.push('/home')
      })
      .catch((err: SimulateRequest) => {
        ElMessage.error(err.msg)
      })
  }

  const hasToken = computed(() => token.value !== '')

  return {
    username,
    token,
    hasToken,
    logout,
    login
  }
})
