import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { EPortfolioContent, EPortfolioHero } from '@/components/eportfolio-sections'

export default function EPortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <EPortfolioHero />
        <EPortfolioContent />
      </main>
      <Footer />
    </div>
  )
}