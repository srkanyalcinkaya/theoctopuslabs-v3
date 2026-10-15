import { ButtonLink, OctopusGlyph, shell } from "@/components/site/ui";

export default function NotFound() {
  return (
    <main className={`${shell} grid min-h-[70vh] items-center gap-12 py-20 md:grid-cols-[1.2fr_1fr]`}>
      <div>
        <h1 className="f-display text-[clamp(2.9rem,7vw,6rem)] font-semibold leading-[0.9]">This page has drifted off.</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-(--c-muted)">
          The page you are looking for has moved or no longer exists. Head back to the homepage or tell us what you
          were looking for.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href="/contact" tone="outline">
            Contact us
          </ButtonLink>
        </div>
      </div>
      <OctopusGlyph className="mx-auto w-full max-w-sm text-(--c-red)" />
    </main>
  );
}
