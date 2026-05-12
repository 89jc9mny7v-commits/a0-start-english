import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { phraseSections } from "@/data/phrases";

export const Route = createFileRoute("/phrases")({
  head: () => ({
    meta: [
      { title: "A0–A1 Expressions & Phrases — LinguaClass" },
      {
        name: "description",
        content:
          "Essential English expressions and phrases up to A1: greetings, small talk, shopping, restaurant, directions, opinions and more.",
      },
      { property: "og:title", content: "A0–A1 English Expressions & Phrases" },
      {
        property: "og:description",
        content: "Practical everyday expressions for absolute beginners through elementary level.",
      },
    ],
  }),
  component: PhrasesPage,
});

function PhrasesPage() {
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
              Expressions & phrases
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Ready-to-use English for real situations — greetings, shopping, eating out,
              directions and small talk.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Tabs defaultValue="A0" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-sm grid-cols-2">
              {phraseSections.map((s) => (
                <TabsTrigger key={s.level} value={s.level}>
                  {s.level}
                </TabsTrigger>
              ))}
            </TabsList>

            {phraseSections.map((section) => (
              <TabsContent key={section.level} value={section.level} className="space-y-8">
                <header>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{section.description}</p>
                </header>

                <nav className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Categories
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {section.categories.map((c) => (
                      <li key={c.id}>
                        <a
                          href={`#${section.level}-${c.id}`}
                          className="text-sm text-card-foreground transition-colors hover:text-primary"
                        >
                          {c.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="space-y-6">
                  {section.categories.map((cat) => (
                    <article
                      key={cat.id}
                      id={`${section.level}-${cat.id}`}
                      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <MessageCircle className="h-4 w-4" />
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold text-card-foreground">
                            {cat.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                        </div>
                      </div>

                      <ul className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border">
                        {cat.phrases.map((p, i) => (
                          <li key={i} className="grid gap-1 px-4 py-3 sm:grid-cols-[1fr_1fr] sm:gap-6">
                            <div className="font-medium text-card-foreground">"{p.en}"</div>
                            <div className="text-sm text-muted-foreground">
                              {p.meaning}
                              {p.example && (
                                <div className="mt-1 italic text-card-foreground/80">
                                  e.g. {p.example}
                                </div>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
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
