import { ArrowRight, Workflow, Bot, Code2, Database, Box } from "lucide-react";
import huzaifa from "@/assets/huzaifa-cutout.png";
import goldRing from "@/assets/gold-ring.png";

const ORBIT = [
  { label: "n8n", Icon: Workflow, angle: 0, bg: "#1f2126", fg: "#FF6D5A" },
  { label: "AI Agents", Icon: Bot, angle: 72, bg: "#6D3BF5", fg: "#FFFFFF" },
  { label: "Python", Icon: Code2, angle: 144, bg: "#242A36", fg: "#FFD343" },
  { label: "RAG", Icon: Database, angle: 216, bg: "#0EA47A", fg: "#FFFFFF" },
  { label: "Docker", Icon: Box, angle: 288, bg: "#2496ED", fg: "#FFFFFF" },
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

        {/* Right: portrait + rotating tech symbols */}
        <div className="relative mx-auto w-[88%] max-w-[21rem] sm:w-full sm:max-w-[27rem]">
          <div
            aria-hidden="true"
            className="absolute inset-[-14%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_65%)] blur-2xl"
          />

          <div className="relative aspect-square">
            {/* Golden brush ring backdrop */}
            <img
              src={goldRing}
              alt=""
              aria-hidden="true"
              width={1024}
              height={1024}
              className="ring-spin absolute inset-[4%] h-[92%] w-[92%] select-none opacity-90"
            />

            {/* Portrait cutout */}
            <img
              src={huzaifa}
              alt="Portrait of Muhammad Huzaifa, AI Automation Architect"
              width={928}
              height={1152}
              style={{
                maskImage: "linear-gradient(to bottom, #000 78%, transparent 99%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 99%)",
              }}
              className="absolute bottom-0 left-1/2 h-[98%] w-auto max-w-none -translate-x-1/2 select-none object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.65)]"
            />

            {/* Rotating symbols */}
            <div className="orbit-spin absolute inset-0" aria-hidden="true">
              {ORBIT.map(({ label, Icon, angle, bg, fg }) => (
                <div
                  key={label}
                  className="absolute inset-0"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div className="absolute left-1/2 top-0 -ml-[28px] -mt-[28px] h-14 w-14">
                    <div className="orbit-counter h-full w-full">
                      <div
                        className="flex h-full w-full items-center justify-center rounded-[1.15rem] shadow-[0_18px_38px_-14px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
                        style={{ transform: `rotate(${-angle}deg)`, backgroundColor: bg }}
                        title={label}
                      >
                        <Icon className="h-7 w-7" style={{ color: fg }} strokeWidth={2.1} />
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
