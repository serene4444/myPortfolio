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

// The cover panel's live gradient — orange-red field with a lavender bloom drifting through it,
// using ruucm/shadergradient's real <ShaderGradient> ("plane" mesh, color1/2/3 from the locked
// design palette). uFrequency/uDensity are tuned well above the design-tool preview's values so
// the pattern reads as fine grain rather than one giant zoomed-in blob, uStrength is lowered so
// the lavender stays a soft accent instead of a hard-edged wedge that crowds out the orange, and
// uSpeed is slow so that balance holds for the several minutes a visitor might sit on the page.
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
        cDistance={4.4}
        cameraZoom={1}
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        uAmplitude={1}
        uDensity={2.6}
        uFrequency={13}
        uSpeed={0.12}
        uStrength={2}
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
