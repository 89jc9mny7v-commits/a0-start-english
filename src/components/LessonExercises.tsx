import { useMemo, useState } from "react";
import { CheckCircle2, Dumbbell, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Exercise } from "@/data/exercises";

type Status = "idle" | "correct" | "incorrect";

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[.!?]+$/g, "");
}

function FillBlank({ ex }: { ex: Extract<Exercise, { kind: "fill" }> }) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const check = () => setStatus(normalize(value) === normalize(ex.answer) ? "correct" : "incorrect");
  const reset = () => { setValue(""); setStatus("idle"); };

  return (
    <div>
      <p className="text-card-foreground">{ex.prompt}</p>
      {ex.hint && <p className="mt-1 text-xs text-muted-foreground">Hint: {ex.hint}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Input
          value={value}
          onChange={(e) => { setValue(e.target.value); setStatus("idle"); }}
          onKeyDown={(e) => { if (e.key === "Enter") check(); }}
          placeholder="Type your answer"
          className="max-w-xs"
        />
        <Button size="sm" onClick={check} disabled={!value.trim()}>Check</Button>
        {status !== "idle" && (
          <Button size="sm" variant="ghost" onClick={reset} aria-label="Try again">
            <RotateCcw className="h-4 w-4" />
          </Button>
        )}
      </div>
      {status === "correct" && (
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          <CheckCircle2 className="h-4 w-4" /> Correct!
        </p>
      )}
      {status === "incorrect" && (
        <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-destructive">
          <XCircle className="h-4 w-4" /> Not quite. Answer: <span className="font-semibold">{ex.answer}</span>
        </p>
      )}
    </div>
  );
}

function MultipleChoice({ ex }: { ex: Extract<Exercise, { kind: "choice" }> }) {
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div>
      <p className="text-card-foreground">{ex.prompt}</p>
      <div className="mt-3 grid gap-2">
        {ex.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = picked !== null && i === ex.answerIndex;
          const isWrongPick = isPicked && i !== ex.answerIndex;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPicked(i)}
              disabled={picked !== null}
              className={cn(
                "flex items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-left text-sm transition-colors",
                picked === null && "hover:bg-secondary",
                isCorrect && "border-primary bg-primary/10 text-foreground",
                isWrongPick && "border-destructive bg-destructive/10 text-foreground",
              )}
            >
              <span>{opt}</span>
              {isCorrect && <CheckCircle2 className="h-4 w-4 text-primary" />}
              {isWrongPick && <XCircle className="h-4 w-4 text-destructive" />}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-3 flex items-center gap-2">
          <Button size="sm" variant="ghost" onClick={() => setPicked(null)}>
            <RotateCcw className="h-4 w-4" /> Try again
          </Button>
          {ex.explanation && <span className="text-xs text-muted-foreground">{ex.explanation}</span>}
        </div>
      )}
    </div>
  );
}

function Matching({ ex }: { ex: Extract<Exercise, { kind: "match" }> }) {
  // Shuffle right side once per mount with a stable seed
  const shuffledRights = useMemo(() => {
    const arr = ex.pairs.map((p, i) => ({ text: p.right, originalIndex: i }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [ex]);

  // assignments[leftIndex] = originalIndex of right (must equal leftIndex when correct)
  const [assignments, setAssignments] = useState<(number | null)[]>(() => ex.pairs.map(() => null));
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const assignedRights = new Set(assignments.filter((v): v is number => v !== null));
  const allFilled = assignments.every((v) => v !== null);
  const correctCount = assignments.filter((v, i) => v === i).length;

  const assignTo = (leftIndex: number) => {
    if (selectedRight === null) {
      // Clicking left removes its assignment
      if (assignments[leftIndex] !== null) {
        const next = [...assignments];
        next[leftIndex] = null;
        setAssignments(next);
        setChecked(false);
      }
      return;
    }
    const next = [...assignments];
    // If selectedRight already assigned somewhere, remove it
    for (let i = 0; i < next.length; i++) if (next[i] === selectedRight) next[i] = null;
    next[leftIndex] = selectedRight;
    setAssignments(next);
    setSelectedRight(null);
    setChecked(false);
  };

  const reset = () => {
    setAssignments(ex.pairs.map(() => null));
    setSelectedRight(null);
    setChecked(false);
  };

  return (
    <div>
      <p className="text-card-foreground">{ex.prompt}</p>
      <p className="mt-1 text-xs text-muted-foreground">Tap a right-side option, then tap the matching item on the left.</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          {ex.pairs.map((p, i) => {
            const right = assignments[i];
            const isCorrect = checked && right === i;
            const isWrong = checked && right !== null && right !== i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => assignTo(i)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-2 text-left text-sm transition-colors hover:bg-secondary",
                  isCorrect && "border-primary bg-primary/10",
                  isWrong && "border-destructive bg-destructive/10",
                )}
              >
                <span className="font-medium text-card-foreground">{p.left}</span>
                <span className="text-xs text-muted-foreground">
                  {right !== null ? ex.pairs[right].right : "—"}
                </span>
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {shuffledRights.map((r) => {
            const isAssigned = assignedRights.has(r.originalIndex);
            const isSelected = selectedRight === r.originalIndex;
            return (
              <button
                key={r.originalIndex}
                type="button"
                onClick={() => setSelectedRight(isSelected ? null : r.originalIndex)}
                disabled={isAssigned && !isSelected}
                className={cn(
                  "w-full rounded-lg border border-border bg-background px-3 py-2 text-left text-sm transition-colors",
                  !isAssigned && "hover:bg-secondary",
                  isSelected && "border-primary bg-primary/10",
                  isAssigned && !isSelected && "opacity-40",
                )}
              >
                {r.text}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button size="sm" onClick={() => setChecked(true)} disabled={!allFilled}>Check</Button>
        <Button size="sm" variant="ghost" onClick={reset}>
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
        {checked && (
          <span className={cn(
            "text-sm font-medium",
            correctCount === ex.pairs.length ? "text-primary" : "text-muted-foreground",
          )}>
            {correctCount} / {ex.pairs.length} correct
          </span>
        )}
      </div>
    </div>
  );
}

export function LessonExercises({ exercises }: { exercises: Exercise[] }) {
  if (!exercises?.length) return null;
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 font-display text-xl font-semibold">
        <Dumbbell className="h-5 w-5 text-primary" /> Practice exercises
      </h2>
      <div className="mt-4 space-y-4">
        {exercises.map((ex, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Exercise {i + 1} ·{" "}
              {ex.kind === "fill" ? "Fill in the blank" : ex.kind === "choice" ? "Multiple choice" : "Matching"}
            </p>
            <div className="mt-3">
              {ex.kind === "fill" && <FillBlank ex={ex} />}
              {ex.kind === "choice" && <MultipleChoice ex={ex} />}
              {ex.kind === "match" && <Matching ex={ex} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
