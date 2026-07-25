'use client'

import dynamic from 'next/dynamic'

const HeroBackground = dynamic(() => import('@/components/hero-background').then((mod) => mod.HeroBackground), {
  ssr: false
})

export function LazyHeroBackground() {
  return <HeroBackground />
}