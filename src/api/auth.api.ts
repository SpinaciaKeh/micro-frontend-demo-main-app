import { LoginParams, SimulateRequest } from '@/types/auth.type.ts'
import { users } from '@/config/user.config.ts'
import { generateToken } from '@/utils/auth.utils.ts'

export function loginApi(params: LoginParams) {
  return new Promise<SimulateRequest>((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(item => item.username === params.username)
      if (user === undefined) {
        reject({
          code: 404,
          msg: 'user not found',
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
            token: generateToken()
          }
        })
      }
    }, 1000)
  })
}
