import { useEffect, type RefObject } from 'react'

type ElWithBase = HTMLElement & { _base?: string }

// Scroll-driven "pop in" reveal (staggered overshoot spring, keeping each element's authored
// tilt), 3D pointer-tilt on taped photos, magnetic résumé buttons, hover-lift on project cards
// and sticky notes, gentle sticky-note drift on scroll, and the terminal typewriter line.
// Ported near-verbatim from the design prototype's vanilla-DOM approach — this kind of
// cross-cutting, scroll-coupled motion doesn't map cleanly onto per-element React state.
export function useNotebookMotion(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cleanups: Array<() => void> = []

    const targets = Array.from(root.querySelectorAll<HTMLElement>('h2, article, [data-tl], [data-pop], [data-photo]')).filter(
      (el) => !el.closest('svg')
    ) as ElWithBase[]

    targets.forEach((el) => {
      const base = el.style.transform || ''
      el._base = base
      el.style.willChange = 'transform, opacity'
      el.style.transition = 'opacity .75s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.34,1.56,.64,1)'
      el.style.opacity = '0'
      el.style.transform = (base + ' translateY(40px) scale(.955)').trim()
    })

    const pop = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as ElWithBase
          const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => (c as ElWithBase)._base !== undefined)
          el.style.transitionDelay = Math.min(4, Math.max(0, siblings.indexOf(el))) * 95 + 'ms'
          el.style.opacity = '1'
          el.style.transform = el._base ?? ''
          pop.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )
    targets.forEach((el) => pop.observe(el))

    const reveal = (el: ElWithBase, delay = 0) => {
      el.style.transitionDelay = delay + 'ms'
      el.style.opacity = '1'
      el.style.transform = el._base ?? ''
      pop.unobserve(el)
    }
    const catchUp = () => {
      targets.forEach((el) => {
        if (el.style.opacity !== '0') return
        if (el.getBoundingClientRect().top < window.innerHeight) reveal(el, 0)
      })
    }
    catchUp()
    window.addEventListener('scroll', catchUp, { passive: true })
    window.addEventListener('resize', catchUp)
    cleanups.push(() => {
      window.removeEventListener('scroll', catchUp)
      window.removeEventListener('resize', catchUp)
      pop.disconnect()
    })

    root.querySelectorAll<HTMLElement>('[data-photo]').forEach((photo) => {
      const p = photo as ElWithBase
      const onMove = (e: PointerEvent) => {
        const r = p.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height
        p.style.transform = `${p._base} perspective(900px) rotateY(${(dx * 5).toFixed(2)}deg) rotateX(${(-dy * 5).toFixed(2)}deg) scale(1.02)`
      }
      const onLeave = () => {
        p.style.transform = p._base ?? ''
      }
      p.addEventListener('pointermove', onMove)
      p.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        p.removeEventListener('pointermove', onMove)
        p.removeEventListener('pointerleave', onLeave)
      })
    })

    root.querySelectorAll<HTMLAnchorElement>('a[href$=".pdf"]').forEach((btn) => {
      btn.classList.add('nb-mag')
      const onMove = (e: PointerEvent) => {
        const r = btn.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height
        btn.style.transform = `translate(${(dx * 9).toFixed(1)}px,${(dy * 7).toFixed(1)}px)`
      }
      const onLeave = () => {
        btn.style.transform = ''
      }
      btn.addEventListener('pointermove', onMove)
      btn.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        btn.removeEventListener('pointermove', onMove)
        btn.removeEventListener('pointerleave', onLeave)
      })
    })

    root.querySelectorAll<HTMLElement>('article:not([data-tl])').forEach((article) => {
      const a = article as ElWithBase
      const onEnter = () => {
        if (a.style.opacity === '0') return
        a.style.transition = 'transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease'
        a.style.transform = `${a._base} translateY(-9px) rotate(0deg) scale(1.018)`
        a.style.boxShadow = '0 26px 46px rgba(0,0,0,.55)'
        a.style.zIndex = '4'
      }
      const onLeave = () => {
        a.style.transform = a._base ?? ''
        a.style.boxShadow = ''
        a.style.zIndex = ''
      }
      a.addEventListener('pointerenter', onEnter)
      a.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        a.removeEventListener('pointerenter', onEnter)
        a.removeEventListener('pointerleave', onLeave)
      })
    })

    const notes = Array.from(root.querySelectorAll<HTMLElement>('[data-note]')) as ElWithBase[]
    notes.forEach((n) => {
      n.style.cursor = 'default'
      const onEnter = () => {
        if (n.style.opacity === '0') return
        n.style.transition = 'transform .28s cubic-bezier(.34,1.56,.64,1), box-shadow .28s ease'
        n.style.transform = `${n._base} translateY(-10px) rotate(0deg) scale(1.06)`
        n.style.boxShadow = '0 20px 34px rgba(34,31,28,.28)'
        n.style.zIndex = '4'
      }
      const onLeave = () => {
        n.style.transform = n._base ?? ''
        n.style.boxShadow = '0 8px 18px rgba(0,0,0,.4)'
        n.style.zIndex = ''
      }
      n.addEventListener('pointerenter', onEnter)
      n.addEventListener('pointerleave', onLeave)
      cleanups.push(() => {
        n.removeEventListener('pointerenter', onEnter)
        n.removeEventListener('pointerleave', onLeave)
      })
    })

    let raf: number | null = null
    const onScrollDrift = () => {
      raf = null
      const vh = window.innerHeight
      notes.forEach((n) => {
        const r = n.getBoundingClientRect()
        const t = (r.top + r.height / 2 - vh / 2) / vh
        n.style.marginTop = (-t * 8).toFixed(1) + 'px'
      })
    }
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(onScrollDrift)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll)
      if (raf !== null) cancelAnimationFrame(raf)
    })

    return () => cleanups.forEach((fn) => fn())
  }, [containerRef])
}

// Types out a data-type element's text character by character with a blinking caret, on mount.
export function useTypewriter(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const el = root.querySelector<HTMLElement>('[data-type]')
    if (!el) return
    const text = el.getAttribute('data-type') ?? ''
    const caret = el.querySelector('.nb-caret')
    let i = 0
    let timeout: ReturnType<typeof setTimeout>
    const step = () => {
      el.textContent = text.slice(0, i)
      if (caret) el.appendChild(caret)
      i++
      if (i <= text.length) timeout = setTimeout(step, 32)
    }
    timeout = setTimeout(step, 200)
    return () => clearTimeout(timeout)
  }, [containerRef])
}

// Tracks which experience entry the viewport is centered on, for the timeline's active rule/dot.
export function useActiveExperience(containerRef: RefObject<HTMLElement | null>, ids: string[], onChange: (index: number) => void) {
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const els = ids.map((id) => root.querySelector<HTMLElement>(`[data-tl="${id}"]`)).filter((el): el is HTMLElement => !!el)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const i = ids.indexOf(entry.target.getAttribute('data-tl') ?? '')
          if (i >= 0) onChange(i)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ids.join(',')])
}
