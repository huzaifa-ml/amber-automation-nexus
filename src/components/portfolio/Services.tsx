import { useState } from "react";
import { Check } from "lucide-react";
import { SERVICES } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal, Section, SectionHeading, TechPill } from "./primitives";

export function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0]!.id);
  const active = SERVICES.find((s) => s.id === activeId)!;

  return (
    <Section id="services">
      <SectionHeading
        label="Services"
        title="How I can help"
        subtitle="Four ways I work with teams to put AI and automation into daily operations."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <ul className="flex flex-col gap-2" role="tablist" aria-label="Services">
            {SERVICES.map((s) => {
              const isActive = s.id === activeId;
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(s.id)}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "border-gold/50 bg-gold/10"
                        : "border-border bg-card/60 hover:border-gold/25 hover:bg-card",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-sm font-bold tabular-nums transition-colors",
                        isActive ? "text-gold" : "text-muted-foreground",
                      )}
                    >
                      {s.number}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block truncate text-sm font-semibold transition-colors",
                          isActive ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        {s.title}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "ml-auto h-6 w-[2px] shrink-0 rounded-full transition-all",
                        isActive ? "bg-gold" : "bg-transparent",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <article key={active.id} className="surface-card animate-fade-in h-full p-6 sm:p-8">
            <p className="font-display text-4xl font-bold text-gold/30">{active.number}</p>
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
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
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
