import { LoginParams, SimulateRequest } from '@/types/auth.type.ts'

export function loginApi(params: LoginParams) {
  return new Promise<SimulateRequest>((resolve, reject) => {
    if (params.username === 'Admin' && params.password === '123456') {
      setTimeout(() => {
        resolve({
          code: 200,
          msg: 'success',
          data: {
            token: 'token-123456'
          }
        })
      }, 1000)
    } else {
      reject({
        code: 401,
        msg: 'no user founded',
        data: {}
      })
    }
  })
}
