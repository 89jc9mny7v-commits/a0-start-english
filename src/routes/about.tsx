import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LinguaClass" },
      { name: "description", content: "About LinguaClass — a free, structured English learning platform built for absolute beginners." },
      { property: "og:title", content: "About LinguaClass" },
      { property: "og:description", content: "Free, structured English learning for absolute beginners." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wider text-primary">About</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">English for everyone, starting from zero.</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              LinguaClass is a free, structured English curriculum designed for absolute beginners.
              Each lesson is short, focused, and builds on the last — so you always know what to learn next.
            </p>
            <p>
              The A0 level covers the absolute essentials: the alphabet, greetings, numbers, family,
              the verb to be, and the everyday vocabulary you need to start communicating in English.
            </p>
            <p>
              Inspired by classroom-style platforms used by language schools around the world, LinguaClass
              brings the same clarity and progression to anyone with an internet connection.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
