import Image from 'next/image';
import Link from 'next/link';
import SiteFooter from '../components/site-footer';
import SiteHeader from '../components/site-header';
import content from '../data/content';

const profileImagePath = '/images/my.jpg';

const focusAreas = ['UX Strategy', 'Design Systems', 'Product Thinking', 'IoT Interfaces'];

const quickStats = [
  { label: 'Base', value: content.location },
  { label: 'Disciplines', value: 'Product design · Full-stack · IoT' },
  { label: 'Availability', value: 'Open to collaborations in 2025' },
];

export default function Home() {
  const featuredProjects = content.projects.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="relative flex-1 overflow-hidden pt-28 sm:pt-32">
        <div className="pointer-events-none absolute -left-40 top-10 hidden h-72 w-72 rounded-[24rem] glow-ring opacity-70 md:block" />
        <div className="pointer-events-none absolute -right-56 bottom-0 hidden h-[26rem] w-[26rem] rounded-[26rem] glow-ring opacity-60 md:block" />

        <section
          id="home"
          className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 sm:gap-16 sm:pb-24 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="relative flex flex-col gap-10">
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
              <div className="relative mx-auto h-64 w-56 overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.04] shadow-[0_40px_90px_rgba(3,7,18,0.7)] lg:hidden">
                <Image src={profileImagePath} alt="Portrait" fill className="object-cover" priority />
              </div>

              <div className="relative z-10 max-w-xl space-y-6">
                <div className="inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs uppercase tracking-[0.3em] text-zinc-300">
                  <span>UI/UX · Product Designer</span>
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  <span>Developer</span>
                </div>
                <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Hello, I&apos;m Hasiru
                </h1>
                <p className="muted text-lg leading-relaxed">
                  I&apos;m Hasiru Chamika &mdash; an undergraduate student at SLIIT. I build web &amp; mobile apps and work on embedded
                  systems and IoT. I have hands-on experience with Python, JavaScript, React, Node.js, Android, Flutter and
                  ESP32-based projects. Currently exploring data science and machine learning.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects" className="cta-primary px-7 py-3 text-sm">
                    View my work
                  </Link>
                  <Link href="/contact" className="cta-secondary px-7 py-3 text-sm text-zinc-200 hover:bg-white/10">
                    Let&apos;s collaborate
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <span key={area} className="tag-pill px-4 py-2 text-zinc-100/90">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative hidden h-[480px] w-64 shrink-0 overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/[0.04] shadow-[0_60px_120px_rgba(3,7,18,0.85)] lg:block">
                <Image src={profileImagePath} alt="Portrait" fill className="object-cover" priority />
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md sm:max-w-sm">
            <div className="pointer-events-none absolute inset-0 -translate-x-6 translate-y-6 rounded-[3.5rem] bg-gradient-to-br from-cyan-500/30 via-indigo-500/25 to-fuchsia-500/25 blur-2xl sm:-translate-x-8 sm:translate-y-8 sm:rounded-[4rem]" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/60 p-6 shadow-[0_45px_110px_rgba(2,6,14,0.8)] sm:rounded-[3rem] sm:p-7">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-zinc-500">
                <span>Builder&apos;s Log</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[0.65rem] font-semibold text-zinc-300">2025 roadmap</span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-zinc-300">
                <div className="grid gap-3">
                  <div className="space-y-1">
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">Current base</span>
                    <div className="surface-subtle flex items-center justify-between px-4 py-3 text-sm">
                      <span>{content.location}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">Focus</span>
                      <div className="surface-subtle px-4 py-3 text-sm">IoT &amp; product experiments</div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">Next launch</span>
                      <div className="surface-subtle px-4 py-3 text-sm">Dec 2025 · IoT MVP</div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">Collaboration</span>
                    <div className="surface-subtle flex items-center justify-between px-4 py-3 text-sm">
                      <span>Open to product &amp; research partners</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {featuredProjects.slice(0, 2).map((project, index) => (
                    <div
                      key={project.title}
                      className="surface-subtle flex items-center gap-4 p-3"
                      style={{
                        background:
                          index % 2 === 0
                            ? 'linear-gradient(135deg, rgba(99,102,241,0.14), rgba(14,165,233,0.08))'
                            : 'linear-gradient(135deg, rgba(8,145,178,0.12), rgba(139,92,246,0.08))',
                      }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-zinc-200">
                        {project.progress}%
                      </div>
                      <div className="space-y-1 text-xs">
                        <p className="text-sm font-medium text-white">{project.title}</p>
                        <p className="text-zinc-500">{project.tech.slice(0, 3).join(' · ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/10 bg-white/[0.035]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">About</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Multidisciplinary designer &amp; engineer.</h2>
              <p className="muted text-base leading-relaxed">
                I pair user-centered design with full-stack engineering and embedded systems experience to translate
                complex ideas into elegant products. From early discovery and UX research through interface design,
                prototyping, and implementation, I steward every step with a keen eye for polish.
              </p>
            </div>
            <div className="space-y-4">
              {quickStats.map((item) => (
                <div key={item.label} className="surface-card px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{item.label}</p>
                  <p className="mt-2 text-sm text-zinc-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Selected Work</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Featured case studies</h2>
              </div>
              <Link href="/projects" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                View full archive →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    <span>{project.progress}% complete</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span>Case Study</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="muted text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="tag-pill bg-white/8 text-cyan-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-white/[0.035]">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 text-center sm:py-24">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Collaborate</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Building something exciting?</h2>
            <p className="muted mx-auto max-w-2xl text-base">
              I partner with founders, agencies, and product teams to ship premium digital experiences—from early
              prototypes to production-ready launches.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="mailto:hasiruchamika2004@gmail.com" className="cta-primary px-6 py-3 text-sm">
                Schedule a conversation
              </Link>
              <Link href="/contact" className="cta-secondary px-6 py-3 text-sm text-zinc-200 hover:bg-white/10">
                Explore contact options
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
