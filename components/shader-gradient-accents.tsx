'use client'

import dynamic from 'next/dynamic'

const ShaderGradientCanvas = dynamic(
  () => import('../node_modules/@shadergradient/react/dist/index.mjs').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
)

const ShaderGradient = dynamic(() => import('../node_modules/@shadergradient/react/dist/index.mjs').then((mod) => mod.ShaderGradient), {
  ssr: false
})

export function ContactShaderAccent() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.12),transparent_32%),linear-gradient(135deg,rgba(3,7,18,0.96),rgba(11,17,32,0.9))]" />
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0 }}
        pixelDensity={1}
        fov={44}
        lazyLoad
        threshold={0.15}
        rootMargin="120px"
        pointerEvents="none"
      >
        <ShaderGradient
          type="plane"
          animate="on"
          shader="defaults"
          control="props"
          cAzimuthAngle={180}
          cPolarAngle={90}
          cDistance={3.6}
          color1="#0f172a"
          color2="#3B82F6"
          color3="#8B5CF6"
          uSpeed={0.05}
          uStrength={1.8}
          uDensity={1.1}
          uFrequency={3.8}
          reflection={0.03}
          brightness={0.95}
          grain="off"
          lightType="3d"
          enableTransition
        />
      </ShaderGradientCanvas>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/45 to-transparent" />
    </div>
  )
}