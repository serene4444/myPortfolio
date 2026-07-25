type IconName =
  | 'code'
  | 'brain'
  | 'tools'
  | 'users'
  | 'mail'
  | 'linkedin'
  | 'github'
  | 'graduation'
  | 'envelope'
  | 'file-alt'
  | 'lightbulb'
  | 'book-open'
  | 'desktop'
  | 'file-contract'
  | 'scroll'
  | 'file-powerpoint'
  | 'video'
  | 'arrow-right'
  | 'download'
  | 'eye'
  | 'moon'
  | 'sun'
  | 'code-2'
  | 'menu'
  | 'close'

type IconProps = {
  name: IconName
  className?: string
}

const common = 'fill-none stroke-current stroke-[1.8]'

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  switch (name) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M9 18 3 12l6-6" />
          <path className={common} d="m15 6 6 6-6 6" />
        </svg>
      )
    case 'brain':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M9 4a3 3 0 0 0-3 3c0 .6.2 1.2.5 1.7A3 3 0 0 0 5 13a3 3 0 0 0 2 2.8V17a3 3 0 0 0 6 0V7a3 3 0 0 0-4-3Z" />
          <path className={common} d="M15 4a3 3 0 0 1 3 3c0 .6-.2 1.2-.5 1.7A3 3 0 0 1 19 13a3 3 0 0 1-2 2.8V17a3 3 0 0 1-6 0" />
        </svg>
      )
    case 'tools':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M14.5 5.5a4 4 0 0 0-5.5 5.5L4 16v4h4l5-5a4 4 0 0 0 5.5-5.5L15 11l-1.5-1.5Z" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M17 20v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
          <path className={common} d="M9.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
          <path className={common} d="M20 20v-1a4 4 0 0 0-3-3.87" />
          <path className={common} d="M16 4.13a3.5 3.5 0 0 1 0 6.74" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect className={common} x="3" y="5" width="18" height="14" rx="2" />
          <path className={common} d="m3 7 9 6 9-6" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect className={common} x="4" y="4" width="16" height="16" rx="3" />
          <path className={common} d="M8 11v5" />
          <path className={common} d="M8 8.5v.01" />
          <path className={common} d="M12 16v-3a2 2 0 0 1 4 0v3" />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M9 19c-4 1.2-4-2-5-2" />
          <path className={common} d="M15 19v-3a3 3 0 0 0-.8-2.1c2.7-.3 5.5-1.4 5.5-6A4.4 4.4 0 0 0 18.5 5.8a4.1 4.1 0 0 0-.1-2.9s-1.1-.3-3.7 1.4a12.5 12.5 0 0 0-6.4 0C5.7 2.6 4.6 2.9 4.6 2.9a4.1 4.1 0 0 0-.1 2.9A4.4 4.4 0 0 0 4 7.9c0 4.6 2.8 5.7 5.5 6A3 3 0 0 0 8.7 16v3" />
        </svg>
      )
    case 'graduation':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="m22 10-10-5L2 10l10 5 10-5Z" />
          <path className={common} d="M6 11.5V16a6 6 0 0 0 12 0v-4.5" />
        </svg>
      )
    case 'envelope':
      return <Icon name="mail" className={className} />
    case 'file-alt':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" />
          <path className={common} d="M14 2v5h5" />
          <path className={common} d="M9 13h6" />
          <path className={common} d="M9 17h6" />
        </svg>
      )
    case 'lightbulb':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M9 18h6" />
          <path className={common} d="M10 22h4" />
          <path className={common} d="M8 14a6 6 0 1 1 8 0c-.8.7-1.3 1.7-1.5 2.7H9.5C9.3 15.7 8.8 14.7 8 14Z" />
        </svg>
      )
    case 'book-open':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M12 7v14" />
          <path className={common} d="M12 7a4 4 0 0 0-4-4H4v14h4a4 4 0 0 1 4 4" />
          <path className={common} d="M12 7a4 4 0 0 1 4-4h4v14h-4a4 4 0 0 0-4 4" />
        </svg>
      )
    case 'desktop':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect className={common} x="3" y="4" width="18" height="13" rx="2" />
          <path className={common} d="M8 20h8" />
          <path className={common} d="M12 17v3" />
        </svg>
      )
    case 'file-contract':
      return <Icon name="file-alt" className={className} />
    case 'scroll':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M8 19a2 2 0 1 1-2-2V5a2 2 0 0 1 2-2h10v14a2 2 0 0 1-2 2H8Z" />
          <path className={common} d="M8 19h10" />
          <path className={common} d="M9 8h6" />
          <path className={common} d="M9 12h6" />
        </svg>
      )
    case 'file-powerpoint':
      return <Icon name="file-alt" className={className} />
    case 'video':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect className={common} x="3" y="6" width="14" height="12" rx="2" />
          <path className={common} d="m17 10 4-2v8l-4-2" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M5 12h14" />
          <path className={common} d="m13 6 6 6-6 6" />
        </svg>
      )
    case 'download':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M12 3v12" />
          <path className={common} d="m7 10 5 5 5-5" />
          <path className={common} d="M5 21h14" />
        </svg>
      )
    case 'eye':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
          <circle className={common} cx="12" cy="12" r="3" />
        </svg>
      )
    case 'moon':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M21 12.5A8.5 8.5 0 1 1 11.5 3 7 7 0 0 0 21 12.5Z" />
        </svg>
      )
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle className={common} cx="12" cy="12" r="4" />
          <path className={common} d="M12 2v2" />
          <path className={common} d="M12 20v2" />
          <path className={common} d="m4.9 4.9 1.4 1.4" />
          <path className={common} d="m17.7 17.7 1.4 1.4" />
          <path className={common} d="M2 12h2" />
          <path className={common} d="M20 12h2" />
          <path className={common} d="m4.9 19.1 1.4-1.4" />
          <path className={common} d="m17.7 6.3 1.4-1.4" />
        </svg>
      )
    case 'code-2':
      return <Icon name="code" className={className} />
    case 'menu':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M4 7h16" />
          <path className={common} d="M4 12h16" />
          <path className={common} d="M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="m6 6 12 12" />
          <path className={common} d="m18 6-12 12" />
        </svg>
      )
    default:
      return null
  }
}