import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { Reveal, SectionLabel, TechPill } from "@/components/portfolio/primitives";
import { ProjectPreviewPlaceholder } from "@/components/portfolio/Projects";
import { FloatingNav } from "@/components/portfolio/FloatingNav";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = PROJECTS.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return {
      project: PROJECTS[index]!,
      prev: PROJECTS[index - 1] ?? null,
      next: PROJECTS[index + 1] ?? null,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.project.title} — Muhammad Huzaifa`;
    const description = loaderData.project.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, prev, next } = Route.useLoaderData();

  return (
    <main className="ambient-gold relative min-h-screen overflow-x-hidden px-5 pb-40 pt-16 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <Reveal className="mt-8">
          <SectionLabel>Project {project.number}</SectionLabel>
          <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <div className="surface-card p-4 sm:p-6">
            <div className="h-56 w-full sm:h-80">
              <ProjectPreviewPlaceholder label="Main project image — coming soon" />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((g) => (
                <figure key={g.caption} className="h-32 sm:h-40">
                  <ProjectPreviewPlaceholder label={g.caption} />
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={120}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="surface-card h-full p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">What it does</h2>
              <ul className="mt-5 space-y-3">
                {project.whatItDoes.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">Technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechPill key={t}>{t}</TechPill>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={240} className="mt-6">
          <div className="surface-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">My role</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.role}</p>
          </div>
        </Reveal>

        <nav
          aria-label="Project navigation"
          className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {prev ? (
            <Link
              to="/projects/$slug"
              params={{ slug: prev.slug }}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
              <span className="truncate">Previous: {prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold sm:text-right"
            >
              <span className="truncate">Next: {next.title}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>

      <FloatingNav />
    </main>
  );
}
