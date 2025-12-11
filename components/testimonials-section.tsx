"use client"

import { useRef } from "react"
import { useInView } from "motion/react"
import { AnimatedTestimonials } from "./animated-testimonials"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-50px" })
  
  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center w-full h-full mt-32 max-w-7xl md:mx-auto mx-1">
      <h2 className="text-5xl text-black text-center">
        Customer Testimonials <br /> Trusted by Hundreds of Happy <br /> Clients
      </h2>
      <p className="text-lg text-black text-center mt-6">
        Trusted by companies of all sizes — here's what they have to say.
      </p>
      <AnimatedTestimonials isInView={isInView} />
    </section>
  )
}
