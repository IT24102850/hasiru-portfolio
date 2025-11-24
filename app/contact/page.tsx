"use client";

import { FormEvent, useState } from "react";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import content from "../../data/content";
import { iconMap } from "../../components/social-icons";

const contactChannels = [
  {
    label: "Email",
    value: content.email,
    href: `mailto:${content.email}`,
    description: "Best for detailed project discussions and collaborations.",
    icon: "email" as const,
  },
  {
    label: "WhatsApp",
    value: content.phone,
    href: content.whatsapp,
    description: "Quick check-ins and rapid coordination via WhatsApp.",
    icon: "whatsapp",
  },
  {
    label: "Location",
    value: content.location,
    href: undefined,
    description: "Working remotely with teams across the globe.",
    icon: "location" as const,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: content.linkedin,
    description: "Connect for professional updates and design insights.",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    value: "Follow on Facebook",
    href: content.facebook,
    description: "Project spotlights and community updates.",
    icon: "facebook",
  },
  {
    label: "Instagram",
    value: "@chamika_2k04",
    href: content.instagram,
    description: "Behind-the-scenes snapshots and visual experiments.",
    icon: "instagram",
  },
  {
    label: "GitHub",
    value: "@IT24102850",
    href: content.github,
    description: "Explore code experiments and open-source projects.",
    icon: "github",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("Sending your message...");

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Message sent! I will reply soon.");
      event.currentTarget.reset();

      setTimeout(() => setStatus(null), 2500);
    }, 900);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Contact</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s create a premium experience together.
            </h1>
            <p className="muted mx-auto max-w-2xl text-base">
              Share some context around your project or opportunity, and I&apos;ll respond with next steps within 48 hours.
            </p>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <aside className="space-y-4">
              {contactChannels.map(({ label, value, href, description, icon }) => {
                const Icon = icon ? iconMap[icon] : null;
                const isExternal = href?.startsWith("http");
                return (
                  <div key={label} className="surface-card p-6">
                    <div className="flex items-center gap-3">
                      {Icon ? (
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                      ) : null}
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</p>
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="mt-3 block text-lg font-semibold text-white hover:text-cyan-300"
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="mt-3 block text-lg font-semibold text-white">{value}</span>
                    )}
                    <p className="muted mt-3 text-sm">{description}</p>
                  </div>
                );
              })}
            </aside>

            <section className="surface-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Project brief</p>
              <h2 className="mt-2 text-xl font-semibold text-white">Share a few details</h2>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                      placeholder="Elena from Orbit Studio"
                    />
                  </label>
                  <label className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                      placeholder="hello@brand.com"
                    />
                  </label>
                </div>

                <label className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">Project Overview</span>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                    placeholder="Share goals, timelines, and any links that help me understand the vision."
                  />
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-primary px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending…' : 'Send message'}
                  </button>
                  {status ? <span className="muted text-sm">{status}</span> : null}
                </div>
              </form>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
