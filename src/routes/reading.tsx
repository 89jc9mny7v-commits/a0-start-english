import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Clock, CheckCircle2, XCircle, Search } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

function StoryBody({ story }: { story: Story }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const paragraphs = story.body.split(/\n+/).filter(Boolean);

  return (
    <div className="pt-2">
      <TooltipProvider delayDuration={150}>
        <div className="space-y-4 text-base leading-relaxed text-card-foreground">
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

      <section className="mt-6 border-t border-border pt-5">
        <h3 className="font-display text-base font-semibold text-card-foreground">
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

        <div className="mt-6 flex flex-wrap gap-3">
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
          {checked && (
            <span className="inline-flex h-10 items-center text-sm text-muted-foreground">
              Score:{" "}
              <span className="ml-1 font-semibold text-card-foreground">
                {story.questions.reduce(
                  (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
                  0,
                )}{" "}
                / {story.questions.length}
              </span>
            </span>
          )}
        </div>
      </section>
    </div>
  );
}

function ReadingPage() {
  const [level, setLevel] = useState<"all" | "A0" | "A1">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      if (level !== "all" && s.level !== level) return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q)
      );
    });
  }, [level, query]);

  const counts = {
    all: stories.length,
    A0: stories.filter((s) => s.level === "A0").length,
    A1: stories.filter((s) => s.level === "A1").length,
  };

  const filterButtons: Array<{ key: "all" | "A0" | "A1"; label: string }> = [
    { key: "all", label: "All" },
    { key: "A0", label: "A0" },
    { key: "A1", label: "A1" },
  ];

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
              Pick a story from the list. Tap to expand it, hover any underlined word to see its
              meaning, and test yourself with quick comprehension questions.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex rounded-full border border-border bg-card p-1">
              {filterButtons.map((b) => (
                <button
                  key={b.key}
                  type="button"
                  onClick={() => setLevel(b.key)}
                  className={[
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    level === b.key
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {b.label}{" "}
                  <span className="ml-1 text-xs opacity-70">({counts[b.key]})</span>
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search stories…"
                className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm outline-none transition-colors focus:border-primary sm:w-64"
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
              No stories match your search.
            </div>
          ) : (
            <Accordion
              type="single"
              collapsible
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              {filtered.map((s) => (
                <AccordionItem key={s.id} value={s.id} className="border-b border-border last:border-b-0">
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex flex-1 items-center gap-3 pr-3 text-left">
                      <span
                        className={[
                          "inline-flex h-7 min-w-[2.25rem] items-center justify-center rounded-full px-2 text-xs font-semibold",
                          s.level === "A0"
                            ? "bg-primary/10 text-primary"
                            : "bg-accent/40 text-accent-foreground",
                        ].join(" ")}
                      >
                        {s.level}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-display text-base font-semibold text-card-foreground">
                          {s.title}
                        </div>
                        <div className="truncate text-xs text-muted-foreground">
                          {s.summary}
                        </div>
                      </div>
                      <span className="hidden flex-shrink-0 items-center gap-1 text-xs text-muted-foreground sm:inline-flex">
                        <Clock className="h-3 w-3" /> {s.minutes} min
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-6">
                    <StoryBody story={s} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          <p className="mt-4 text-center text-xs text-muted-foreground">
            {filtered.length} of {stories.length} stories
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
