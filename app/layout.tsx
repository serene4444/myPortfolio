import type { Metadata } from 'next'
import { Manrope, IBM_Plex_Mono } from 'next/font/google'
import Script from 'next/script'
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
    'Premium portfolio for Serene Plummer showcasing software engineering, AI, machine learning, projects, and professional writing work.',
  openGraph: {
    title: 'Serene Plummer | Software Engineer & AI Engineer Portfolio',
    description:
      'A polished portfolio showcasing software engineering, AI, machine learning, projects, and professional communication work.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${manrope.variable} ${plexMono.variable} bg-slate-950 text-slate-100 antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light';}catch(e){document.documentElement.dataset.theme='dark';}})();`}
        </Script>
        {children}
      </body>
    </html>
  )
}