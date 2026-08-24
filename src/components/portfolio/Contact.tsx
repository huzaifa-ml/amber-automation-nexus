import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { CONTACT, SERVICES } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

const CHANNELS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    href: CONTACT.whatsappUrl,
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "LinkedIn",
    value: CONTACT.linkedinDisplay,
    href: CONTACT.linkedin,
    Icon: Linkedin,
    external: true,
  },
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "Tell me a little more (10+ characters).";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No email backend is connected yet. Instead of faking a successful send,
    // the submission is handed off to the visitor's mail client.
    // Replace this handler with a server function when a backend is added.
    const subject = encodeURIComponent(`New project enquiry${topic ? ` — ${topic}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject / Service: ${topic || "—"}\n\n${message}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <Section id="contact" className="ambient-gold pb-36">
      <SectionHeading
        label="Contact"
        title="Let's build something intelligent."
        subtitle="Tell me about the process you want to automate — or the AI system you want to exist."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-3">
            {CHANNELS.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="surface-card group flex items-center gap-4 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gold/35 bg-gold/10 text-gold">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:text-gold"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} noValidate className="surface-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-foreground">
                  Name
                </label>
                <input id="name" name="name" className={field} placeholder="Your name" />
                {errors.name ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder="you@company.com"
                />
                {errors.email ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="topic" className="mb-2 block text-xs font-medium text-foreground">
                Project / Service
              </label>
              <select id="topic" name="topic" className={field} defaultValue="">
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${field} resize-y`}
                placeholder="What would you like to automate?"
              />
              {errors.message ? (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send message
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              No mail service is connected yet — submitting opens your email client with the
              message prepared for {CONTACT.email}.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
