import Link from "next/link";
import content from "../data/content";
import { iconMap } from "./social-icons";

const socials = [
  { label: "WhatsApp", href: content.whatsapp, icon: "whatsapp" as const },
  { label: "Facebook", href: content.facebook, icon: "facebook" as const },
  { label: "LinkedIn", href: content.linkedin, icon: "linkedin" as const },
  { label: "Instagram", href: content.instagram, icon: "instagram" as const },
  { label: "GitHub", href: content.github, icon: "github" as const },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Hasiru Chamika. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          {socials.map(({ label, href, icon }) => {
            const Icon = iconMap[icon];
            return (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-white transition hover:border-cyan-300/60 hover:bg-white/[0.12]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/70">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
