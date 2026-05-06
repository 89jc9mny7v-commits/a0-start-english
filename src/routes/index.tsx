import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles, Users } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { LessonCard } from "@/components/LessonCard";
import { lessons } from "@/data/lessons";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const featured = lessons.slice(0, 6);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-[var(--shadow-soft)]">
                  <Sparkles className="h-3.5 w-3.5 text-primary" /> Built for absolute beginners
                </span>
                <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
                  Learn English<br />from <span className="text-primary">zero</span>.
                </h1>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  A complete A0 curriculum with 20 structured lessons — the alphabet, greetings,
                  grammar essentials, and everyday vocabulary you'll actually use.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/lessons"
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:opacity-90"
                  >
                    Browse all lessons <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/lessons/$lessonId"
                    params={{ lessonId: "a0-01-hello" }}
                    className="inline-flex h-12 items-center rounded-full border border-border bg-card px-6 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary"
                  >
                    Start lesson 1
                  </Link>
                </div>
                <div className="mt-10 flex gap-8 text-sm">
                  <div>
                    <p className="font-display text-2xl font-semibold text-foreground">20</p>
                    <p className="text-muted-foreground">A0 lessons</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-foreground">10h+</p>
                    <p className="text-muted-foreground">of content</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-semibold text-foreground">100%</p>
                    <p className="text-muted-foreground">free</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-primary">Lesson 01</p>
                      <p className="font-display font-semibold">Hello & Goodbye</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {["Hello 👋", "Good morning ☀️", "Good evening 🌙", "Goodbye 👋"].map((s) => (
                      <div key={s} className="rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-[var(--gradient-hero)] opacity-20 blur-2xl sm:block" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border/60 bg-surface">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              { icon: BookOpen, title: "Structured curriculum", desc: "Every lesson builds on the last, from the alphabet to full sentences." },
              { icon: Users, title: "For real beginners", desc: "No prior English required. We start at the very beginning." },
              { icon: Sparkles, title: "Practical vocabulary", desc: "Learn words and phrases you'll actually use every day." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured lessons */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">A0 · Beginner</p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Start with these lessons</h2>
            </div>
            <Link to="/lessons" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:inline-flex">
              View all 20 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((l) => <LessonCard key={l.id} lesson={l} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
