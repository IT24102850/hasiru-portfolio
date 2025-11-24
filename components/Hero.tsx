import Link from 'next/link'

type HeroProps = {
  name: string
  about: string
  location: string
  email: string
  linkedin: string
  github: string
}

export default function Hero({ name, about, location, email, linkedin, github }: HeroProps) {
  return (
    <div className="hero">
      <h1>
        Hello, I&apos;m {name}
      </h1>
      <p className="tagline">{about}</p>
      <div style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)' }}>
        <div>{location}</div>
        <div style={{ marginTop: '0.4rem' }}>
          Email:{' '}
          <a href={`mailto:${email}`} style={{ color: 'var(--neon-blue)' }}>
            {email}
          </a>{' '}
          ·
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--neon-blue)', marginLeft: '0.5rem' }}
          >
            LinkedIn
          </a>{' '}
          ·
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--neon-blue)', marginLeft: '0.5rem' }}
          >
            GitHub
          </a>
        </div>
      </div>
      <Link href="/contact" className="btn btn-primary" aria-label="Go to Contact Page">
        Let&apos;s Build
      </Link>
    </div>
  )
}
