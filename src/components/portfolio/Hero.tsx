import { ArrowRight, Workflow, Bot, Code2, Database, Box } from "lucide-react";
import huzaifa from "@/assets/huzaifa-cutout.png";
import goldRing from "@/assets/gold-ring.png";

/** Each node has its own angle, orbit radius, speed and float delay → independent motion. */
const NODES = [
  { label: "n8n", Icon: Workflow, angle: -8, radius: 50, dur: 92, float: 0, fg: "#FF6D5A" },
  { label: "AI Agents", Icon: Bot, angle: 62, radius: 54, dur: 118, float: 1.2, fg: "#C9A227" },
  { label: "Python", Icon: Code2, angle: 143, radius: 48, dur: 104, float: 2.1, fg: "#FFD343" },
  { label: "RAG", Icon: Database, angle: 214, radius: 55, dur: 132, float: 0.6, fg: "#4FD1A5" },
  { label: "Docker", Icon: Box, angle: 292, radius: 49, dur: 110, float: 1.7, fg: "#7FC7F5" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="ambient-gold relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-5 pb-40 pt-14 sm:px-8 sm:pt-16 lg:pb-44 lg:pt-12"
    >
      {/* Right-side system indicator */}
      <div
        aria-hidden="true"
        className="hero-stage-1 pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-foreground/50 [writing-mode:vertical-rl]">
          system online
        </span>
        <span className="h-28 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold/70" />
        <span className="h-16 w-px bg-gradient-to-b from-gold/25 to-transparent" />
        <span className="h-1 w-1 rounded-full bg-gold/40" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: text */}
        <div className="pt-[6%] lg:pt-[10%]">
          <span className="hero-stage-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            AI Automation Architect
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.4rem,8.8vw,5.6rem)] font-bold uppercase leading-[0.88] tracking-[-0.045em]">
            <span className="hero-stage-6 block text-foreground">Think</span>
            <span className="hero-stage-6b block text-gold">Build</span>
            <span className="hero-stage-6c block text-foreground/85">Scale</span>
          </h1>

          <p className="hero-stage-7 mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            I build systems that save time—connecting AI, automation, and APIs to turn
            repetitive work into smarter workflows.
          </p>
          <p className="hero-stage-7 mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            From idea to execution, I design intelligent solutions that run behind the
            scenes and keep business moving.
          </p>


          <div className="hero-stage-7 mt-9 flex flex-wrap gap-3">
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

          <div className="hero-stage-7 mt-8 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground/60">
            <span className="inline-flex items-center gap-2">
              <span className="pulse-dot h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
              agents active
            </span>
            <span className="hidden h-px w-10 bg-border sm:block" />
            <span className="hidden sm:inline">n8n · rag · python</span>
          </div>
        </div>

        {/* Right: layered orbital system + portrait */}
        <div className="relative mx-auto w-[86%] max-w-[21rem] sm:w-full sm:max-w-[27rem]">
          <div className="relative aspect-square">
            {/* Layer 4 — halo */}
            <div
              aria-hidden="true"
              className="hero-stage-1 absolute inset-[-12%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_65%)] blur-2xl"
            />

            {/* Layer 1/2/3 — rings + travelling nodes (always behind portrait) */}
            <div aria-hidden="true" className="hero-stage-2 absolute inset-0">
              <img
                src={goldRing}
                alt=""
                width={1024}
                height={1024}
                className="ring-spin absolute inset-[4%] h-[92%] w-[92%] select-none opacity-80"
              />
              <div className="ring-slow absolute inset-[1%] rounded-full border border-gold/15" />
              <div className="ring-drift absolute inset-[-6%] rounded-full border border-gold/[0.07]">
                <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/70 shadow-[0_0_10px_var(--gold)]" />
                <span className="absolute bottom-[12%] right-[6%] h-1 w-1 rounded-full bg-gold/50" />
              </div>
            </div>

            {/* Portrait — above every background layer */}
            <img
              src={huzaifa}
              alt="Portrait of Muhammad Huzaifa, AI Automation Architect"
              width={928}
              height={1152}
              style={{
                maskImage: "linear-gradient(to bottom, #000 90%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 90%, transparent 100%)",
              }}

              className="hero-stage-4 absolute bottom-0 left-1/2 z-20 h-[98%] w-auto max-w-none -translate-x-1/2 select-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            />

            {/* Layer 5 — technology nodes, foreground */}
            <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true">
              {NODES.map(({ label, Icon, angle, radius, dur, float, fg }, i) => (
                <div
                  key={label}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className="node-orbit absolute inset-0"
                    style={{ animationDuration: `${dur}s`, animationDelay: `${-i * 7}s` }}
                  >
                    <div
                      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ top: `${50 - radius}%` }}
                    >

                    <div
                      className="node-counter"
                      style={{ animationDuration: `${dur}s`, animationDelay: `${-i * 7}s` }}
                    >
                      <div
                        className="hero-node-in"
                        style={{ animationDelay: `${1.5 + i * 0.16}s` }}
                      >
                        <div className="node-float" style={{ animationDelay: `${float}s` }}>
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-[linear-gradient(150deg,color-mix(in_oklab,var(--surface-2)_92%,transparent),color-mix(in_oklab,var(--background)_92%,transparent))] shadow-[0_14px_30px_-14px_rgba(0,0,0,0.9),inset_0_1px_0_color-mix(in_oklab,var(--gold)_18%,transparent)] backdrop-blur-sm sm:h-14 sm:w-14"
                            style={{ transform: `rotate(${-angle}deg)` }}
                            title={label}
                          >
                            <Icon
                              className="h-6 w-6 sm:h-7 sm:w-7"
                              style={{ color: fg }}
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
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
