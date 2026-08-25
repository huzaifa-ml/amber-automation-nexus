import { ArrowRight, Workflow, Bot, Code2, Database, Box } from "lucide-react";
import huzaifa from "@/assets/huzaifa.jpg.asset.json";

const ORBIT = [
  { label: "n8n", Icon: Workflow, angle: 0 },
  { label: "AI Agents", Icon: Bot, angle: 72 },
  { label: "Python", Icon: Code2, angle: 144 },
  { label: "RAG", Icon: Database, angle: 216 },
  { label: "Docker", Icon: Box, angle: 288 },
];


export function Hero() {
  return (
    <section
      id="home"
      className="ambient-gold relative flex min-h-screen scroll-mt-20 items-center px-5 pb-28 pt-24 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            AI Automation Architect
          </span>

          <h1 className="mt-6 max-w-2xl font-display text-[clamp(2.1rem,6vw,3.9rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em]">
            <span className="block text-foreground">Architecting AI systems</span>
            <span className="block text-gold">that run the work for you</span>
          </h1>


          <div className="mt-6 max-w-xl space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              I build systems that save time—connecting AI, automation, and APIs to turn
              repetitive work into smarter workflows.
            </p>
            <p>
              From idea to execution, I design intelligent solutions that run behind the scenes
              and keep business moving.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-10px_var(--gold)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_38px_-8px_var(--gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore my work
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-gold/45 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Let&apos;s build
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right: portrait + ecosystem */}
        <div className="relative mx-auto w-[86%] max-w-[20rem] sm:w-full sm:max-w-[26rem]">
          <div
            aria-hidden="true"
            className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_65%)] blur-2xl"
          />
          <div className="relative aspect-square">
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-full border border-gold/15"
            />
            <div
              aria-hidden="true"
              className="absolute inset-[13%] rounded-full border border-gold/25"
            />
            <div className="absolute inset-[19%] overflow-hidden rounded-full border border-gold/40 shadow-[0_0_60px_-20px_var(--gold)]">
              <img
                src={huzaifa.url}
                alt="Portrait of Muhammad Huzaifa, AI Automation Architect"
                width={560}
                height={560}
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--background)_85%,transparent),transparent_55%)]"
              />
            </div>

            <div className="orbit-spin absolute inset-0" aria-hidden="true">
              {ORBIT.map(({ label, Icon, angle }) => (
                <div
                  key={label}
                  className="absolute left-1/2 top-1/2 h-0 w-0"
                  style={{ transform: `rotate(${angle}deg) translateY(-48%)` }}
                >
                  <div
                    className="orbit-counter flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/35 bg-card/90 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md"
                    style={{ ["--orbit-angle" as string]: `${angle}deg` }}
                    title={label}
                  >
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
