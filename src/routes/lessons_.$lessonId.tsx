import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Target } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { lessons, type Lesson } from "@/data/lessons";

export const Route = createFileRoute("/lessons_/$lessonId")({
  loader: ({ params }) => {
    const lesson = lessons.find((l) => l.id === params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.lesson.title} — A0 English | LinguaClass` },
          { name: "description", content: loaderData.lesson.description },
          { property: "og:title", content: `${loaderData.lesson.title} — A0 English` },
          { property: "og:description", content: loaderData.lesson.description },
        ]
      : [{ title: "Lesson — LinguaClass" }],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-3xl font-semibold">Lesson not found</h1>
        <Link to="/lessons" className="mt-4 inline-block text-primary hover:underline">Back to all lessons</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: LessonPage,
});

function LessonPage() {
  const { lesson } = Route.useLoaderData() as { lesson: Lesson };
  const idx = lessons.findIndex((l) => l.id === lesson.id);
  const prev = lessons[idx - 1];
  const next = lessons[idx + 1];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Link to="/lessons" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> All lessons
          </Link>

          <header className="mt-6 border-b border-border pb-8">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-primary">
              <span>Lesson {String(lesson.number).padStart(2, "0")}</span>
              <span className="text-border">·</span>
              <span>A0 · {lesson.topic}</span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{lesson.title}</h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{lesson.description}</p>
            <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Clock className="h-3.5 w-3.5" /> {lesson.duration}
            </div>
          </header>

          <section className="mt-10">
            <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
              <Target className="h-5 w-5 text-primary" /> Learning objectives
            </h2>
            <ul className="mt-4 space-y-2.5">
              {lesson.objectives.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-card-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold">Key vocabulary</h2>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <table className="w-full text-sm">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-5 py-3 text-left font-medium">Word / Phrase</th>
                    <th className="px-5 py-3 text-left font-medium">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.vocabulary.map((v, i) => (
                    <tr key={v.word} className={i !== lesson.vocabulary.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-5 py-3 font-medium text-card-foreground">{v.word}</td>
                      <td className="px-5 py-3 text-muted-foreground">{v.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <nav className="mt-12 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
            {prev ? (
              <Link to="/lessons/$lessonId" params={{ lessonId: prev.id }} className="group flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-secondary">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><ArrowLeft className="h-3.5 w-3.5" /> Previous</span>
                <span className="font-display font-semibold text-card-foreground">{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to="/lessons/$lessonId" params={{ lessonId: next.id }} className="group flex flex-col items-end gap-1 rounded-2xl border border-border bg-card p-5 text-right transition-colors hover:bg-secondary sm:col-start-2">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">Next <ArrowRight className="h-3.5 w-3.5" /></span>
                <span className="font-display font-semibold text-card-foreground">{next.title}</span>
              </Link>
            ) : <div />}
          </nav>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
