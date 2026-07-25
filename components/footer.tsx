export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/70 py-8 text-sm text-slate-400">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,rgba(59,130,246,0.18),rgba(124,58,237,0.16),rgba(139,92,246,0.14))] opacity-35 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>&copy; 2025 Serene Plummer. All rights reserved.</p>
      </div>
    </footer>
  )
}