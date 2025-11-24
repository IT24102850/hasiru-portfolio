import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import content from '../../data/content';

type ProjectsPageProps = {
  searchParams?: {
    highlight?: string;
  };
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const highlight = searchParams?.highlight;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Project Archive</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Digital products with polish</h1>
                <p className="muted mt-3 max-w-2xl text-base">
                  A curated view of experiments, production launches, and R&D explorations across web, mobile, and
                  embedded interfaces.
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.projects.map((project) => {
              const isHighlighted = highlight === project.title;

              return (
                <article
                  key={project.title}
                  className={`flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] ${
                    isHighlighted ? 'ring-2 ring-cyan-400/70' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
                      <span>{project.progress}% complete</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>Project</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                    <p className="muted text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span key={tag} className="tag-pill bg-white/8 text-cyan-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#22d3ee]" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
