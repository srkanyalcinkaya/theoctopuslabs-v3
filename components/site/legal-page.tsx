import { cn } from "@/lib/utils";
import { ButtonLink, shell } from "./ui";

export function LegalPage({
  title,
  intro,
  showUpdated,
  toc,
  contactTitle,
  contactBody,
  children,
}: {
  title: string;
  intro: string;
  showUpdated?: boolean;
  toc: { id: string; label: string }[];
  contactTitle: string;
  contactBody: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <header className={cn(shell, "pb-14 pt-14 md:pb-20 md:pt-20")}>
        <h1 className="f-display text-[clamp(2.9rem,7vw,6rem)] font-semibold leading-[0.9]">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-(--c-muted) md:text-xl">{intro}</p>
        {showUpdated && (
          <p className="mt-4 text-sm text-(--c-muted)">
            Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        )}
      </header>

      <div className={cn(shell, "grid gap-12 border-t border-(--c-ink)/10 pt-12 lg:grid-cols-[16rem_1fr] lg:gap-20 lg:pt-16")}>
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm text-(--c-muted)">On this page</p>
          <ol className="space-y-2 text-[0.95rem]">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-(--c-ink)/75 transition-colors hover:text-(--c-red)">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <article className="legal max-w-3xl">{children}</article>
      </div>

      <section className={cn(shell, "py-20 md:py-28")}>
        <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-(--c-mist) p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="f-display text-3xl font-semibold">{contactTitle}</h2>
            <p className="mt-3 max-w-xl text-(--c-muted)">{contactBody}</p>
          </div>
          <ButtonLink href="/contact" tone="ink">
            Contact us
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
