import { Link } from "@tanstack/react-router";
import { GraduationCap, Menu, BookOpen, Languages, MessageSquare, BookMarked, Home, Info, Sparkles } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const learnItems = [
  { to: "/lessons", label: "A0 Lessons", desc: "20 beginner lessons", icon: BookOpen },
  { to: "/a1", label: "A1 Lessons", desc: "Structured A1 course", icon: Sparkles },
] as const;

const practiceItems = [
  { to: "/grammar", label: "Grammar", desc: "Rules & references", icon: Languages },
  { to: "/phrases", label: "Phrases", desc: "Everyday expressions", icon: MessageSquare },
  { to: "/reading", label: "Reading", desc: "Mini-stories with glosses", icon: BookMarked },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <GraduationCap className="h-5 w-5" />
          </span>
          Lingua<span className="text-primary">Class</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium text-muted-foreground md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground bg-muted" }}
            className="rounded-full px-3 py-2 transition-colors hover:text-foreground hover:bg-muted/60"
          >
            Home
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full px-3 py-2 transition-colors hover:text-foreground hover:bg-muted/60 outline-none data-[state=open]:bg-muted data-[state=open]:text-foreground">
              Learn
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel>Courses</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {learnItems.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to} className="flex items-start gap-3 cursor-pointer">
                    <item.icon className="h-4 w-4 mt-0.5 text-primary" />
                    <span className="flex flex-col">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full px-3 py-2 transition-colors hover:text-foreground hover:bg-muted/60 outline-none data-[state=open]:bg-muted data-[state=open]:text-foreground">
              Practice
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              <DropdownMenuLabel>References & exercises</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {practiceItems.map((item) => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to} className="flex items-start gap-3 cursor-pointer">
                    <item.icon className="h-4 w-4 mt-0.5 text-primary" />
                    <span className="flex flex-col">
                      <span className="font-medium text-foreground">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/about"
            activeProps={{ className: "text-foreground bg-muted" }}
            className="rounded-full px-3 py-2 transition-colors hover:text-foreground hover:bg-muted/60"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/lessons"
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:opacity-90"
          >
            Start learning
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="font-display">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6">
                <MobileLink to="/" icon={Home} label="Home" exact onNavigate={() => setOpen(false)} />

                <MobileSection title="Learn">
                  {learnItems.map((i) => (
                    <MobileLink key={i.to} to={i.to} icon={i.icon} label={i.label} desc={i.desc} onNavigate={() => setOpen(false)} />
                  ))}
                </MobileSection>

                <MobileSection title="Practice">
                  {practiceItems.map((i) => (
                    <MobileLink key={i.to} to={i.to} icon={i.icon} label={i.label} desc={i.desc} onNavigate={() => setOpen(false)} />
                  ))}
                </MobileSection>

                <MobileLink to="/about" icon={Info} label="About" onNavigate={() => setOpen(false)} />

                <Link
                  to="/lessons"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)]"
                >
                  Start learning
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function MobileLink({
  to,
  icon: Icon,
  label,
  desc,
  exact,
  onNavigate,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc?: string;
  exact?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      activeOptions={exact ? { exact: true } : undefined}
      activeProps={{ className: "bg-muted text-foreground" }}
      className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
    >
      <Icon className="h-4 w-4 mt-0.5 text-primary" />
      <span className="flex flex-col">
        <span className="font-medium text-foreground">{label}</span>
        {desc && <span className="text-xs text-muted-foreground">{desc}</span>}
      </span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-base font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gradient-hero)] text-primary-foreground">
                <GraduationCap className="h-4 w-4" />
              </span>
              Lingua<span className="text-primary">Class</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">Free English lessons for absolute beginners.</p>
          </div>
          <FooterCol title="Learn" links={learnItems} />
          <FooterCol title="Practice" links={practiceItems} />
          <FooterCol title="Site" links={[{ to: "/", label: "Home" }, { to: "/about", label: "About" }]} />
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} LinguaClass.</p>
          <p>A0 · A1 · Beginner curriculum</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: ReadonlyArray<{ to: string; label: string }> }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
