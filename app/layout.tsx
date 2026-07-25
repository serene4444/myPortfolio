import type { Metadata } from 'next'
import { Manrope, IBM_Plex_Mono } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Serene Plummer | Software Engineer & AI Engineer Portfolio',
    template: '%s | Serene Plummer'
  },
  description:
    'Premium portfolio for Serene Plummer showcasing software engineering, AI, machine learning, and project work.',
  openGraph: {
    title: 'Serene Plummer | Software Engineer & AI Engineer Portfolio',
    description:
      'A polished portfolio showcasing software engineering, AI, machine learning, and project work.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${plexMono.variable} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  )
}