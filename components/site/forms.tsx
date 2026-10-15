"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sendEnquiry, type EnquiryKind } from "@/app/actions/enquiry";
import { contact, services } from "./data";

function useEnquiry(kind: EnquiryKind) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const submit = (form: HTMLFormElement, extra: Record<string, string> = {}) => {
    const input: Record<string, string> = { ...extra };
    new FormData(form).forEach((value, key) => {
      input[key] = String(value);
    });
    setError(null);
    startTransition(async () => {
      const result = await sendEnquiry(kind, input);
      if (result.ok) setSent(true);
      else setError(result.error);
    });
  };

  return { sent, error, pending, submit, reset: () => setSent(false) };
}

// Hidden from people; bots that fill every field reveal themselves here.
function Honeypot() {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="rounded-2xl bg-(--c-blush) px-5 py-4 text-sm leading-relaxed">
      {message} Please try again, or email us at{" "}
      <a href={`mailto:${contact.email}`} className="font-medium underline underline-offset-2">
        {contact.email}
      </a>
      .
    </p>
  );
}

function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
        {required && <span className="text-(--c-red)"> *</span>}
      </label>
      {children}
    </div>
  );
}

function SentNotice({ onReset }: { onReset: () => void }) {
  return (
    <div role="status" className="rounded-3xl bg-(--c-blush) p-8">
      <h3 className="f-display text-2xl font-semibold">Thanks, we have received it.</h3>
      <p className="mt-3 leading-relaxed text-(--c-muted)">
        Your message is with our team and we will reply within 24 hours to the email address you gave us.
      </p>
      <button type="button" onClick={onReset} className="mt-6 font-medium underline underline-offset-4">
        Send another message
      </button>
    </div>
  );
}

const submitClass =
  "inline-flex h-13 w-full items-center justify-center rounded-full bg-(--c-red) px-8 font-medium text-white transition-colors duration-300 hover:bg-(--c-ink) disabled:cursor-wait disabled:opacity-70 sm:w-auto";

export function ContactForm() {
  const { sent, error, pending, submit, reset } = useEnquiry("contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(e.currentTarget);
  };

  if (sent) return <SentNotice onReset={reset} />;

  return (
    <form onSubmit={handleSubmit} className="relative grid gap-5 sm:grid-cols-2">
      <Honeypot />
      <Field label="First name" htmlFor="firstName" required>
        <input id="firstName" name="firstName" autoComplete="given-name" required className="field" />
      </Field>
      <Field label="Last name" htmlFor="lastName" required>
        <input id="lastName" name="lastName" autoComplete="family-name" required className="field" />
      </Field>
      <Field label="Email address" htmlFor="email" required>
        <input id="email" name="email" type="email" autoComplete="email" required className="field" />
      </Field>
      <Field label="Phone number" htmlFor="phone">
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+44 20 1234 5678" className="field" />
      </Field>
      <Field label="Subject" htmlFor="subject" required className="sm:col-span-2">
        <input id="subject" name="subject" required placeholder="What is this about?" className="field" />
      </Field>
      <Field label="Message" htmlFor="message" required className="sm:col-span-2">
        <textarea id="message" name="message" required placeholder="Tell us about your project" className="field" />
      </Field>
      <div className="space-y-4 sm:col-span-2">
        <FormError message={error} />
        <button type="submit" disabled={pending} className={submitClass}>
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

const projectTypes = ["New website", "Website redesign", "E-commerce store", "Mobile application", "SEO services", "Other"];
const budgets = ["Under £5,000", "£5,000 – £10,000", "£10,000 – £25,000", "£25,000 – £50,000", "£50,000+", "Not sure"];
const timelines = ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Flexible"];

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="border-t border-(--c-ink)/10 pt-8">
      <legend className="f-display float-left mb-6 w-full text-2xl font-semibold">{legend}</legend>
      <div className="clear-both grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export function QuoteForm() {
  const { sent, error, pending, submit, reset } = useEnquiry("quote");
  const [picked, setPicked] = useState<string[]>([]);
  const [servicesError, setServicesError] = useState(false);

  const toggle = (title: string) => {
    setServicesError(false);
    setPicked((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (picked.length === 0) {
      setServicesError(true);
      document.getElementById("services-needed")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    submit(e.currentTarget, { services: picked.join(", ") });
  };

  if (sent) return <SentNotice onReset={reset} />;

  return (
    <form onSubmit={handleSubmit} className="relative space-y-12">
      <Honeypot />
      <Fieldset legend="About you">
        <Field label="First name" htmlFor="firstName" required>
          <input id="firstName" name="firstName" autoComplete="given-name" required className="field" />
        </Field>
        <Field label="Last name" htmlFor="lastName" required>
          <input id="lastName" name="lastName" autoComplete="family-name" required className="field" />
        </Field>
        <Field label="Email address" htmlFor="email" required>
          <input id="email" name="email" type="email" autoComplete="email" required className="field" />
        </Field>
        <Field label="Phone number" htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+44 20 1234 5678" className="field" />
        </Field>
        <Field label="Company name" htmlFor="company" className="sm:col-span-2">
          <input id="company" name="company" autoComplete="organization" className="field" />
        </Field>
      </Fieldset>

      <Fieldset legend="Your project">
        <Field label="Project type" htmlFor="projectType" required className="sm:col-span-2">
          <select id="projectType" name="projectType" required defaultValue="" className="field">
            <option value="" disabled>
              Choose a project type
            </option>
            {projectTypes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Estimated budget" htmlFor="budget" required>
          <select id="budget" name="budget" required defaultValue="" className="field">
            <option value="" disabled>
              Choose a range
            </option>
            {budgets.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" htmlFor="timeline" required>
          <select id="timeline" name="timeline" required defaultValue="" className="field">
            <option value="" disabled>
              Choose a timeline
            </option>
            {timelines.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>

        <div id="services-needed" className="sm:col-span-2" role="group" aria-labelledby="services-label" aria-describedby="services-hint">
          <p id="services-label" className="text-sm font-medium">
            Services needed<span className="text-(--c-red)"> *</span>
          </p>
          <p id="services-hint" className={cn("mt-1 text-sm", servicesError ? "text-(--c-red)" : "text-(--c-muted)")}>
            {servicesError ? "Choose at least one service." : "Choose all that apply."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => {
              const on = picked.includes(s.title);
              return (
                <button
                  key={s.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(s.title)}
                  className={cn(
                    "inline-flex h-11 items-center rounded-full border px-5 transition-colors duration-200",
                    on ? "border-(--c-ink) bg-(--c-ink) text-white" : "border-(--c-ink)/15 hover:border-(--c-ink)"
                  )}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>

        <Field label="Tell us about your project" htmlFor="description" required className="sm:col-span-2">
          <textarea
            id="description"
            name="description"
            required
            placeholder="Your goals, what you have today and anything specific you need"
            className="field min-h-44!"
          />
        </Field>
        <Field label="Anything else we should know?" htmlFor="additional" className="sm:col-span-2">
          <textarea
            id="additional"
            name="additional"
            placeholder="Hosting preferences, third-party integrations, special features"
            className="field"
          />
        </Field>
      </Fieldset>

      <div className="flex flex-col gap-4 border-t border-(--c-ink)/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-(--c-muted)">
          By sending this request you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="submit" disabled={pending} className={submitClass}>
          {pending ? "Sending…" : "Send quote request"}
        </button>
      </div>
      <FormError message={error} />
    </form>
  );
}
