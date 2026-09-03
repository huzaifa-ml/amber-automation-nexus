import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
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
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  // Smoothed cursor-follow + velocity-based tilt (mirrors the reference motion)
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const tilt = useRef(0);
  const raf = useRef<number | null>(null);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  useEffect(() => {
    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.12;
      current.current.y += dy * 0.12;
      // lag translates into a gentle rotation, easing back to 0 when still
      tilt.current += (Math.max(-12, Math.min(12, dx * 0.35)) - tilt.current) * 0.1;

      const el = previewRef.current;
      if (el) {
        el.style.transform = `translate3d(${current.current.x + 28}px, ${
          current.current.y - 110
        }px, 0) rotate(${tilt.current.toFixed(2)}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const activeProject = PROJECTS.find((p) => p.slug === active) ?? null;

  return (
    <Section id="projects">
      <SectionHeading
        label="Selected projects"
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
              className={`group relative flex items-baseline justify-between gap-6 border-b border-border px-1 py-6 outline-none transition-[opacity,color] duration-500 sm:px-4 sm:py-8 md:py-10 ${
                active && active !== p.slug ? "opacity-35" : "opacity-100"
              }`}
            >
              <span className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-gold/60 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />

              <h3 className="font-display text-2xl font-bold leading-none tracking-tight text-foreground transition-[color,transform] duration-500 ease-out group-hover:text-gold group-focus-visible:text-gold motion-safe:group-hover:translate-x-2 sm:text-4xl md:text-5xl">
                {p.title}
              </h3>

              <span className="shrink-0 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-500 group-hover:text-gold/80 sm:text-[0.68rem]">
                {p.category}
              </span>
            </Link>
          </Reveal>
        ))}

        <p className="mt-6 text-right text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground/70">
          Click on a project to see details
        </p>

        {/* Cursor-following preview — desktop pointer devices only */}
        <div
          ref={previewRef}
          aria-hidden="true"
          className={`project-pointer-preview pointer-events-none absolute left-0 top-0 z-20 hidden w-[19rem] rounded-xl border border-gold/25 bg-card/95 p-3 shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--gold)_50%,transparent)] backdrop-blur-sm transition-[opacity,scale] duration-500 ease-out ${
            activeProject ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="h-40 w-full">
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
