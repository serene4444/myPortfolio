'use client'

import { useEffect, useRef } from 'react'

// A quiet grid of dots behind the notebook log — each one fades in and out on its own
// randomized cycle, like a distant server-room status board.
export function BlinkingDotsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const spacing = 34
    const dotSize = 1.2
    const maxOpacity = 0.09

    type Dot = { x: number; y: number; phase: number; speed: number }
    let dots: Dot[] = []
    let dpr = Math.min(2, window.devicePixelRatio || 1)

    const build = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let y = spacing / 2; y < h; y += spacing) {
        for (let x = spacing / 2; x < w; x += spacing) {
          dots.push({ x, y, phase: Math.random() * Math.PI * 2, speed: 0.4 + Math.random() * 0.8 })
        }
      }
    }
    build()
    window.addEventListener('resize', build)

    let running = true
    let raf = 0
    const start = performance.now()
    const draw = () => {
      if (!running) return
      const t = (performance.now() - start) / 1000
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)
      for (const d of dots) {
        const o = (Math.sin(t * d.speed + d.phase) * 0.5 + 0.5) * maxOpacity
        ctx.fillStyle = `rgba(255,255,255,${o.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, dotSize, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', build)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', zIndex: 0 }}
    />
  )
}
