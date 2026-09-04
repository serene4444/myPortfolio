'use client'

import dynamic from 'next/dynamic'

const ShaderGradientCanvasImpl = dynamic(
  () => import('../../node_modules/@shadergradient/react/dist/index.mjs').then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
)
const ShaderGradient = dynamic(
  () => import('../../node_modules/@shadergradient/react/dist/index.mjs').then((mod) => mod.ShaderGradient),
  { ssr: false }
)

// The cover panel's live gradient — orange-red into sand with a lavender bloom, the locked-in
// palette from the design's shadergradient.new session (ruucm/shadergradient's <ShaderGradient>,
// waterPlane-derived "plane" mesh, rotationZ 50 / rotationY 10, uDensity 1.3, uFrequency 5.5,
// uStrength 4, uSpeed 0.4, brightness 1.2, film grain on).
export function ShaderGradientCanvas() {
  return (
    <ShaderGradientCanvasImpl
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      pixelDensity={1}
      fov={45}
      pointerEvents="none"
    >
      <ShaderGradient
        control="props"
        animate="on"
        type="plane"
        shader="defaults"
        color1="#ff5005"
        color2="#dbba95"
        color3="#d0bce1"
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.6}
        cameraZoom={1}
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.4}
        uStrength={4}
        uTime={0}
        reflection={0.1}
        brightness={1.2}
        lightType="3d"
        envPreset="city"
        grain="on"
        wireframe={false}
        zoomOut={false}
      />
    </ShaderGradientCanvasImpl>
  )
}
