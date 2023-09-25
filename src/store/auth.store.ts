import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getToken, removeToken, setToken } from '@/utils/cookie'
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
        setToken(data)
        ElMessage.success('Login successfully!')
        router.push('/home')
      })
      .catch((err: SimulateRequest) => {
        ElMessage.error(err.msg)
      })
  }

  const hasToken = computed(() => {
    if (token.value) {
      return true
    } else if (!getToken()) {
      return false
    } else {
      token.value = getToken()
      username.value = JSON.parse(atob(token.value.split('.')[1])).username
      return true
    }
  })

  return {
    username,
    token,
    hasToken,
    logout,
    login
  }
})
