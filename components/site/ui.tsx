import Link from "next/link";
import { cn } from "@/lib/utils";
import { ARMS, LOGO_CENTER, RING_PATH } from "./octopus-geometry";

export const shell = "mx-auto w-full max-w-[90rem] px-4 sm:px-8 lg:px-12";

const buttonTones = {
  red: "bg-(--c-red) text-white hover:bg-(--c-ink)",
  ink: "bg-(--c-ink) text-white hover:bg-(--c-red)",
  white: "bg-white text-(--c-ink) hover:bg-(--c-ink) hover:text-white",
  outline: "border border-(--c-ink)/15 hover:border-(--c-ink)",
  "outline-white": "border border-white/40 text-white hover:border-white",
};

export function ButtonLink({
  href,
  tone = "red",
  className,
  children,
}: {
  href: string;
  tone?: keyof typeof buttonTones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center whitespace-nowrap rounded-full px-6 font-medium transition-colors duration-300",
        buttonTones[tone],
        className
      )}
    >
      {children}
    </Link>
  );
}

export function QuoteButton({ tone = "red", className }: { tone?: "red" | "white"; className?: string }) {
  return (
    <ButtonLink href="/quote" tone={tone} className={className}>
      Get a free quote
    </ButtonLink>
  );
}

/** The logo drawn from traced vectors. `highlight` keeps one arm bright and dims the rest. */
export function OctopusGlyph({ highlight, className }: { highlight?: number; className?: string }) {
  const pad = 46;
  return (
    <svg
      viewBox={`${LOGO_CENTER.x - 200 + pad} ${LOGO_CENTER.y - 200 + pad} ${400 - pad * 2} ${400 - pad * 2}`}
      aria-hidden
      className={className}
    >
      <path d={RING_PATH} fill="currentColor" fillRule="evenodd" />
      {ARMS.map((arm, i) => (
        <path
          key={arm.angle}
          d={arm.d}
          fill="currentColor"
          fillRule="evenodd"
          opacity={highlight === undefined || highlight === i ? 1 : 0.28}
        />
      ))}
    </svg>
  );
}

export function PageHero({
  title,
  lead,
  children,
  aside,
}: {
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className={cn(shell, "grid items-center gap-12 pb-16 pt-14 md:pt-20 lg:gap-16 lg:pb-24", aside && "lg:grid-cols-[1.15fr_1fr]")}>
      <div>
        <h1 className="f-display text-[clamp(2.9rem,7vw,6.5rem)] font-semibold leading-[0.9] text-balance">{title}</h1>
        {lead && <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-(--c-muted) md:text-xl">{lead}</p>}
        {children && <div className="mt-10 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
      {aside && <div className="mx-auto w-full max-w-[24rem] sm:max-w-[34rem]">{aside}</div>}
    </section>
  );
}

export function SectionHeading({ title, lead, className }: { title: React.ReactNode; lead?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-2", className)}>
      <h2 className="f-display text-[clamp(2.2rem,4.6vw,4.25rem)] font-semibold leading-[0.95] text-balance">{title}</h2>
      {lead && <p className="max-w-md self-end text-lg leading-relaxed text-current/70 lg:justify-self-end">{lead}</p>}
    </div>
  );
}

export function CtaPanel({
  title = "Tell us what you need.",
  body = "We review your current site or idea and send a free proposal explaining what we would do and how. Then you decide, in your own time, whether to go ahead.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className={cn(shell, "py-6")}>
      <div className="on-red relative overflow-hidden rounded-[2.5rem] bg-(--c-red) px-6 py-16 text-white sm:px-12 md:rounded-[4rem] md:px-16 md:py-24">
        <OctopusGlyph className="pointer-events-none absolute -bottom-40 -right-40 h-[34rem] w-[34rem] text-white opacity-15 md:-right-24 md:h-[44rem] md:w-[44rem]" />
        <div className="relative max-w-2xl">
          <h2 className="f-display text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.92] text-balance">{title}</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">{body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <QuoteButton tone="white" />
            <ButtonLink href="/contact" tone="outline-white">
              Contact us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
