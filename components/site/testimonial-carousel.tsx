"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "./data";

export function TestimonialCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  const buttonClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-(--c-ink)/15 transition-colors duration-300 hover:border-(--c-ink) hover:bg-(--c-ink) hover:text-white disabled:pointer-events-none disabled:opacity-30";

  return (
    <div>
      <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <h2 className="f-display max-w-3xl text-[clamp(2.2rem,4.4vw,4rem)] font-semibold leading-[0.95] text-balance">
          What clients say after working with us.
        </h2>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button type="button" aria-label="Previous testimonials" className={buttonClass} disabled={atStart} onClick={() => scrollByCard(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Next testimonials" className={buttonClass} disabled={atEnd} onClick={() => scrollByCard(1)}>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        onScroll={updateEdges}
        className="snap-row -mx-4 flex scroll-pl-4 gap-4 sm:scroll-pl-8 lg:scroll-pl-12 overflow-x-auto px-4 pb-2 sm:-mx-8 sm:px-8 md:gap-6 lg:-mx-12 lg:px-12"
      >
        {testimonials.map((t, i) => (
          <li
            key={t.company}
            className={`flex w-[85%] shrink-0 snap-start flex-col justify-between gap-12 rounded-3xl p-7 sm:w-[26rem] md:p-9 lg:w-[30rem] ${
              i === 0 ? "bg-(--c-ink) text-white" : "bg-(--c-mist)"
            }`}
          >
            <figure className="contents">
              <blockquote className="f-display text-[clamp(1.25rem,1.8vw,1.6rem)] leading-[1.25] text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.logo} alt="" className="max-h-full max-w-full object-contain" />
                </span>
                <span className="font-medium">{t.company}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
