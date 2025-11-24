import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';

const skillGroups = [
  {
    category: 'Product & Design',
    description: 'Human-centered discovery, UX strategy, polished UI systems.',
    items: ['UX Research', 'Information Architecture', 'Design Systems', 'Figma', 'Prototyping'],
  },
  {
    category: 'Frontend Engineering',
    description: 'Reliable interfaces built with modern frameworks and motion.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend & Cloud',
    description: 'API design, data pipelines, and deployment workflows.',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST & GraphQL'],
  },
  {
    category: 'Mobile & Cross-Platform',
    description: 'Native and hybrid solutions with delightful interactions.',
    items: ['Flutter', 'React Native', 'Android'],
  },
  {
    category: 'IoT & Embedded',
    description: 'Sensor integrations bridging physical and digital experiences.',
    items: ['ESP32', 'Arduino', 'Raspberry Pi', 'Realtime Dashboards'],
  },
];

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Capabilities</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Strategy, craft, and technical depth across the product lifecycle.
            </h1>
            <p className="muted max-w-3xl text-base">
              I blend product thinking with hands-on engineering, enabling seamless handoff between discovery, design,
              and production execution.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.category}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{group.category}</p>
                    <p className="muted mt-2 text-sm">{group.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag-pill bg-white/8 text-cyan-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
