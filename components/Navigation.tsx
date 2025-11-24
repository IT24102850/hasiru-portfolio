"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', icon: '🏠', text: 'Home' },
  { href: '/projects', icon: '📁', text: 'Projects' },
  { href: '/skills', icon: '⚙️', text: 'Skills' },
  { href: '/experience', icon: '🧠', text: 'Experience' },
  { href: '/contact', icon: '✉️', text: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav>
      <div className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
              aria-label={`${item.text} Page`}
            >
              <span className="nav-icon" aria-hidden>
                {item.icon}
              </span>
              <span className="nav-text">{item.text}</span>
            </Link>
          )
        })}
      </div>

      <div className="nav-dots">
        <div className="dot active" aria-label="Scroll to Main Section" />
        <div className="dot" aria-label="Scroll to Section 2" />
        <div className="dot" aria-label="Scroll to Section 3" />
        <div className="dot" aria-label="Scroll to Section 4" />
      </div>
    </nav>
  )
}
