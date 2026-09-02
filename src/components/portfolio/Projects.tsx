import { useCallback, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

export function ProjectPreviewPlaceholder({ label = "Project preview" }: { label?: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-gold/25 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--gold)_9%,transparent),transparent_70%)]">
      <span className="text-[0.6rem] uppercase tracking-[0.26em] text-gold/60">{label}</span>
    </div>
  );
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const activeProject = PROJECTS.find((p) => p.slug === active) ?? null;

  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Selected work. Built to work."
        subtitle="AI systems, automation workflows, and intelligent solutions built to solve real operational problems."
      />

      <div
        ref={containerRef}
        onMouseMove={handleMove}
        onMouseLeave={() => setActive(null)}
        className="relative mt-12 border-t border-border"
      >
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              onMouseEnter={() => setActive(p.slug)}
              onFocus={() => setActive(p.slug)}
              onBlur={() => setActive(null)}
              className="group relative block border-b border-border px-1 py-7 outline-none transition-[transform,background-color,border-color] duration-300 hover:bg-gold/[0.035] focus-visible:bg-gold/[0.035] motion-safe:hover:translate-x-1 sm:px-4 md:py-9"
            >
              <span className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px scale-x-0 bg-gold/50 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              <div className="flex items-start gap-4 sm:gap-8">
                <span className="mt-1 font-display text-sm font-bold tabular-nums text-gold sm:text-base">
                  {p.number}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold leading-tight text-foreground transition-colors duration-300 group-hover:text-gold sm:text-2xl md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground/80">
                    {p.category} <span className="text-gold/60">·</span> {p.tech.slice(0, 3).join(" · ")}
                  </p>

                  {/* Compact preview for touch / small screens */}
                  <div className="mt-4 h-24 w-full lg:hidden">
                    <ProjectPreviewPlaceholder />
                  </div>
                </div>

                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-gold/50 group-hover:text-gold group-focus-visible:border-gold/50">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}

        {/* Cursor-following preview — desktop pointer devices only */}
        <div
          aria-hidden="true"
          style={{ transform: `translate3d(${pos.x + 24}px, ${pos.y - 90}px, 0)` }}
          className={`pointer-events-none absolute left-0 top-0 z-20 hidden w-[16rem] rounded-xl border border-gold/25 bg-card/95 p-3 shadow-[0_18px_50px_-20px_color-mix(in_oklab,var(--gold)_45%,transparent)] backdrop-blur-sm transition-[opacity,scale] duration-300 [@media(hover:hover)]:[@media(pointer:fine)]:lg:block ${
            activeProject ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="h-32 w-full">
            <ProjectPreviewPlaceholder />
          </div>
          <p className="mt-2 truncate font-display text-xs font-bold text-foreground">
            {activeProject?.title ?? ""}
          </p>
        </div>
      </div>
    </Section>
  );
}
