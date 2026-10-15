"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { services } from "./data";
import { ARMS, LOGO_CENTER, LOGO_RADIUS, RING_PATH } from "./octopus-geometry";

const VIEW = 600;
const SCALE = 176 / LOGO_RADIUS;
const LABEL_RADIUS = 246;
const EASE = [0.65, 0, 0.35, 1] as const;

export function OctopusMark() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);
  // Once an arm has finished drawing, its mask is dropped so the exact logo shape shows.
  const [drawn, setDrawn] = useState<boolean[]>(() => ARMS.map(() => false));
  const maskId = useId();

  const arms = ARMS.map((arm, i) => {
    const rad = (arm.angle * Math.PI) / 180;
    return {
      ...arm,
      service: services[i],
      left: ((VIEW / 2 + LABEL_RADIUS * Math.cos(rad)) / VIEW) * 100,
      top: ((VIEW / 2 + LABEL_RADIUS * Math.sin(rad)) / VIEW) * 100,
    };
  });

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] bg-(--c-red)">
      <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <g transform={`translate(${VIEW / 2} ${VIEW / 2}) scale(${SCALE}) translate(${-LOGO_CENTER.x} ${-LOGO_CENTER.y})`}>
          <defs>
            {arms.map((arm, i) => (
              <mask key={i} id={`${maskId}-${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
                {/* The arm is revealed by a thick stroke travelling along its centreline. */}
                <motion.path
                  d={arm.spine}
                  fill="none"
                  stroke="#fff"
                  strokeWidth={arm.thickness * 1.7}
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.35 + i * 0.1, ease: EASE }}
                  onAnimationComplete={() => setDrawn((prev) => prev.map((done, j) => done || j === i))}
                />
              </mask>
            ))}
          </defs>

          <motion.path
            d={RING_PATH}
            fill="#fff"
            fillRule="evenodd"
            initial={reduceMotion ? false : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          />

          {arms.map((arm, i) => (
            <motion.path
              key={i}
              d={arm.d}
              fill="#fff"
              fillRule="evenodd"
              mask={reduceMotion || drawn[i] ? undefined : `url(#${maskId}-${i})`}
              animate={{ opacity: active === null || active === i ? 1 : 0.3 }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </g>
      </svg>

      <ul className="absolute inset-0 hidden sm:block">
        {arms.map((arm, i) => (
          <motion.li
            key={arm.service.slug}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${arm.left}%`, top: `${arm.top}%` }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
          >
            <Link
              href={arm.service.href}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className={cn(
                "block whitespace-nowrap rounded-full px-3 py-1 text-[clamp(0.7rem,1.05vw,0.95rem)] font-medium text-white transition-colors duration-200",
                active === i && "bg-white text-(--c-red)"
              )}
            >
              {arm.service.short}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
