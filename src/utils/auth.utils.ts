// import CryptoJS from 'crypto-js/core'
import CryptoES from 'crypto-es'

const secret = 'fake-token-secret-key'
/**
 * 模拟生成token
 */
export function generateToken(username: string) {
  const header: Record<string, string> = {
    typ: 'JWT',
    alg: 'HS256'
  }
  const payload = {
    username,
    exp: Math.round(new Date(Date.now() + 15 * 60 * 1000).getTime() / 1000)
  }
  const code = `${btoa(JSON.stringify(header))}.${btoa(
    JSON.stringify(payload)
  )}`.replace('=', '')
  const signature = CryptoES.HmacSHA256(code, secret).toString(
    CryptoES.enc.Base64url
  )
  return code + '.' + signature
}
