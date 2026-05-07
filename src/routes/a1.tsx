import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { lessonsA1 } from "@/data/lessonsA1";

export const Route = createFileRoute("/a1")({
  head: () => ({
    meta: [
      { title: "A1 Lessons — LinguaClass" },
      {
        name: "description",
        content:
          "A1 elementary English curriculum: 7 structured lessons taking you from absolute beginner to elementary fluency.",
      },
      { property: "og:title", content: "A1 English Lessons" },
      { property: "og:description", content: "Seven structured A1 lessons based on the Logical Progression Syllabus." },
    ],
  }),
  component: A1Page,
});

function A1Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60" style={{ background: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Level A1 · Elementary · Fast-track curriculum
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              A1 lessons
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              A logical 7-step progression for adult learners — from the system of sound to a
              complete A1 self-introduction.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lessonsA1.map((l) => (
              <Link
                key={l.id}
                to="/a1/$lessonId"
                params={{ lessonId: l.id }}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent font-display text-base font-semibold text-accent-foreground">
                      {String(l.number).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">
                        A1 · {l.topic}
                      </p>
                      <h3 className="font-display text-lg font-semibold leading-tight text-card-foreground">
                        {l.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{l.description}</p>
                <div className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {l.duration}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
