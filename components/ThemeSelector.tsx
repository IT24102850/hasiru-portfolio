"use client"

import { useEffect, useState } from 'react'

type ThemeName = 'Progiclad' | 'Aolix' | 'Foxaloe'

type ThemeValues = Record<string, string>

const themes: Record<ThemeName, ThemeValues> = {
  Progiclad: {
    '--neon-purple': '#ff2e63',
    '--neon-blue': '#08f7fe',
    '--neon-yellow': '#f1c40f',
    '--dark-bg': '#1a1a2e',
  },
  Aolix: {
    '--neon-purple': '#9b59b6',
    '--neon-blue': '#3498db',
    '--neon-yellow': '#f1c40f',
    '--dark-bg': '#162447',
  },
  Foxaloe: {
    '--neon-purple': '#bc13fe',
    '--neon-blue': '#0ff0fc',
    '--neon-yellow': '#f5d742',
    '--dark-bg': '#0a0a12',
  },
}

export default function ThemeSelector() {
  const [activeTheme, setActiveTheme] = useState<ThemeName>('Foxaloe')

  useEffect(() => {
    const root = document.documentElement
    const values = themes[activeTheme]
    Object.entries(values).forEach(([variable, value]) => {
      root.style.setProperty(variable, value)
    })
  }, [activeTheme])

  return (
    <div className="theme-selector">
      {(Object.keys(themes) as ThemeName[]).map((theme) => (
        <button
          key={theme}
          className={`theme-pill ${activeTheme === theme ? 'active' : ''}`}
          type="button"
          aria-label={`Select ${theme} Theme`}
          onClick={() => setActiveTheme(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
  )
}
