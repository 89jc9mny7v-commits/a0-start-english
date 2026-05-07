import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <GraduationCap className="h-5 w-5" />
          </span>
          Lingua<span className="text-primary">Class</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Home</Link>
          <Link to="/lessons" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Lessons</Link>
          <Link to="/a1" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">A1</Link>
          <Link to="/grammar" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">Grammar</Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="transition-colors hover:text-foreground">About</Link>
        </nav>
        <Link
          to="/lessons"
          className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:opacity-90"
        >
          Start learning
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} LinguaClass. Learn English, one lesson at a time.</p>
        <p>A0 · Beginner curriculum</p>
      </div>
    </footer>
  );
}
