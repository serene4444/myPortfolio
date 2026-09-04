import type { SketchKind } from '@/lib/content'

type SketchProps = {
  kind: SketchKind
  ink: string
}

const svgStyle = { width: '100%', height: 'auto', margin: '14px 0' } as const

export function Sketch({ kind, ink }: SketchProps) {
  if (kind === 'traj') {
    return (
      <svg viewBox="0 0 240 110" style={svgStyle}>
        <path d="M8 100 C 60 14, 118 8, 160 46 S 214 92, 232 100" fill="none" stroke={ink} strokeWidth={1.2} strokeDasharray="4 5" opacity={0.6} />
        <path d="M8 100 C 54 28, 104 22, 142 58" fill="none" stroke={ink} strokeWidth={1.8} />
        <circle cx={142} cy={58} r={3.6} fill={ink} />
        <line x1={8} y1={101} x2={232} y2={101} stroke={ink} strokeWidth={1} opacity={0.45} />
        <rect x={206} y={96} width={26} height={4} fill="none" stroke={ink} opacity={0.6} />
      </svg>
    )
  }

  if (kind === 'bars') {
    const vals = [86, 58, 38, 22, 13]
    return (
      <svg viewBox="0 0 240 110" style={svgStyle}>
        <line x1={8} y1={101} x2={232} y2={101} stroke={ink} strokeWidth={1} opacity={0.45} />
        {vals.map((v, i) => (
          <rect key={i} x={14 + i * 44} y={101 - v} width={28} height={v} fill={ink} fillOpacity={1 - i * 0.16} />
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 240 110" style={svgStyle}>
      <ellipse cx={34} cy={56} rx={62} ry={34} fill="none" stroke={ink} strokeWidth={1} strokeDasharray="3 5" opacity={0.55} />
      <ellipse cx={34} cy={56} rx={112} ry={50} fill="none" stroke={ink} strokeWidth={1} strokeDasharray="3 5" opacity={0.45} />
      <ellipse cx={34} cy={56} rx={168} ry={66} fill="none" stroke={ink} strokeWidth={1} strokeDasharray="3 5" opacity={0.35} />
      <circle cx={34} cy={56} r={13} fill={ink} fillOpacity={0.85} />
      <circle cx={96} cy={34} r={4.5} fill="none" stroke={ink} />
      <circle cx={146} cy={92} r={7} fill={ink} fillOpacity={0.35} stroke={ink} />
      <circle cx={200} cy={26} r={9.5} fill="none" stroke={ink} />
    </svg>
  )
}
