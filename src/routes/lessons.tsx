import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { LessonCard } from "@/components/LessonCard";
import { lessons } from "@/data/lessons";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "All A0 Lessons — LinguaClass" },
      { name: "description", content: "The full A0 English curriculum: 20 structured beginner lessons covering alphabet, grammar, and essential vocabulary." },
      { property: "og:title", content: "All A0 English Lessons" },
      { property: "og:description", content: "20 structured beginner lessons." },
    ],
  }),
  component: LessonsPage,
});

function LessonsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60" style={{ background: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">Level A0 · Absolute beginner</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">All lessons</h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Twenty carefully sequenced lessons. Start at lesson 1 and work through, or jump to a topic you want to practice.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lessons.map((l) => <LessonCard key={l.id} lesson={l} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
