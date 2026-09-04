import type { Metadata } from 'next'
import { Caveat, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '600', '800'], variable: '--font-mono' })
const caveat = Caveat({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-hand' })

export const metadata: Metadata = {
  title: {
    default: 'Serene Plummer | Software Engineer & AI Engineer Portfolio',
    template: '%s | Serene Plummer'
  },
  description:
    'Portfolio notebook for Serene Plummer — AI agents, AWS infrastructure, and machine learning projects.',
  openGraph: {
    title: 'Serene Plummer | Software Engineer & AI Engineer Portfolio',
    description: 'Portfolio notebook for Serene Plummer — AI agents, AWS infrastructure, and machine learning projects.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${jetbrainsMono.variable} ${caveat.variable} antialiased`}>{children}</body>
    </html>
  )
}
