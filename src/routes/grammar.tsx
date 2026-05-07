import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { grammarSections } from "@/data/grammar";

export const Route = createFileRoute("/grammar")({
  head: () => ({
    meta: [
      { title: "A0–A1 Grammar Reference — LinguaClass" },
      {
        name: "description",
        content:
          "Complete A0 to A1 English grammar reference: pronouns, verb to be, present and past simple, articles, prepositions and more.",
      },
      { property: "og:title", content: "A0–A1 English Grammar Reference" },
      {
        property: "og:description",
        content: "Every grammar point a beginner needs, organised by level.",
      },
    ],
  }),
  component: GrammarPage,
});

function GrammarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60" style={{ background: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Reference · Levels A0 → A1
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Grammar reference
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Every grammar point you need from absolute beginner (A0) to elementary (A1), with
              clear forms and example sentences.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Tabs defaultValue="A0" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-sm grid-cols-2">
              {grammarSections.map((s) => (
                <TabsTrigger key={s.level} value={s.level}>
                  {s.level}
                </TabsTrigger>
              ))}
            </TabsList>

            {grammarSections.map((section) => (
              <TabsContent key={section.level} value={section.level} className="space-y-8">
                <header>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{section.description}</p>
                </header>

                <nav className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    On this page
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {section.topics.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${section.level}-${t.id}`}
                          className="text-sm text-card-foreground transition-colors hover:text-primary"
                        >
                          {t.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="space-y-6">
                  {section.topics.map((topic) => (
                    <article
                      key={topic.id}
                      id={`${section.level}-${topic.id}`}
                      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <BookOpen className="h-4 w-4" />
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold text-card-foreground">
                            {topic.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">{topic.summary}</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-3">
                        {topic.explanation.map((p, i) => (
                          <p key={i} className="leading-relaxed text-card-foreground">
                            {p}
                          </p>
                        ))}
                      </div>

                      {topic.forms && topic.forms.length > 0 && (
                        <div className="mt-5 overflow-hidden rounded-xl border border-border">
                          <table className="w-full text-sm">
                            <tbody>
                              {topic.forms.map((f, i) => (
                                <tr
                                  key={i}
                                  className={
                                    i !== topic.forms!.length - 1 ? "border-b border-border" : ""
                                  }
                                >
                                  <td className="w-1/3 bg-secondary px-4 py-2.5 font-medium text-secondary-foreground">
                                    {f.label}
                                  </td>
                                  <td className="px-4 py-2.5 text-card-foreground">{f.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      <div className="mt-5">
                        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Examples
                        </p>
                        <ul className="space-y-1.5">
                          {topic.examples.map((ex, i) => (
                            <li
                              key={i}
                              className="rounded-lg bg-secondary/50 px-3 py-2 text-sm italic text-card-foreground"
                            >
                              "{ex.en}"{ex.note && (
                                <span className="ml-2 not-italic text-muted-foreground">
                                  — {ex.note}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
