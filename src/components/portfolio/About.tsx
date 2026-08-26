import { FileText, Linkedin, Mail, MessageCircle } from "lucide-react";
import huzaifa from "@/assets/huzaifa.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import { CONTACT, CORE_TECH, PRINCIPLES, SKILLS } from "@/data/portfolio";
import { Reveal, Section, SectionHeading, TechPill } from "./primitives";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        label="About"
        title={
          <>
            Designing intelligent systems,
            <br className="hidden sm:block" /> not isolated automations.
          </>
        }
      />

      <div className="mt-12 grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-6">
          <article className="surface-card h-full p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <img
                src={huzaifa.url}
                alt="Muhammad Huzaifa"
                loading="lazy"
                width={160}
                height={160}
                className="h-24 w-24 shrink-0 rounded-2xl border border-gold/30 object-cover object-top sm:h-32 sm:w-32"
              />
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-foreground">
                  AI Automation Architect &amp; AI student
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  I build AI automation systems that simplify complex business operations —
                  designing workflows where AI agents, APIs and data pipelines work together
                  instead of living in separate tools.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  My focus is agentic AI, intelligent workflow automation and integrations. I am
                  currently studying Artificial Intelligence while building and shipping real
                  automation systems as an independent and freelance AI automation developer,
                  based in {CONTACT.location}.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={resume.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    View resume
                  </a>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120} className="md:col-span-3">
          <article className="surface-card h-full p-6">
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
              Approach
            </h3>
            <ul className="mt-5 space-y-5">
              {PRINCIPLES.map((p) => (
                <li key={p.title}>
                  <p className="text-sm font-semibold text-foreground">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={160} className="md:col-span-3">
          <article className="surface-card flex h-full flex-col p-6">
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold">
              Technology stack
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {CORE_TECH.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <TechPill key={s}>{s}</TechPill>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Email Muhammad Huzaifa"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Muhammad Huzaifa"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

