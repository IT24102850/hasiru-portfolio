import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';

const experiences = [
  {
    title: 'Product Designer & Engineer',
    company: 'Independent',
    period: '2023 – Present',
    description:
      'Partnering with startups and agencies to ship premium digital products, leading UX strategy, interface design, and implementation.',
  },
  {
    title: 'Undergraduate Research',
    company: 'SLIIT',
    period: '2022 – Present',
    description:
      'Exploring human-computer interaction, IoT ecosystems, and intelligent interfaces while mentoring peer-led teams.',
  },
  {
    title: 'Freelance Developer',
    company: 'Global Clients',
    period: '2021 – Present',
    description:
      'Delivering cross-platform applications, automation tools, and visual dashboards with an emphasis on craft and performance.',
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Experience</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Crafting impactful products through multidisciplinary leadership.
            </h1>
            <p className="muted max-w-3xl text-base">
              From embedded systems to full-stack platforms, I bridge research, design, and engineering to deliver
              thoughtful outcomes.
            </p>
          </header>

          <div className="grid gap-6">
            {experiences.map((experience) => (
              <article
                key={`${experience.title}-${experience.company}`}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{experience.title}</h2>
                    <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">{experience.company}</p>
                  </div>
                  <span className="text-sm text-zinc-400">{experience.period}</span>
                </div>
                <p className="muted mt-4 text-sm leading-relaxed">{experience.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
