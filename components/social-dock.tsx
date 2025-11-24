import content from '../data/content';
import { iconMap } from './social-icons';

const socialLinks = [
  {
    label: 'WhatsApp',
    href: content.whatsapp,
    handle: content.phone,
    gradient: 'from-emerald-500 via-lime-400 to-emerald-600',
    icon: 'whatsapp' as const,
  },
  {
    label: 'Facebook',
    href: content.facebook,
    handle: '@Hasirudev',
    gradient: 'from-sky-400 via-blue-500 to-indigo-500',
    icon: 'facebook' as const,
  },
  {
    label: 'LinkedIn',
    href: content.linkedin,
    handle: 'Professional',
    gradient: 'from-cyan-400 via-slate-300 to-blue-500',
    icon: 'linkedin' as const,
  },
  {
    label: 'Instagram',
    href: content.instagram,
    handle: '@chamika_2k04',
    gradient: 'from-fuchsia-400 via-rose-400 to-amber-400',
    icon: 'instagram' as const,
  },
  {
    label: 'GitHub',
    href: content.github,
    handle: '@IT24102850',
    gradient: 'from-slate-200 via-zinc-200 to-zinc-400',
    icon: 'github' as const,
  },
];

export default function SocialDock() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <span className="pointer-events-auto hidden rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-zinc-300 shadow-[0_20px_45px_rgba(4,6,14,0.6)] sm:block">
        Let&apos;s connect
      </span>
      <ul className="pointer-events-auto flex flex-col items-end gap-2 sm:gap-3">
        {socialLinks.map(({ label, href, handle, gradient, icon }) => {
          const Icon = iconMap[icon];
          return (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-sm text-white shadow-[0_25px_60px_rgba(5,10,25,0.55)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-white/[0.12] sm:px-4"
                aria-label={`${label} – ${handle}`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-white shadow-[0_12px_24px_rgba(3,6,18,0.45)] transition-transform duration-200 group-hover:scale-110 ${gradient}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex flex-col pr-1">
                  <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200">{label}</span>
                  <span className="text-sm font-medium text-white group-hover:text-cyan-200">{handle}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
