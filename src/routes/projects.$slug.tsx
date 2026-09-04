import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, SectionLabel, TechPill } from "@/components/portfolio/primitives";
import { Lightbox } from "@/components/portfolio/Lightbox";
import { FloatingNav } from "@/components/portfolio/FloatingNav";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = PROJECTS.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return {
      project: PROJECTS[index]!,
      prev: PROJECTS[index - 1] ?? null,
      next: PROJECTS[index + 1] ?? null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.project.title} — Muhammad Huzaifa`;
    const description = loaderData.project.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, prev, next } = Route.useLoaderData();
  const [zoom, setZoom] = useState<{ src: string; caption: string } | null>(null);
  const hero = project.gallery[0]!;

  return (
    <main className="ambient-gold relative min-h-screen overflow-x-hidden px-5 pb-40 pt-16 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <Reveal className="mt-8">
          <SectionLabel>Project {project.number}</SectionLabel>
          <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <TechPill key={t}>{t}</TechPill>
            ))}
          </div>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground">
            <span className="text-gold">My role — </span>
            {project.role}
          </p>
        </Reveal>

        {/* Key figures */}
        <Reveal delay={60} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {project.figures.map((f) => (
              <div key={f.label} className="surface-card p-5">
                <p className="font-display text-2xl font-bold text-gold">{f.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Main project visual */}
        <Reveal delay={100} className="mt-6">
          <button
            type="button"
            onClick={() => setZoom({ src: hero.src, caption: hero.caption })}
            className="surface-card block w-full p-3 text-left transition-colors hover:border-gold/40 sm:p-4"
            aria-label={`Enlarge ${project.title} main visual`}
          >
            <img
              src={hero.src}
              alt={hero.caption}
              className="max-h-[24rem] w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-xs text-muted-foreground">{hero.caption}</p>
          </button>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={140}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">Overview</h2>
              {project.overview.map((o) => (
                <p key={o} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {o}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">How it works</h2>
              <ol className="mt-5 space-y-3">
                {project.howItWorks.map((s, i) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 shrink-0 font-mono text-[0.65rem] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Key capabilities</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Workflow / architecture gallery */}
        <Reveal delay={220} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Workflow &amp; architecture
            </h2>
            <div className="mt-6 space-y-6">
              {project.gallery.map((g) => (
                <figure key={g.src}>
                  <button
                    type="button"
                    onClick={() => setZoom({ src: g.src, caption: g.caption })}
                    className="block w-full overflow-hidden rounded-xl border border-border bg-background/50 p-2 transition-colors hover:border-gold/40 sm:p-3"
                    aria-label={`Enlarge screenshot: ${g.caption}`}
                  >
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="max-h-[26rem] w-full rounded-lg object-contain"
                    />
                  </button>
                  <figcaption className="mt-2 text-xs text-muted-foreground">{g.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={240} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Benefits</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <nav
          aria-label="Project navigation"
          className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {prev ? (
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              <span className="truncate">Previous: {prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold sm:text-right"
            >
              <span className="truncate">Next: {next.title}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <Lightbox src={zoom?.src ?? null} caption={zoom?.caption} onClose={() => setZoom(null)} />
      <FloatingNav />
    </main>
  );
}
