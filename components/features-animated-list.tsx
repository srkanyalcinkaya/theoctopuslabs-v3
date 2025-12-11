"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/ui/animated-list"
import { CheckCircle, Zap, Shield, Globe, Smartphone, Search, Clock, Code, Palette, Rocket } from "lucide-react"

interface Feature {
  name: string
  description: string
  icon: React.ReactNode
  color: string
}

const features = [
  {
    name: "10,000+ Happy Customers",
    description: "Thousands of successful projects",
    icon: <CheckCircle size={20} />,
    color: "#00C9A7",
  },
  {
    name: "Fast Delivery",
    description: "7-day delivery guarantee",
    icon: <Zap size={20} />,
    color: "#FFB800",
  },
  {
    name: "Secure Hosting",
    description: "SSL certificate included",
    icon: <Shield size={20} />,
    color: "#FF3D71",
  },
  {
    name: "Responsive Design",
    description: "Perfect look on all devices",
    icon: <Smartphone size={20} />,
    color: "#1E86FF",
  },
  {
    name: "SEO Optimization",
    description: "Free basic SEO service",
    icon: <Search size={20} />,
    color: "#9D50FF",
  },
  {
    name: "24/7 Support",
    description: "Local UK support team",
    icon: <Clock size={20} />,
    color: "#00D9FF",
  },
  {
    name: "Modern Technologies",
    description: "Latest web technologies",
    icon: <Code size={20} />,
    color: "#FF6B35",
  },
  {
    name: "Custom Design",
    description: "Tailored design solutions",
    icon: <Palette size={20} />,
    color: "#4ECDC4",
  },
  {
    name: "High Performance",
    description: "Performance guarantee",
    icon: <Rocket size={20} />,
    color: "#95E1D3",
  },
  {
    name: "Free Maintenance",
    description: "First month free maintenance",
    icon: <Globe size={20} />,
    color: "#F38181",
  },
]

const FeatureCard = ({ name, description, icon, color }: Feature) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[350px] cursor-pointer overflow-hidden rounded-xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/10 backdrop-blur-sm [box-shadow:0_2px_8px_rgba(0,0,0,.1)]",
        "border border-white/20"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-xl text-white"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-base font-medium whitespace-pre text-white">
            <span className="text-sm sm:text-base">{name}</span>
          </figcaption>
          <p className="text-xs font-normal text-white/80">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export function FeaturesAnimatedList({
  className,
}: {
  className?: string
}) {
  const extendedFeatures = Array.from({ length: 10 }, () => features).flat()

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden p-2",
        className
      )}
      style={{ maxHeight: '100%' }}
    >
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <AnimatedList delay={2000}>
          {extendedFeatures.map((feature, idx) => (
            <FeatureCard {...feature} key={idx} />
          ))}
        </AnimatedList>
      </div>

      {/* <div className="from-blue-400/0 to-blue-800/80 pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div> */}
    </div>
  )
}