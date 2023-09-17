/**
 * 模拟生成token
 */
export function generateToken() {
  const tokenPayload = {
    exp: Math.round(new Date(Date.now() + 15*60*1000).getTime() / 1000)
  }
  return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`
}
