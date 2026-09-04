import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { Lightbox } from "./Lightbox";

export function ProjectPreviewPlaceholder({ label = "Project preview" }: { label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-gold/25 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--gold)_9%,transparent),transparent_70%)]">
      <span className="text-[0.6rem] uppercase tracking-[0.26em] text-gold/60">{label}</span>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const [zoom, setZoom] = useState<{ src: string; caption: string } | null>(null);

  const activeProject = PROJECTS.find((p) => p.slug === active) ?? null;
  const activeShot = activeProject?.gallery[0];

  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Systems I've built"
        subtitle="A selection of AI systems and automation workflows I've designed to turn repetitive processes into intelligent, connected systems."
      />

      <div
        onMouseLeave={() => setActive(null)}
        className="relative mt-16 border-t border-border sm:mt-20"
      >
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              onMouseEnter={() => setActive(p.slug)}
              onFocus={() => setActive(p.slug)}
              className={`group relative flex items-center justify-between gap-5 border-b border-border px-1 py-6 outline-none transition-[opacity,color] duration-500 sm:px-3 sm:py-8 ${
                active && active !== p.slug ? "opacity-40" : "opacity-100"
              }`}
            >
              <span className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-gold/60 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />

              <div className="flex min-w-0 items-baseline gap-4 sm:gap-6">
                <span className="shrink-0 font-mono text-[0.65rem] tracking-[0.2em] text-gold/70 sm:text-xs">
                  {p.number}
                </span>
                <h3 className="min-w-0 font-display text-xl font-bold uppercase leading-tight tracking-tight text-foreground transition-[color,transform] duration-500 ease-out group-hover:text-gold group-focus-visible:text-gold motion-safe:group-hover:translate-x-1.5 sm:text-3xl md:text-[2.4rem]">
                  {p.title}
                </h3>
              </div>

              <ArrowRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-gold sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </Link>

            {/* Mobile / touch: inline preview image */}
            <div className="border-b border-border py-4 lg:hidden">
              <button
                type="button"
                onClick={() => setZoom({ src: p.gallery[0]!.src, caption: p.gallery[0]!.caption })}
                className="block w-full overflow-hidden rounded-xl border border-gold/20 bg-card/70 p-2"
                aria-label={`Enlarge ${p.title} screenshot`}
              >
                <img
                  src={p.gallery[0]!.src}
                  alt={`${p.title} workflow`}
                  loading="lazy"
                  className="h-36 w-full rounded-lg object-contain"
                />
              </button>
              <p className="mt-2 text-xs text-muted-foreground">{p.previewTagline}</p>
            </div>
          </Reveal>
        ))}

        <p className="mt-6 text-right text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground/70">
          Click on a project to see details
        </p>

        {/* Fixed, centered hover preview — desktop only */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-20 hidden w-[22rem] -translate-x-1/2 -translate-y-1/2 lg:block ${
            activeProject ? "" : ""
          }`}
        >
          <div
            className={`pointer-events-auto rounded-xl border border-gold/25 bg-card/95 p-3 shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--gold)_45%,transparent)] backdrop-blur-sm transition-[opacity,transform] duration-300 ease-out ${
              activeProject
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-1 scale-95 opacity-0"
            }`}
          >
            {activeShot ? (
              <button
                type="button"
                onClick={() => setZoom({ src: activeShot.src, caption: activeShot.caption })}
                className="block w-full overflow-hidden rounded-lg border border-border/60 bg-background/60"
                aria-label={`Enlarge ${activeProject?.title} screenshot`}
              >
                <img
                  src={activeShot.src}
                  alt={`${activeProject?.title} workflow`}
                  className="h-40 w-full object-contain p-1"
                />
              </button>
            ) : (
              <div className="h-40 w-full">
                <ProjectPreviewPlaceholder />
              </div>
            )}
            <p className="mt-3 truncate font-display text-sm font-bold uppercase tracking-wide text-foreground">
              {activeProject?.title ?? ""}
            </p>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {activeProject?.previewTagline ?? ""}
            </p>
            <p className="mt-1 truncate text-[0.65rem] uppercase tracking-[0.18em] text-gold/70">
              {activeProject?.previewTech ?? ""}
            </p>
          </div>
        </div>
      </div>

      <Lightbox src={zoom?.src ?? null} caption={zoom?.caption} onClose={() => setZoom(null)} />
    </Section>
  );
}
