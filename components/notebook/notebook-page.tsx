'use client'

import { useRef, useState, type CSSProperties } from 'react'
import {
  aboutFacts,
  aboutParagraph,
  currentlyItems,
  experiences,
  featureProjects,
  heroFacts,
  olderProjectFilters,
  olderProjects,
  resumeHref,
  socials,
  type OlderProject
} from '@/lib/content'
import { BlinkingDotsCanvas } from '@/components/notebook/blinking-dots-canvas'
import { PaperGrainCanvas } from '@/components/notebook/paper-grain-canvas'
import { ShaderGradientCanvas } from '@/components/notebook/shader-gradient-canvas'
import { Sketch } from '@/components/notebook/sketches'
import { useActiveExperience, useNotebookMotion, useTypewriter } from '@/components/notebook/use-notebook-motion'

const mono: CSSProperties = { fontFamily: 'var(--font-mono)' }
const serif: CSSProperties = { fontFamily: 'var(--font-serif)' }

function NameLetters({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span key={i} className="nb-ltr" style={{ animationDelay: `${0.1 + i * 0.07}s` }}>
          {ch}
        </span>
      ))}
    </>
  )
}

function ContactIcon({ icon }: { icon: 'mail' | 'linkedin' | 'github' | 'download' }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4 }
  if (icon === 'mail') {
    return (
      <svg viewBox="0 0 24 24" width={22} height={22} {...common}>
        <rect x={2.5} y={5} width={19} height={14} rx={1.5} />
        <path d="m3 6.5 9 6.5 9-6.5" />
      </svg>
    )
  }
  if (icon === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" width={22} height={22} {...common}>
        <rect x={3.5} y={3.5} width={17} height={17} rx={2} />
        <path d="M8 10.5V17" />
        <path d="M8 7.6v.01" />
        <path d="M12 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
      </svg>
    )
  }
  if (icon === 'github') {
    return (
      <svg viewBox="0 0 24 24" width={22} height={22} {...common}>
        <path d="M9 19c-4 1.2-4-2-5-2" />
        <path d="M15 19v-3a3 3 0 0 0-.8-2.1c2.7-.3 5.5-1.4 5.5-6A4.4 4.4 0 0 0 18.5 5.8a4.1 4.1 0 0 0-.1-2.9s-1.1-.3-3.7 1.4a12.5 12.5 0 0 0-6.4 0C5.7 2.6 4.6 2.9 4.6 2.9a4.1 4.1 0 0 0-.1 2.9A4.4 4.4 0 0 0 4 7.9c0 4.6 2.8 5.7 5.5 6A3 3 0 0 0 8.7 16v3" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} {...common}>
      <path d="M12 3.5v11" />
      <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
      <path d="M4.5 20h15" />
    </svg>
  )
}

export function NotebookPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [filter, setFilter] = useState<(typeof olderProjectFilters)[number]>('All')
  const [activeIndex, setActiveIndex] = useState(0)

  useNotebookMotion(containerRef)
  useTypewriter(containerRef)
  useActiveExperience(
    containerRef,
    experiences.map((e) => e.id),
    setActiveIndex
  )

  const visibleProjects: OlderProject[] = olderProjects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <>
      <PaperGrainCanvas />
      <section className="relative z-[1] px-4 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div
          ref={containerRef}
          className="relative mx-auto max-w-[1440px] overflow-hidden"
          style={{ background: '#000', boxShadow: '0 24px 60px rgba(0,0,0,.55)' }}
        >
          {/* Cover */}
          <div
            className="relative z-[5] flex min-h-[560px] flex-col justify-between overflow-hidden px-5 pb-8 pt-8 sm:px-10 lg:min-h-[780px] lg:px-16 lg:pb-12 lg:pt-14"
            style={{ background: '#000', color: '#f6f1ec' }}
          >
            <ShaderGradientCanvas />

            <div
              className="relative -mx-3.5 -mt-2.5 mb-0 flex items-center justify-between gap-5 px-3.5 pb-3 pt-2.5"
              style={{ borderBottom: '1px solid rgba(246,241,236,.4)', background: 'linear-gradient(to bottom, rgba(0,0,0,.62), rgba(0,0,0,.34))' }}
            >
              <p className="m-0 text-[11px] tracking-[.06em] text-white sm:text-[12.5px]" style={{ ...mono, textShadow: '0 1px 10px rgba(0,0,0,.75)' }}>
                serene@portfolio:~$ whoami
              </p>
              <p className="m-0 text-[11px] tracking-[.06em] text-white sm:text-[12.5px]" style={{ ...mono, textShadow: '0 1px 10px rgba(0,0,0,.75)' }}>
                2026 · v0.4
              </p>
            </div>

            <div className="relative">
              <p
                className="m-0 text-white"
                style={{ ...serif, fontWeight: 500, fontSize: 'clamp(48px, 13vw, 150px)', lineHeight: 0.94, letterSpacing: '-.005em', textShadow: '0 8px 40px rgba(0,0,0,.45)' }}
              >
                <NameLetters text="SERENE" />
              </p>
              <p
                className="m-0 flex items-center text-white"
                style={{ ...serif, fontWeight: 500, fontSize: 'clamp(48px, 13vw, 150px)', lineHeight: 0.94, letterSpacing: '-.005em', textShadow: '0 8px 40px rgba(0,0,0,.45)' }}
              >
                <span>
                  <NameLetters text="PLUMMER" />
                </span>
                <span
                  aria-hidden="true"
                  style={{ display: 'inline-block', width: '0.17em', height: '0.75em', marginLeft: '0.15em', background: '#fff', animation: 'nbBlink 1.05s steps(1,end) infinite' }}
                />
              </p>

              <div
                className="mt-7 grid w-fit max-w-full gap-x-10 gap-y-1.5 px-[22px] py-[18px] text-[13px] sm:text-[15px]"
                style={{
                  ...mono,
                  lineHeight: '30px',
                  background: 'linear-gradient(to right, rgba(0,0,0,.6), rgba(0,0,0,.42))',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, max-content))'
                }}
              >
                {heroFacts.map((f) => (
                  <p key={f.key} className="m-0" style={{ color: 'rgba(255,255,255,.7)', textShadow: '0 1px 8px rgba(0,0,0,.7)', whiteSpace: 'pre' }}>
                    {f.key}
                    <span style={{ color: '#fff' }}>{' '.repeat(6 - f.key.length)}= {f.value}</span>
                  </p>
                ))}
              </div>
            </div>

            <div
              className="relative -mx-3.5 -mb-2.5 mt-0 flex flex-wrap items-center justify-between gap-5 px-3.5 pb-2.5 pt-3.5"
              style={{ borderTop: '1px solid rgba(246,241,236,.4)', background: 'linear-gradient(to top, rgba(0,0,0,.62), rgba(0,0,0,.34))' }}
            >
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="nb-cue inline-block text-xl" style={{ ...mono, color: '#c9a6ff' }}>
                  ↓
                </span>
                <p className="m-0 text-[13px] uppercase tracking-[.14em] text-white" style={{ ...mono, textShadow: '0 1px 10px rgba(0,0,0,.75)' }}>
                  scroll for the log
                </p>
              </div>
              <a
                data-glass="1"
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[.08em]"
                style={{ ...mono, background: 'rgba(246,241,236,.16)', color: '#f6f1ec' }}
              >
                Résumé.pdf ↓
              </a>
            </div>
          </div>

          {/* Notebook log */}
          <div className="relative px-5 py-12 sm:px-10 lg:px-16 lg:pb-16 lg:pt-14 lg:pl-[152px]" style={{ background: '#0c0d10' }}>
            <BlinkingDotsCanvas />
            <div className="relative">
            <p
              className="m-0 ml-8 text-[12px] uppercase tracking-[.14em] sm:ml-16 sm:text-[13px]"
              style={{ ...mono, color: '#ff8a3d' }}
              data-type="// loading serene_plummer.portfolio..."
            >
              <span className="nb-caret" />
            </p>
            <h1 className="m-0 mt-1.5" style={{ ...serif, fontSize: 'clamp(34px, 8vw, 74px)', lineHeight: 0.96, letterSpacing: '-.01em' }}>
              <span className="nb-line" style={{ animationDelay: '.12s' }}>
                I build AI agents that make
              </span>
              <span className="nb-line" style={{ animationDelay: '.28s' }}>
                engineering teams faster.
              </span>
            </h1>

            <div className="mt-6 grid grid-cols-1 items-start gap-9 lg:grid-cols-[1fr_300px]">
              <div>
                <p className="m-0 text-[13.5px] leading-[32px] sm:text-[14px]" style={mono}>
                  Most recently a Software Engineer Intern at <strong>Fidelity Investments</strong> — RAG pipelines, MCP
                  integrations and prompt-engineered agents that automate code quality and testing, contributing to a{' '}
                  <strong>60% cut in deployment cycles</strong>. Now an AWS Cloud Engineer at IDX Exchange. Computer
                  Science at UNT, 4.0.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3.5">
                  <a
                    data-glass="1"
                    href={resumeHref}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap rounded-full px-5 py-3 text-[14px] tracking-[.04em]"
                    style={{ ...mono, background: 'rgba(201,166,255,.18)', color: '#f6f1ec' }}
                  >
                    Résumé PDF ↓
                  </a>
                  <span className="nb-h" style={{ fontSize: 21, color: '#c9a6ff', transform: 'rotate(-2deg)', display: 'inline-block' }}>
                    ← start here
                  </span>
                </div>
              </div>
              <div data-photo="1" className="relative mx-auto w-full max-w-[300px]" style={{ transform: 'rotate(1.6deg)' }}>
                <div
                  className="absolute left-1/2 -top-3 z-[2] h-[26px] w-[84px] -ml-[42px]"
                  style={{ background: 'rgba(255,255,255,.14)', borderLeft: '1px dashed rgba(255,255,255,.35)', borderRight: '1px dashed rgba(255,255,255,.35)' }}
                />
                <div className="p-2.5" style={{ background: '#171a21', boxShadow: '0 10px 26px rgba(34,31,28,.2)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/myPortfolio/assets/workinghard.jpg" alt="Serene Plummer" className="block h-[300px] w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-11 flex flex-wrap gap-[18px]">
              {currentlyItems.map((c) => {
                const isOrange = c.accent === 'orange'
                return (
                  <div
                    key={c.label}
                    data-pop="1"
                    data-note="1"
                    data-glass="1"
                    className="relative w-[250px] rounded-[14px] px-[18px] pb-5 pt-4"
                    style={{
                      background: isOrange ? 'rgba(255,138,61,.1)' : 'rgba(201,166,255,.1)',
                      border: `1px solid ${isOrange ? 'rgba(255,138,61,.4)' : 'rgba(201,166,255,.4)'}`,
                      boxShadow: '0 8px 18px rgba(0,0,0,.4)',
                      transform: `rotate(${c.tilt})`
                    }}
                  >
                    <p className="m-0 text-[10px] uppercase tracking-[.18em]" style={{ ...mono, color: isOrange ? '#ff8a3d' : '#c9a6ff' }}>
                      {c.label}
                    </p>
                    <p className="nb-h m-0 mt-1.5 leading-[1.15]" style={{ fontSize: 23, color: '#e9e7ee' }}>
                      {c.value}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-14">
              <h2 className="m-0" style={{ ...serif, fontSize: 'clamp(28px, 5vw, 42px)' }}>
                Experience
              </h2>
              <div className="mt-6 grid gap-[30px]">
                {experiences.map((e, i) => {
                  const active = i === activeIndex
                  return (
                    <article
                      key={e.id}
                      data-tl={e.id}
                      className="relative pl-5"
                      style={{ borderLeft: `2px solid ${active ? '#c9a6ff' : 'rgba(255,255,255,.16)'}`, transition: 'border-color .35s' }}
                    >
                      <span
                        className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full"
                        style={{ background: active ? '#c9a6ff' : 'rgba(255,255,255,.22)', transition: 'background .35s' }}
                      />
                      <p className="m-0 text-[15px] font-bold tracking-[.04em]" style={{ ...mono, color: '#ff8a3d' }}>
                        {e.period}
                        <span className="text-[12px] font-normal uppercase tracking-[.1em]" style={{ color: '#8e8a99' }}>
                          {' '}
                          · {e.location}
                        </span>
                      </p>
                      <h3 className="m-0 mt-1 leading-[1.1]" style={{ ...serif, fontSize: 29 }}>
                        {e.role}
                      </h3>
                      <p className="nb-h m-0 mt-0.5" style={{ fontSize: 23, color: '#ff8a3d' }}>
                        {e.organization}
                      </p>
                      <ul className="m-0 mt-3.5 grid gap-2.5 p-0" style={{ listStyle: 'none' }}>
                        {e.bullets.map((b, bi) => (
                          <li key={bi} className="grid gap-2 text-[13.5px] leading-[26px]" style={{ ...mono, gridTemplateColumns: '18px 1fr' }}>
                            <span style={{ color: '#c9a6ff' }}>→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="mt-[60px]">
              <h2 className="m-0" style={{ ...serif, fontSize: 'clamp(28px, 5vw, 42px)' }}>
                Recent Projects
              </h2>
              <div className="mt-[26px] grid gap-[34px]">
                {featureProjects.map((p) => (
                  <article
                    key={p.num}
                    data-glass="1"
                    className="relative rounded-[22px]"
                    style={{ background: 'rgba(255,255,255,.06)', boxShadow: '0 20px 50px rgba(0,0,0,.5)', transform: `rotate(${p.tilt})` }}
                  >
                    <div
                      className="absolute left-[-18px] top-[26px] z-[2] hidden h-6 w-14 sm:block"
                      style={{ background: 'rgba(226,214,182,.8)', transform: 'rotate(-8deg)', boxShadow: '0 2px 6px rgba(34,31,28,.12)' }}
                    />
                    <div className="relative z-[1] grid grid-cols-1 sm:grid-cols-[270px_1fr]">
                      <div
                        className="flex min-h-[220px] flex-col justify-between p-6"
                        style={{ background: `linear-gradient(160deg, ${p.plate} 0%, rgba(255,255,255,.08) 220%)`, color: p.plateInk, border: '1px solid rgba(255,255,255,.22)' }}
                      >
                        <div>
                          <p className="m-0 text-[10px] uppercase tracking-[.2em]" style={{ ...mono, opacity: 0.75 }}>
                            {p.kicker}
                          </p>
                          <p className="m-0 mt-2 leading-[1.02]" style={{ ...serif, fontSize: 34 }}>
                            {p.plateTitle}
                          </p>
                        </div>
                        <Sketch kind={p.sketch} ink={p.plateInk} />
                        <p className="nb-h m-0" style={{ fontSize: 20, opacity: 0.85 }}>
                          {p.plateNote}
                        </p>
                      </div>
                      <div className="p-6 sm:p-7" style={{ background: 'rgba(255,255,255,.05)' }}>
                        <div className="flex items-baseline gap-3">
                          <span style={{ ...serif, fontSize: 40, color: 'rgba(255,255,255,.24)' }}>{p.num}</span>
                          <div>
                            <h3 className="m-0 leading-[1.05]" style={{ ...serif, fontSize: 28 }}>
                              {p.title}
                            </h3>
                            <p className="m-0 mt-0.5 text-[11.5px] uppercase tracking-[.1em]" style={{ ...mono, color: '#8e8a99' }}>
                              {p.meta}
                            </p>
                          </div>
                        </div>
                        <p className="m-0 mt-4 text-[13.5px] leading-[26px]" style={mono}>
                          {p.body}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span key={t} className="px-2.5 py-0.5 text-[11px] tracking-[.06em]" style={{ ...mono, border: '1px solid rgba(255,255,255,.2)' }}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-[18px] flex items-center gap-3.5">
                          <a href={p.href} target="_blank" rel="noreferrer" className="whitespace-nowrap text-[13px]" style={{ ...mono, borderBottom: '1px solid #ff8a3d' }}>
                            {p.cta}
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-[60px]">
              <h2 className="m-0" style={{ ...serif, fontSize: 'clamp(28px, 5vw, 42px)' }}>
                Older Projects
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {olderProjectFilters.map((f) => {
                  const current = filter === f
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFilter(f)}
                      className="cursor-pointer px-3.5 py-1.5 text-[12px] uppercase tracking-[.1em]"
                      style={{
                        ...mono,
                        border: `1px solid ${current ? '#c9a6ff' : 'rgba(255,255,255,.24)'}`,
                        background: current ? '#c9a6ff' : 'transparent',
                        color: current ? '#12141a' : '#cfcbd6'
                      }}
                    >
                      {f}
                    </button>
                  )
                })}
              </div>
              <div className="mt-[22px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((p) => (
                  <article
                    key={p.title}
                    data-glass="1"
                    className="rounded-2xl px-[18px] pb-4 pt-[18px]"
                    style={{
                      background: 'rgba(10,8,14,.55)',
                      border: '1px solid rgba(255,255,255,.22)',
                      boxShadow: '0 12px 30px rgba(0,0,0,.4)',
                      transform: `rotate(${p.tilt})`
                    }}
                  >
                    <div className="relative z-[2]">
                      <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em]" style={{ ...mono, color: '#dcbaff' }}>
                        {p.category}
                      </p>
                      <h3 className="m-0 mt-1 leading-[1.1] text-white" style={{ ...serif, fontSize: 22, textShadow: '0 1px 6px rgba(0,0,0,.5)' }}>
                        {p.title}
                      </h3>
                      <p className="m-0 mt-2.5 text-[12.5px] leading-[26px]" style={{ ...mono, color: '#dcd9d4' }}>
                        {p.description}
                      </p>
                      <a href={p.href} target="_blank" rel="noreferrer" className="mt-3 inline-block text-[12px]" style={{ ...mono, borderBottom: '1px solid #ff8a3d' }}>
                        open ↗
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-[60px] grid grid-cols-1 items-start gap-9 lg:grid-cols-[280px_1fr]">
              <div data-photo="1" className="relative mx-auto w-full max-w-[280px] lg:mt-[76px]" style={{ transform: 'rotate(-2deg)' }}>
                <div className="absolute left-1/2 -top-3 z-[2] h-6 w-[76px] -ml-[38px]" style={{ background: 'rgba(255,255,255,.14)' }} />
                <div className="p-2.5" style={{ background: '#171a21', boxShadow: '0 10px 24px rgba(34,31,28,.18)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/myPortfolio/assets/selfie.jpg" alt="Serene Plummer" className="block h-[280px] w-full object-cover" />
                </div>
              </div>
              <div>
                <h2 className="m-0" style={{ ...serif, fontSize: 'clamp(28px, 5vw, 42px)' }}>
                  Off the clock
                </h2>
                <p className="m-0 mt-3.5 text-[13.5px] leading-[32px] sm:text-[14.5px]" style={mono}>
                  {aboutParagraph}
                </p>
                <div className="mt-5 flex gap-7">
                  {aboutFacts.map((f) => (
                    <div key={f.label}>
                      <p className="m-0 text-[10px] uppercase tracking-[.16em]" style={{ ...mono, color: '#8e8a99' }}>
                        {f.label}
                      </p>
                      <p className="nb-h m-0 mt-0.5" style={{ fontSize: 24, color: f.accent ? '#c9a6ff' : undefined }}>
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-[58px] flex flex-wrap items-center gap-3.5 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,.16)' }}>
              {socials.map((s) => {
                const isResume = s.icon === 'download'
                return (
                  <a
                    key={s.label}
                    data-glass="1"
                    href={s.href}
                    target={s.href.startsWith('http') || isResume ? '_blank' : undefined}
                    rel={s.href.startsWith('http') || isResume ? 'noreferrer' : undefined}
                    aria-label={s.label}
                    title={s.label}
                    className="relative grid h-[52px] w-[52px] place-items-center rounded-full"
                    style={isResume ? { background: 'rgba(201,166,255,.28)', color: '#f6f1ec' } : { color: '#e9e7ee', background: 'rgba(255,255,255,.08)' }}
                  >
                    <ContactIcon icon={s.icon} />
                  </a>
                )
              })}
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
