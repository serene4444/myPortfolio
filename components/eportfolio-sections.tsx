import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { Icon } from '@/components/icon'
import { eportfolioIntro, units } from '@/lib/content'

export function EPortfolioHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.14),_transparent_28%),radial-gradient(circle_at_80%_20%,_rgba(96,165,250,0.14),_transparent_26%),linear-gradient(135deg,_rgba(2,6,23,1),_rgba(15,23,42,0.98))]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.38em] text-cyan-200/80">Professional Communication Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">My <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">ePortfolio</span></h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{eportfolioIntro}</p>
        </Reveal>
      </div>
    </section>
  )
}

export function EPortfolioContent() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="sticky top-[4.5rem] z-30 -mx-4 mb-8 flex gap-2 overflow-x-auto border-b border-white/10 bg-slate-950/90 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        {units.map((unit) => (
          <a key={unit.id} href={`#unit-${unit.id}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-300/30 hover:text-white">
            <Icon name={unit.icon as never} className="h-4 w-4 text-cyan-200" />
            {unit.title}
          </a>
        ))}
      </div>
      <div className="space-y-12">
        {units.map((unit, unitIndex) => (
          <section id={`unit-${unit.id}`} key={unit.id} className="scroll-mt-36 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-8">
            <Reveal delay={unitIndex * 80}>
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 text-white">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950/80 text-cyan-200">
                      <Icon name={unit.icon as never} className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold">{unit.title}</h2>
                      <p className="mt-1 text-sm text-slate-400">{unit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {unit.docs.map((doc, docIndex) => (
                <Reveal key={doc.title} delay={docIndex * 80}>
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-soft transition hover:-translate-y-1 hover:border-cyan-300/30">
                    <div className="flex h-36 items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_48%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(2,6,23,1))]">
                      <span className="flex h-18 w-18 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-cyan-200">
                        <Icon name={doc.icon as never} className="h-8 w-8" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="inline-flex w-fit items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">{doc.badge}</span>
                      <h3 className="mt-4 text-xl font-semibold text-white">{doc.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{doc.description}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link href={doc.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50">
                          <Icon name="eye" className="h-4 w-4" />
                          View
                        </Link>
                        {doc.downloadHref ? (
                          <Link href={doc.downloadHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/10">
                            <Icon name="download" className="h-4 w-4" />
                            Download
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-12 rounded-[2rem] border border-dashed border-white/15 bg-white/5 p-6 text-sm leading-7 text-slate-400">
        The ePortfolio route preserves the current document set and folder structure while presenting the work in a cleaner, route-based Next.js layout.
      </div>
    </main>
  )
}