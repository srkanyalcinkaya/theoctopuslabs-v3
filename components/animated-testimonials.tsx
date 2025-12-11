"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

interface Testimonial {
  companyName: string
  testimonial: string
  logo: string
}

interface TestimonialGroup {
  testimonials: Testimonial[]
}

interface TestimonialCardProps {
  containerHeight: string
  topCardHeight: string
  delay?: number
  isInView: boolean
  group: TestimonialGroup
}

function TestimonialCard({ containerHeight, topCardHeight, delay = 0, isInView, group }: TestimonialCardProps) {
  const firstTestimonial = group.testimonials[0]
  const secondTestimonial = group.testimonials[1]
  
  const topHeightValue = topCardHeight.match(/\[(\d+)px\]/)?.[1] || "300"
  
  return (
    <div className="relative">
      <div className={`${containerHeight} relative w-[340px]`}>
        <motion.div
          className="w-full rounded-2xl bg-sky-500 absolute bottom-0 right-0 z-0 flex flex-col items-start justify-start  text-white overflow-hidden p-6"
          initial={{ height: "0%" }}
          animate={isInView ? { height: "100%" } : { height: "0%" }}
          transition={{
            duration: 1.2,
            delay: isInView ? delay : 0,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{ originY: 1 }}
        >
          {firstTestimonial && (
            <div className="flex flex-col gap-3 h-full justify-start items-start">
              <img src={firstTestimonial.logo} alt={firstTestimonial.companyName} className="h-12 w-auto object-contain" />
              <p className="text-sm">{firstTestimonial.testimonial}</p>
              <p className="text-xs font-semibold">{firstTestimonial.companyName}</p>
            </div>
          )}
        </motion.div>
        <div 
          className={`w-full h-[${topHeightValue}px] rounded-2xl bg-gray-900  absolute bottom-0 right-0 z-10 flex flex-col items-center justify-center p-6 text-white overflow-hidden`}
          // initial={{ height: 0 }}
          // animate={isInView ? { height: `${topHeightValue}px` } : { height: 0 }}
          // transition={{
          //   duration: 1.2,
          //   delay: isInView ? delay + 0.3 : 0,
          //   ease: [0.4, 0, 0.2, 1],
          // }}
          // style={{ originY: 1 }}
        >
          {secondTestimonial && (
            <div className="flex flex-col gap-3 h-full justify-center items-start">
              <img src={secondTestimonial.logo} alt={secondTestimonial.companyName} className="h-12 w-auto object-contain" />
              <p className="text-sm">{secondTestimonial.testimonial}</p>
              <p className="text-xs font-semibold">{secondTestimonial.companyName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface AnimatedTestimonialsProps {
  isInView: boolean
}


const testimonials: TestimonialGroup[] = [
  {
    testimonials: [
      {
        companyName: "Your Wallet",
        testimonial: "The Octopus Labs transformed our digital presence. Their bespoke web development solution exceeded all our expectations.",
        logo: "/images/clients/yourwallet-logo.png"
      },
      {
        companyName: "Ogul Sigorta",
        testimonial: "Outstanding service and professional approach. Our new website has significantly improved our customer engagement.",
        logo: "/images/clients/ogulsigorta-logo.png"
      }
    ]
  },
  {
    testimonials: [
      {
        companyName: "Coolhub Bag",
        testimonial: "Working with The Octopus Labs was a game-changer. They delivered a stunning e-commerce platform that boosted our sales.",
        logo: "/images/clients/coolhub-logo.webp"
      },
      {
        companyName: "Salt & Partners",
        testimonial: "Professional, reliable, and results-driven. Our partnership with The Octopus Labs has been incredibly successful.",
        logo: "/images/clients/salt&partners.png"
      }
    ]
  },
  {
    testimonials: [
      {
        companyName: "LawLinkGlobal",
        testimonial: "The team at The Octopus Labs understood our needs perfectly. Our new website reflects our professional standards beautifully.",
        logo: "/images/clients/llg-bg-logo.png"
      },
      {
        companyName: "Chavinci",
        testimonial: "Excellent web design and development services. The Octopus Labs helped us create a modern, user-friendly platform.",
        logo: "/images/clients/cha.svg"
      }
    ]
  }
]

export function AnimatedTestimonials({ isInView }: AnimatedTestimonialsProps) {
  const heights = [
    { container: "h-[600px]", top: "h-[350px]" },
    { container: "h-[500px]", top: "h-[300px]" },
    { container: "h-[550px]", top: "h-[300px]" }
  ]
  const delays = [0, 0.2, 0.4]

  return (
    <div className="flex flex-col md:flex-row items-end justify-center gap-6 mt-32">
      {testimonials.map((group, index) => (
        <TestimonialCard 
          key={index} 
          containerHeight={heights[index].container} 
          topCardHeight={heights[index].top} 
          delay={delays[index]} 
          isInView={isInView}
          group={group}
        />
      ))}
    </div>
  )
}