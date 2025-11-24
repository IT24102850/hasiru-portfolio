"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const { body } = document;
    const previous = body.style.overflow;

    if (isMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_25px_80px_rgba(2,4,12,0.65)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          Hasiru Chamika
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-400 md:flex">
          {navigation.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative transition-colors duration-200 hover:text-white ${
                  isActive ? "text-white" : ""
                }`}
              >
                {label}
                {isActive ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <a
          href="mailto:hasiruchamika2004@gmail.com"
          className="cta-primary hidden px-4 py-2 text-xs uppercase tracking-[0.2em] md:inline-flex"
        >
          Let&apos;s Talk
        </a>
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-white transition md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <nav
        id="mobile-navigation"
        className={`fixed left-4 right-4 top-20 z-50 origin-top rounded-3xl border border-white/10 bg-black/85 p-6 text-sm text-zinc-200 shadow-[0_35px_90px_rgba(2,6,16,0.65)] backdrop-blur-xl transition-all duration-200 md:hidden ${
          isMenuOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navigation.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`flex items-center justify-between rounded-2xl border border-white/5 px-4 py-3 transition-colors duration-150 ${
                  isActive ? "bg-white/[0.08] text-white" : "bg-white/[0.03] hover:bg-white/[0.06]"
                }`}
              >
                <span>{label}</span>
                {isActive ? <span className="h-2 w-2 rounded-full bg-cyan-400" /> : null}
              </Link>
            );
          })}
        </div>
        <a
          href="mailto:hasiruchamika2004@gmail.com"
          className="cta-primary mt-6 flex w-full justify-center px-4 py-3 text-xs uppercase tracking-[0.2em]"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}
