import Image from "next/image";
import Link from "next/link";
import { contact, services } from "./data";
import { shell } from "./ui";

const company = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Get a free quote", href: "/quote" },
  { label: "Special offers", href: "/offer" },
];

const legal = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Payment methods", href: "/payment" },
];

function Column({ title, links, hideTitle }: { title: string; links: { label: string; href: string }[]; hideTitle?: boolean }) {
  return (
    <nav aria-label={title}>
      <h2 className={hideTitle ? "mb-4 font-medium max-md:hidden md:invisible" : "mb-4 font-medium"}>{title}</h2>
      <ul className="space-y-2.5 text-(--c-muted)">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-(--c-ink)">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const serviceLinks = services.map((s) => ({ label: s.title, href: s.href }));

  return (
    <footer className={`${shell} pb-10 pt-20`}>
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/theoctopuslabs-logo.png" alt="" width={32} height={32} className="rounded-md" />
            <span className="f-display text-lg font-semibold tracking-tight">The Octopus Labs</span>
          </Link>
          <p className="mt-5 max-w-xs text-(--c-muted)">Web design, development and support for UK businesses.</p>
          <ul className="mt-6 space-y-1.5">
            <li>
              <a href={`mailto:${contact.email}`} className="underline decoration-(--c-red) decoration-2 underline-offset-4">
                {contact.email}
              </a>
            </li>
            <li className="text-(--c-muted)">{contact.phone}</li>
          </ul>
        </div>
        <Column title="Services" links={serviceLinks.slice(0, 4)} />
        <Column title="More services" links={serviceLinks.slice(4)} hideTitle />
        <div className="space-y-10">
          <Column title="Company" links={company} />
          <Column title="Legal" links={legal} />
        </div>
      </div>
      <p className="mt-16 border-t border-(--c-ink)/8 pt-6 text-sm text-(--c-muted)">
        © {new Date().getFullYear()} The Octopus Labs. All rights reserved.
      </p>
    </footer>
  );
}
