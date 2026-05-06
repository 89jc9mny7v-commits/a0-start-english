import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Lesson } from "@/data/lessons";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      to="/lessons/$lessonId"
      params={{ lessonId: lesson.id }}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent font-display text-base font-semibold text-accent-foreground">
            {String(lesson.number).padStart(2, "0")}
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-primary">A0 · {lesson.topic}</p>
            <h3 className="font-display text-lg font-semibold leading-tight text-card-foreground">{lesson.title}</h3>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{lesson.description}</p>
      <div className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" />
        {lesson.duration}
      </div>
    </Link>
  );
}
