import CryptoJS from 'crypto-js/core'

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
  )}`
  const signature = CryptoJS.HmacSHA256(code, secret).toString(CryptoJS.enc.Hex)
  return code + '.' + signature
}
