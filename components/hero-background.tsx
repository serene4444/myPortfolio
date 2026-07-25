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
            animate="on"
            control="props"
            brightness={1}
            cAzimuthAngle={180}
            cDistance={2.8}
            cPolarAngle={80}
            color1="#606080"
            color2="#8d7dca"
            color3="#212121"
            grain="on"
            lightType="3d"
            reflection={0.1}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            type="waterPlane"
            uDensity={1.5}
            uSpeed={0.3}
            uStrength={1.5}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
    </div>
  )
}