import { useEffect, useState } from "react";
import { Home, User, Briefcase, Layers, Quote, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "services", label: "Services", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: Layers },
  { id: "testimonials", label: "Testimonials", Icon: Quote },
  { id: "contact", label: "Contact", Icon: Mail },
];

export function FloatingNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const onScroll = () => {
      const marker = window.innerHeight * 0.4;
      let current = sections[0]?.id ?? "home";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= marker) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]"
    >
      <ul className="flex items-center gap-1 rounded-full border border-border bg-background/70 p-1.5 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:gap-1.5 sm:p-2">
        {ITEMS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                title={label}
                className={cn(
                  "group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-11 sm:w-11",
                  isActive
                    ? "bg-gold text-primary-foreground shadow-[0_0_24px_-6px_var(--gold)]"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
                <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
