'use client'

import { useEffect, useRef } from 'react'

// Sparse white specks (screen blend) behind the whole notebook — faint scattered stars, not a dense texture.
export function PaperGrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      const w = (canvas.width = window.innerWidth)
      const h = (canvas.height = window.innerHeight)
      const img = ctx.createImageData(w, h)
      const d = img.data
      for (let i = 0; i < d.length; i += 4) {
        d[i] = d[i + 1] = d[i + 2] = 255
        d[i + 3] = Math.random() < 0.985 ? 0 : 40 + Math.random() * 90
      }
      ctx.putImageData(img, 0, 0)
    }

    draw()
    let timeout: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(timeout)
      timeout = setTimeout(draw, 200)
    }
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        opacity: 0.85,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  )
}
