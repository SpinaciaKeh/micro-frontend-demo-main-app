import gsap from 'gsap'

export const useCustomCursor = () => {
  const cursor: HTMLDivElement = document.createElement('div')
  cursor.className = 'cursor'
  const cursorOuter: HTMLDivElement = document.createElement('div')
  cursorOuter.className = 'cursor-outer'

  let cursorX: number = 0
  let cursorY: number = 0
  let pageX: number = 0
  let pageY: number = 0
  const size: number = 8
  const sizeOuter: number = 36
  const followSpeed: number = 0.25

  document.body.appendChild(cursor)
  document.body.appendChild(cursorOuter)

  if ('ontouchstart' in window) {
    cursor.style.display = 'none'
    cursorOuter.style.display = 'none'
  }

  cursor.style.setProperty('--size', size + 'px')
  cursorOuter.style.setProperty('--size', sizeOuter + 'px')

  window.addEventListener('mousemove', (e: MouseEvent) => {
    pageX = e.clientX
    pageY = e.clientY
    cursor.style.left = e.clientX - size / 2 + 'px'
    cursor.style.top = e.clientY - size / 2 + 'px'
  })

  const lerp = (start: number, end: number, amount: number): number => {
    return (1 - amount) * start + amount * end
  }

  const loop = () => {
    cursorX = lerp(cursorX, pageX, followSpeed)
    cursorY = lerp(cursorY, pageY, followSpeed)
    cursorOuter.style.left = cursorX - sizeOuter / 2 + 'px'
    cursorOuter.style.top = cursorY - sizeOuter / 2 + 'px'
    requestAnimationFrame(loop)
  }
  loop()

  const mousedown = () => {
    gsap.to(cursor, { scale: 4.5 })
    gsap.to(cursorOuter, { scale: 0.5 })
  }

  const mouseup = () => {
    gsap.to(cursor, { scale: 1 })
    gsap.to(cursorOuter, { scale: 1 })
  }

  window.addEventListener('mousedown', mousedown, false)
  window.addEventListener('mouseup', mouseup, false)
}
