'use client'

import dynamic from 'next/dynamic'

const ShaderGradientCanvas = dynamic(
  () => import('../node_modules/@shadergradient/react/dist/index.mjs').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
)

const ShaderGradient = dynamic(() => import('../node_modules/@shadergradient/react/dist/index.mjs').then((mod) => mod.ShaderGradient), {
  ssr: false
})

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.16),_transparent_30%),linear-gradient(135deg,_rgba(3,7,18,0.92),_rgba(11,17,32,0.98))]" />
      <div className="absolute inset-0 bg-premium-grid bg-[size:28px_28px] opacity-16 [mask-image:linear-gradient(to_bottom,white,transparent_82%)]" />
      <div className="absolute inset-0 opacity-90">
        <ShaderGradientCanvas
          style={{ position: 'absolute', inset: 0 }}
          pixelDensity={1}
          fov={45}
          lazyLoad
          threshold={0.15}
          rootMargin="180px"
          pointerEvents="none"
        >
          <ShaderGradient
            type="plane"
            animate="on"
            shader="defaults"
            control="props"
            cAzimuthAngle={180}
            cPolarAngle={92}
            cDistance={3.8}
            color1="#3B82F6"
            color2="#6366F1"
            color3="#8B5CF6"
            uSpeed={0.12}
            uStrength={3.4}
            uDensity={1.25}
            uFrequency={5.4}
            reflection={0.05}
            brightness={1.08}
            grain="off"
            lightType="3d"
            enableTransition
            enableCameraUpdate
          />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}