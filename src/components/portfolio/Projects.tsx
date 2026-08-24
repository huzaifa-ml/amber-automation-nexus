import { PROJECTS, type Project } from "@/data/portfolio";
import { Reveal, Section, SectionHeading, TechPill } from "./primitives";

function SystemVisual({ number }: { number: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[13rem] items-center justify-center overflow-hidden rounded-xl border border-border bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--gold)_10%,transparent),transparent_70%)]"
    >
      <svg viewBox="0 0 200 120" className="h-full w-full max-w-[20rem] opacity-90">
        <g stroke="var(--gold)" strokeOpacity="0.35" strokeWidth="0.8" fill="none">
          <path d="M30 60 C 60 60, 60 30, 100 30 C 140 30, 140 60, 170 60" />
          <path d="M30 60 C 60 60, 60 90, 100 90 C 140 90, 140 60, 170 60" />
          <path d="M30 60 H 170" />
        </g>
        {[
          [30, 60],
          [100, 30],
          [100, 60],
          [100, 90],
          [170, 60],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="7" fill="var(--surface-2)" stroke="var(--gold)" strokeOpacity="0.55" strokeWidth="0.8" />
            <circle cx={cx} cy={cy} r="2.2" fill="var(--gold)" />
          </g>
        ))}
      </svg>
      <span className="absolute bottom-3 right-4 font-display text-5xl font-bold text-gold/15">
        {number}
      </span>
    </div>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="surface-card grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
      <div className={flip ? "lg:order-2" : undefined}>
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-bold tabular-nums text-gold">
            {project.number}
          </span>
          <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            {project.category}
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-foreground sm:text-2xl">
          {project.title}
        </h3>

        <div className="mt-5 space-y-4 text-sm leading-relaxed">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">Problem</p>
            <p className="mt-1 text-muted-foreground">{project.problem}</p>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">Solution</p>
            <p className="mt-1 text-muted-foreground">{project.solution}</p>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">My role</p>
            <p className="mt-1 text-muted-foreground">{project.role}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechPill key={t}>{t}</TechPill>
          ))}
        </div>
      </div>

      <div className={flip ? "lg:order-1" : undefined}>
        <SystemVisual number={project.number} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Projects"
        title="Featured systems"
        subtitle="Automation systems built end to end — from the problem behind them to the workflow that solves it."
      />

      <div className="mt-12 space-y-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.number} delay={i * 60}>
            <ProjectCard project={p} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
