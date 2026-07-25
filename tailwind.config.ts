import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--border) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent-2) / <alpha-value>)'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(2, 8, 23, 0.16)',
        glow: '0 0 0 1px rgba(148, 163, 184, 0.2), 0 20px 80px rgba(15, 23, 42, 0.24)'
      },
      backgroundImage: {
        'premium-grid': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,.14) 1px, transparent 0)',
        'aurora-radial': 'radial-gradient(circle at top, rgba(34, 197, 94, 0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.16), transparent 28%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.14), transparent 24%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -12px, 0) scale(1.02)' }
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 30s linear infinite',
        revealUp: 'revealUp 0.7s ease both'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
}

export default config