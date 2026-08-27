import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, Section, SectionHeading, TechPill } from "./primitives";

export function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0]!.id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0]!;

  return (
    <Section id="services">
      <SectionHeading
        label="Services"
        title="How I can help"
        subtitle="Three ways I work with teams to put AI and automation into daily operations."
      />

      <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <ul className="flex flex-col" role="tablist" aria-label="Services">
            {SERVICES.map((s) => {
              const isActive = s.id === activeId;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onMouseEnter={() => setActiveId(s.id)}
                    onFocus={() => setActiveId(s.id)}
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "group flex w-full items-center gap-5 border-b border-border px-2 py-6 text-left transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive ? "translate-x-1 border-gold/40" : "hover:translate-x-1",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-xs font-bold tabular-nums transition-all duration-300",
                        isActive ? "text-gold" : "text-muted-foreground/60",
                      )}
                    >
                      {s.number}
                    </span>
                    <span
                      className={cn(
                        "font-display text-lg font-bold uppercase tracking-tight transition-colors duration-300 sm:text-xl",
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground/50 group-hover:text-muted-foreground",
                      )}
                    >
                      {s.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "ml-auto h-[2px] shrink-0 rounded-full bg-gold transition-all duration-300",
                        isActive ? "w-8 opacity-100" : "w-0 opacity-0",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <article
            key={active.id}
            className="surface-card animate-fade-in flex h-full flex-col p-6 shadow-[0_0_60px_-40px_var(--gold)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-display text-4xl font-bold text-gold/30">{active.number}</p>
              <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold">
                Service {active.number}
              </span>
            </div>

            <h3 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-gold">{active.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.detail}</p>

            <ul className="mt-6 space-y-3">
              {active.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-5">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                Next step
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: active.slug }}
                className="group mt-2 inline-flex items-center gap-2 font-display text-base font-bold text-foreground transition-colors duration-300 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Details
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
