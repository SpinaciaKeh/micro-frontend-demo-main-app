import { LoginParams, SimulateRequest } from '@/types/auth.type.ts'
import { users } from '@/config/user.config.ts'
import { generateToken } from '@/utils/auth.utils.ts'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

/**
 * login api /users/login
 * @param {LoginParams} params
 * @return {Promise<SimulateRequest>}
 */
export function loginApi(params: LoginParams) {
  NProgress.start()
  return new Promise<SimulateRequest>((resolve, reject) => {
    setTimeout(() => {
      NProgress.done()
      const user = users.find(item => item.username === params.username)
      if (user === undefined) {
        reject({
          code: 404,
          msg: 'user is not found',
          data: {}
        })
      } else if (user.password !== params.password) {
        reject({
          code: 404,
          msg: 'wrong password',
          data: {}
        })
      } else {
        resolve({
          code: 200,
          msg: 'success',
          data: {
            token: generateToken(user.username)
          }
        })
      }
    }, 1000)
  })
}
