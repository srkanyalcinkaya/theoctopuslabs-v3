"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "./data";
import { QuoteButton, shell } from "./ui";

const links = [
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => href !== "/" && !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-(--c-ink)/8 bg-white/85 backdrop-blur-md">
        <div className={cn(shell, "flex h-18 items-center justify-between gap-6")}>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/theoctopuslabs-logo.png" alt="" width={32} height={32} className="rounded-md" priority />
            <span className="f-display whitespace-nowrap text-base font-semibold tracking-tight sm:text-lg">The Octopus Labs</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            <div ref={servicesRef} className="relative">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((open) => !open)}
                className={cn(
                  "flex items-center gap-1 text-[0.95rem] transition-colors hover:text-(--c-ink)",
                  servicesOpen || services.some((s) => pathname === s.href) ? "text-(--c-ink)" : "text-(--c-ink)/75"
                )}
              >
                Services
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", servicesOpen && "rotate-180")} />
              </button>
              {servicesOpen && (
                <div
                  id="services-menu"
                  onClick={(e) => (e.target as HTMLElement).closest("a") && setServicesOpen(false)}
                  className="absolute left-1/2 top-full mt-5 w-[34rem] -translate-x-1/2 rounded-3xl border border-(--c-ink)/8 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(15,27,45,0.25)]"
                >
                  <ul className="grid grid-cols-2 gap-1">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          aria-current={pathname === service.href ? "page" : undefined}
                          className="block rounded-2xl px-4 py-3 transition-colors hover:bg-(--c-mist) aria-[current=page]:bg-(--c-blush)"
                        >
                          <span className="block font-medium">{service.title}</span>
                          <span className="mt-0.5 block text-sm leading-snug text-(--c-muted)">{service.blurb}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className="text-[0.95rem] text-(--c-ink)/75 transition-colors hover:text-(--c-ink) aria-[current=page]:text-(--c-ink) aria-[current=page]:underline aria-[current=page]:decoration-(--c-red) aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <QuoteButton className="hidden h-10 px-5 text-sm sm:inline-flex" />
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-(--c-ink)/15 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

      </header>

        {menuOpen && (
          <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-18 z-40 overflow-y-auto bg-white lg:hidden">
            <nav
              aria-label="Mobile"
              onClick={(e) => (e.target as HTMLElement).closest("a") && setMenuOpen(false)}
              className={cn(shell, "flex flex-col pb-10 pt-6")}
            >
              <p className="mb-2 text-sm text-(--c-muted)">Services</p>
              <ul className="mb-6 border-t border-(--c-ink)/10">
                {services.map((service) => (
                  <li key={service.slug} className="border-b border-(--c-ink)/10">
                    <Link href={service.href} className="f-display block py-3 text-xl font-medium">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="f-display py-2 text-2xl font-semibold">
                  {link.label}
                </Link>
              ))}
              <QuoteButton className="mt-8 justify-center" />
            </nav>
          </div>
        )}
    </>
  );
}
