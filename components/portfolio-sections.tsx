import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'
import { Icon } from '@/components/icon'
import {
  aboutParagraphs,
  contactItems,
  experiences,
  heroStats,
  projects,
  skillCategories,
  skillMarquee,
  socials
} from '@/lib/content'
import { ContactShaderAccent } from '@/components/shader-gradient-accents'

type HeroProps = {
  background?: ReactNode
}

export function HeroSection({ background }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10">
      {background ? <div className="absolute inset-0">{background}</div> : null}
      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="relative z-10 max-w-3xl">
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.4em] text-cyan-200/75">
              Software Engineer | AI & Machine Learning Focus
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300 bg-clip-text text-transparent">Serene Plummer</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Early-career software engineer focused on machine learning and data engineering, with experience in Python, SQL, and foundational ML concepts.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-50">
                <Icon name="code" className="h-4 w-4" />
                View My Work
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10">
                <Icon name="mail" className="h-4 w-4" />
                Get In Touch
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-white"
                  aria-label={item.label}
                >
                  <Icon name={item.icon === 'graduation' ? 'graduation' : item.icon === 'linkedin' ? 'linkedin' : 'github'} className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative z-10">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-4 shadow-glow backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-4">
                <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-slate-900/50">
                  <Image src="/myPortfolio/assets/workinghard.jpg" alt="Serene Plummer" width={960} height={1120} className="h-[32rem] w-full object-cover object-center" priority />
                </div>
                <div className="absolute left-8 top-8 rounded-full border border-cyan-300/30 bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100 backdrop-blur">
                  Software Engineer
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Focus</p>
                    <p className="mt-2 text-sm text-white/90">From data to intelligent software</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Current Stack</p>
                    <p className="mt-2 text-sm text-white/90">Python, SQL, React, ML systems</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="border-b border-white/10 bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-200/80">About Me</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Software engineering with a curious mind and an adventurous spirit</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-soft">
              <Image src="/myPortfolio/assets/selfie.jpg" alt="Serene Plummer - About" width={960} height={1200} className="h-[34rem] w-full rounded-[1.5rem] object-cover object-center" />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl border border-cyan-300/20 bg-slate-950/90 px-5 py-4 shadow-soft backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-200/80">Seattle-rooted</p>
              <p className="mt-1 max-w-xs text-sm text-slate-300">Nature, movement, and new landscapes keep my energy high outside of engineering.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl sm:p-10">
              <h3 className="text-2xl font-semibold text-white">Transforming Data into Insights</h3>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function SkillsSection() {
  const marquee = [...skillMarquee, ...skillMarquee]

  return (
    <section id="skills" className="border-b border-white/10 bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-200/80">Skills & Technologies</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Technologies and tools I work with</h2>
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 py-4 shadow-soft">
          <div className="flex w-[200%] gap-4 px-4 animate-drift whitespace-nowrap">
            {marquee.map((skill, index) => (
              <div key={`${skill}-${index}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 80}>
              <article className="h-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
                <div className="flex items-center gap-3 text-white">
                  <Icon name={category.icon as never} className="h-5 w-5 text-cyan-200" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400" style={{ width: `${item.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-white/10 bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-200/80">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Work timeline</h2>
        </Reveal>
        <div className="mt-12 space-y-6">
          {experiences.map((experience, index) => (
            <Reveal key={experience.role} delay={index * 100}>
              <article className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl lg:grid-cols-[180px_1fr] lg:items-start">
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-100/75">{experience.period}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
                      <Image src={experience.logo} alt={`${experience.organization} logo`} width={72} height={72} className="h-full w-full object-contain p-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                      <p className="text-sm text-slate-400">{experience.organization}</p>
                    </div>
                  </div>
                  {experience.description ? <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300">{experience.description}</p> : null}
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-white/10 bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-200/80">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A showcase of my data science and development work</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80}>
              <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="relative h-64 overflow-hidden">
                  <Image src={project.image} alt={project.imageAlt} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-xs font-medium text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50">
                      <Icon name="github" className="h-4 w-4" />
                      Code
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-transparent py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-cyan-200/80">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let&apos;s work together</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                I&apos;m always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about data science, feel free to reach out!
              </p>
              <div className="mt-8 space-y-4">
                {contactItems.map((item) => (
                  <Link key={item.label} href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel={item.href.startsWith('mailto:') ? undefined : 'noreferrer'} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 transition hover:border-cyan-300/30 hover:bg-white/5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                      <Icon name={item.icon as never} className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-soft backdrop-blur-xl">
              <ContactShaderAccent />
              <form action="https://formspree.io/f/mpwlavwn" method="POST" className="relative p-7">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Name</span>
                    <input name="name" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50" />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Email</span>
                    <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50" />
                  </label>
                </div>
                <label className="mt-5 block space-y-2 text-sm text-slate-300">
                  <span>Subject</span>
                  <input name="subject" required className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50" />
                </label>
                <label className="mt-5 block space-y-2 text-sm text-slate-300">
                  <span>Message</span>
                  <textarea name="message" required rows={7} className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50" />
                </label>
                <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50">
                  <Icon name="arrow-right" className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}