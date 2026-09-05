// Liquid-glass pointer effect: an SVG feDisplacementMap warps the element's backdrop through a
// generated map, split per color channel for a light chromatic-aberration fringe, over a
// blurred/saturated backdrop-filter — the glassmorphism technique popularized by
// rdev/liquid-glass-react, reimplemented here as a small dependency-free DOM helper (no bundler
// dependency, and the element it wraps can be arbitrary markup rather than a fixed component).
export type LiquidGlassOptions = {
  displacementScale?: number
  blurAmount?: number
  saturation?: number
  aberration?: number
  cornerRadius?: number
  elasticity?: number
}

function buildDisplacementMap(width: number, height: number): string {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = 'rgb(128,128,255)'
  ctx.fillRect(0, 0, width, height)

  const horizontal = ctx.createLinearGradient(0, 0, width, 0)
  horizontal.addColorStop(0, 'rgb(0,128,255)')
  horizontal.addColorStop(0.5, 'rgb(128,128,255)')
  horizontal.addColorStop(1, 'rgb(255,128,255)')
  ctx.globalCompositeOperation = 'lighter'
  ctx.globalAlpha = 0.6
  ctx.fillStyle = horizontal
  ctx.fillRect(0, 0, width, height)

  const vertical = ctx.createLinearGradient(0, 0, 0, height)
  vertical.addColorStop(0, 'rgb(128,0,128)')
  vertical.addColorStop(0.5, 'rgb(128,128,128)')
  vertical.addColorStop(1, 'rgb(128,255,128)')
  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = 'source-over'
  ctx.fillStyle = vertical
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL()
}

let nextId = 0

export function applyLiquidGlass(el: HTMLElement, opts: LiquidGlassOptions = {}): () => void {
  const { displacementScale = 60, blurAmount = 6, saturation = 160, aberration = 2, cornerRadius = 999, elasticity = 0.15 } = opts

  const filterId = 'liquid-glass-' + nextId++
  el.style.position = el.style.position || 'relative'
  el.style.borderRadius = cornerRadius + 'px'
  el.style.overflow = 'hidden'
  el.style.isolation = 'isolate'

  const rect = el.getBoundingClientRect()
  const mapUrl = buildDisplacementMap(Math.max(2, Math.round(rect.width)), Math.max(2, Math.round(rect.height)))

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', '0')
  svg.setAttribute('height', '0')
  svg.style.position = 'absolute'
  svg.innerHTML = `
    <filter id="${filterId}" x="-35%" y="-35%" width="170%" height="170%" color-interpolation-filters="sRGB">
      <feImage href="${mapUrl}" x="0" y="0" width="100%" height="100%" result="MAP" preserveAspectRatio="none"/>
      <feDisplacementMap in="SourceGraphic" in2="MAP" scale="${displacementScale}" xChannelSelector="R" yChannelSelector="G" result="R_D"/>
      <feColorMatrix in="R_D" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="R_C"/>
      <feDisplacementMap in="SourceGraphic" in2="MAP" scale="${displacementScale - aberration * 4}" xChannelSelector="R" yChannelSelector="G" result="G_D"/>
      <feColorMatrix in="G_D" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="G_C"/>
      <feDisplacementMap in="SourceGraphic" in2="MAP" scale="${displacementScale - aberration * 8}" xChannelSelector="R" yChannelSelector="G" result="B_D"/>
      <feColorMatrix in="B_D" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="B_C"/>
      <feBlend in="G_C" in2="B_C" mode="screen" result="GB"/>
      <feBlend in="R_C" in2="GB" mode="screen"/>
    </filter>`
  document.body.appendChild(svg)

  const warp = document.createElement('span')
  warp.style.cssText = `position:absolute;inset:0;pointer-events:none;backdrop-filter:blur(${blurAmount}px) saturate(${saturation}%);-webkit-backdrop-filter:blur(${blurAmount}px) saturate(${saturation}%);filter:url(#${filterId});`
  el.insertBefore(warp, el.firstChild)

  const border = document.createElement('span')
  border.style.cssText =
    'position:absolute;inset:0;pointer-events:none;border-radius:inherit;padding:1.5px;' +
    '-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;' +
    'box-shadow:0 0 0 .5px rgba(255,255,255,.5) inset,0 1px 3px rgba(255,255,255,.25) inset,0 1px 4px rgba(0,0,0,.35);' +
    'background:linear-gradient(135deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.35) 40%,rgba(255,255,255,.6) 65%,rgba(255,255,255,0) 100%);' +
    'mix-blend-mode:overlay;'
  el.appendChild(border)

  let raf: number | null = null
  const onMove = (e: PointerEvent) => {
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    const dx = ((e.clientX - cx) / r.width) * 100
    const dy = ((e.clientY - cy) / r.height) * 100
    if (raf) return
    raf = requestAnimationFrame(() => {
      raf = null
      const tx = dx * elasticity * 0.5
      const ty = dy * elasticity * 0.5
      el.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px)`
      border.style.background = `linear-gradient(${135 + dx * 1.2}deg,rgba(255,255,255,0) 0%,rgba(255,255,255,${(0.2 + Math.abs(dx) * 0.008).toFixed(3)}) ${Math.max(10, 33 + dy * 0.3).toFixed(1)}%,rgba(255,255,255,${(0.5 + Math.abs(dx) * 0.012).toFixed(3)}) ${Math.min(90, 66 + dy * 0.4).toFixed(1)}%,rgba(255,255,255,0) 100%)`
    })
  }
  const onLeave = () => {
    el.style.transform = ''
  }
  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)

  return () => {
    el.removeEventListener('pointermove', onMove)
    el.removeEventListener('pointerleave', onLeave)
    if (raf) cancelAnimationFrame(raf)
    svg.remove()
    warp.remove()
    border.remove()
  }
}
