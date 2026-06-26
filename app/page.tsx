"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CONTENT, PROJECTS, STACK, SOCIAL, type Lang } from "@/lib/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const t = CONTENT[lang];

  // keep <html lang> in sync with the toggle for a11y / SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="relative min-h-screen">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-[-12%] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute right-[-12%] top-[28%] h-[420px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-[-12%] left-[-8%] h-[420px] w-[520px] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* header */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#060610]/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm font-semibold text-white">
            LS<span className="text-violet-400">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-400 sm:flex">
            <a href="#about" className="transition hover:text-white">{t.nav.about}</a>
            <a href="#projects" className="transition hover:text-white">{t.nav.projects}</a>
            <a href="#stack" className="transition hover:text-white">{t.nav.stack}</a>
            <a href="#contact" className="transition hover:text-white">{t.nav.contact}</a>
          </nav>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300 transition hover:bg-white/10"
            aria-label="Toggle language"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* hero */}
        <section className="flex min-h-[82vh] flex-col justify-center py-20">
          <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
          <div className="flex-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">Lucas Nahuel Serpa</h1>
          <p className="mt-4 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-lg font-medium text-transparent sm:text-xl">
            {t.hero.role}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">{withBold(t.hero.tagline)}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-violet-400 hover:to-indigo-400"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {t.hero.ctaContact}
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              GitHub
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
          </div>
          <div className="relative mx-auto shrink-0 sm:mx-0">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-violet-500/40 via-fuchsia-500/20 to-cyan-400/30 blur-2xl" />
            <Image
              src="/perfil.jpg"
              alt="Lucas Nahuel Serpa"
              width={256}
              height={256}
              priority
              className="relative h-44 w-44 rounded-full border border-white/15 object-cover shadow-xl sm:h-60 sm:w-60"
            />
          </div>
          </div>
        </section>

        {/* about */}
        <Section id="about" label={t.about.label}>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.about.heading}</h2>
          <div className="mt-5 max-w-3xl space-y-4 text-slate-300/90 leading-relaxed">
            {t.about.body.map((p, i) => (
              <p key={i}>{withBold(p)}</p>
            ))}
            <p className="font-mono text-sm text-slate-500">📍 {t.about.location}</p>
          </div>
        </Section>

        {/* projects */}
        <Section id="projects" label={t.projects.label}>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.projects.heading}</h2>
          <p className="mt-3 max-w-2xl text-slate-400">{withBold(t.projects.subtitle)}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => {
              const item = t.projects.items[p.key];
              return (
                <div
                  key={p.key}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition ${p.border}`}
                >
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl ${p.glow}`} />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl leading-none">{p.emoji}</span>
                      <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{withBold(item.desc)}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-4 text-sm font-medium">
                      <a href={p.demo} target="_blank" rel="noreferrer" className="text-white transition hover:text-violet-300">
                        {t.projects.demo} ↗
                      </a>
                      <a href={p.repo} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-white">
                        {t.projects.code}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* course */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-violet-400">{t.course.label}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{t.course.heading}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">{withBold(t.course.body)}</p>
            </div>
            <a
              href={SOCIAL.courseRepo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:mt-0"
            >
              {t.course.cta} ↗
            </a>
          </div>
        </Section>

        {/* stack */}
        <Section id="stack" label={t.stack.label}>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.stack.heading}</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <span
                key={s}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-sm text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* contact */}
        <Section id="contact" label={t.contact.label}>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{t.contact.heading}</h2>
          <p className="mt-4 max-w-2xl text-slate-400">{withBold(t.contact.body)}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${SOCIAL.email}`}
              className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-violet-400 hover:to-indigo-400"
            >
              {SOCIAL.email}
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </Section>
      </main>

      <footer className="mx-auto mt-10 max-w-5xl border-t border-white/5 px-6 py-8 text-sm text-slate-500">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Lucas Nahuel Serpa</span>
          <span className="font-mono text-xs">{t.footer}</span>
        </div>
      </footer>
    </div>
  );
}

function withBold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/5 py-16 sm:py-20">
      <p className="mb-5 font-mono text-xs uppercase tracking-widest text-violet-400">{label}</p>
      {children}
    </section>
  );
}
