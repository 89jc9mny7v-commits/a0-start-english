import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Clock, CheckCircle2, XCircle } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { stories, type Story } from "@/data/readings";

export const Route = createFileRoute("/reading")({
  head: () => ({
    meta: [
      { title: "A0–A1 Reading — Mini-stories with Glossed Vocabulary | LinguaClass" },
      {
        name: "description",
        content:
          "Short English mini-stories for A0 and A1 learners. Hover any underlined word to see its meaning instantly.",
      },
      { property: "og:title", content: "A0–A1 English Reading Mini-stories" },
      {
        property: "og:description",
        content: "Beginner-friendly stories with hover glosses and comprehension questions.",
      },
    ],
  }),
  component: ReadingPage,
});

type Token =
  | { kind: "text"; value: string }
  | { kind: "gloss"; word: string; meaning: string };

function tokenize(body: string): Token[] {
  const tokens: Token[] = [];
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    if (m.index > last) tokens.push({ kind: "text", value: body.slice(last, m.index) });
    tokens.push({ kind: "gloss", word: m[1], meaning: m[2] });
    last = m.index + m[0].length;
  }
  if (last < body.length) tokens.push({ kind: "text", value: body.slice(last) });
  return tokens;
}

function StoryView({ story }: { story: Story }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);

  const paragraphs = story.body.split(/\n+/).filter(Boolean);

  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold text-card-foreground">
            {story.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{story.summary}</p>
        </div>
        <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Clock className="h-3 w-3" /> {story.minutes} min
        </span>
      </header>

      <TooltipProvider delayDuration={150}>
        <div className="space-y-4 text-base leading-relaxed text-card-foreground sm:text-lg">
          {paragraphs.map((p, i) => (
            <p key={i}>
              {tokenize(p).map((t, j) =>
                t.kind === "text" ? (
                  <span key={j}>{t.value}</span>
                ) : (
                  <Tooltip key={j}>
                    <TooltipTrigger asChild>
                      <span
                        tabIndex={0}
                        className="cursor-help rounded border-b-2 border-dotted border-primary/60 font-medium text-primary outline-none transition-colors hover:bg-primary/10 focus-visible:bg-primary/10"
                      >
                        {t.word}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <span className="font-semibold">{t.word}</span> — {t.meaning}
                    </TooltipContent>
                  </Tooltip>
                ),
              )}
            </p>
          ))}
        </div>
      </TooltipProvider>

      <p className="mt-4 text-xs text-muted-foreground">
        Tip: hover (or tap) the underlined words to see their meaning.
      </p>

      <section className="mt-8 border-t border-border pt-6">
        <h3 className="font-display text-lg font-semibold text-card-foreground">
          Comprehension check
        </h3>
        <ol className="mt-4 space-y-5">
          {story.questions.map((q, qi) => (
            <li key={qi}>
              <p className="font-medium text-card-foreground">
                {qi + 1}. {q.q}
              </p>
              <div className="mt-2 grid gap-2">
                {q.options.map((opt, oi) => {
                  const selected = answers[qi] === oi;
                  const correct = checked && oi === q.answer;
                  const wrong = checked && selected && oi !== q.answer;
                  return (
                    <label
                      key={oi}
                      className={[
                        "flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors",
                        correct
                          ? "border-green-500/50 bg-green-500/10"
                          : wrong
                            ? "border-red-500/50 bg-red-500/10"
                            : selected
                              ? "border-primary bg-primary/5"
                              : "border-border hover:bg-muted/50",
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        name={`${story.id}-${qi}`}
                        className="accent-primary"
                        checked={selected}
                        onChange={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                      />
                      <span className="flex-1">{opt}</span>
                      {correct && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                      {wrong && <XCircle className="h-4 w-4 text-red-600" />}
                    </label>
                  );
                })}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Check answers
          </button>
          <button
            type="button"
            onClick={() => {
              setAnswers({});
              setChecked(false);
            }}
            className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
          >
            Reset
          </button>
        </div>

        {checked && (
          <p className="mt-4 text-sm text-muted-foreground">
            Score:{" "}
            <span className="font-semibold text-card-foreground">
              {story.questions.reduce(
                (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
                0,
              )}{" "}
              / {story.questions.length}
            </span>
          </p>
        )}
      </section>
    </article>
  );
}

function ReadingPage() {
  const levels: Array<"A0" | "A1"> = ["A0", "A1"];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60" style={{ background: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
              <BookOpen className="h-3.5 w-3.5" /> Reading · A0 → A1
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Mini-stories with hover glosses
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              Short, level-appropriate English stories. Hover any underlined word to see its
              meaning — then test yourself with quick comprehension questions.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Tabs defaultValue="A0" className="w-full">
            <TabsList className="mb-8 grid w-full max-w-sm grid-cols-2">
              {levels.map((l) => (
                <TabsTrigger key={l} value={l}>
                  {l}
                </TabsTrigger>
              ))}
            </TabsList>

            {levels.map((level) => (
              <TabsContent key={level} value={level} className="space-y-8">
                {stories
                  .filter((s) => s.level === level)
                  .map((s) => (
                    <StoryView key={s.id} story={s} />
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
