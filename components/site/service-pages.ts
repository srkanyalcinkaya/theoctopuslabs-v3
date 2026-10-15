type Feature = { title: string; body: string };

export type ServicePageContent = {
  slug: string;
  headline: string;
  lead: string;
  featuresTitle: string;
  features: Feature[];
  whyTitle: string;
  why: Feature[];
  image?: { src: string; alt: string };
};

export const servicePages: Record<string, ServicePageContent> = {
  bespoke: {
    slug: "bespoke",
    headline: "Software built around your business.",
    lead: "We develop bespoke web applications that match your requirements and the way your team already works, instead of bending your process to fit an off-the-shelf tool.",
    featuresTitle: "What we offer",
    features: [
      { title: "Custom solutions", body: "Fully customised web applications built from scratch to meet your specific business needs." },
      { title: "Secure and scalable", body: "Enterprise-grade security and scalability to grow with your business." },
      { title: "High performance", body: "Optimised for speed and performance to deliver exceptional user experiences." },
      { title: "User-centred design", body: "Intuitive interfaces designed with your users in mind for maximum engagement." },
      { title: "Modern technologies", body: "Built with the latest frameworks and technologies for future-proof solutions." },
      { title: "Ongoing support", body: "One year of free technical support and maintenance included with every project." },
    ],
    whyTitle: "Why choose bespoke development?",
    why: [
      { title: "A perfect fit", body: "Every feature is designed specifically for your business, so it fits your workflows and processes." },
      { title: "A competitive advantage", body: "Stand out from competitors with features and capabilities tailored to your market." },
    ],
    image: { src: "/images/hero/hero-1.jpg", alt: "Two people planning a project on a laptop" },
  },
  "web-development": {
    slug: "web-development",
    headline: "Websites that load fast and keep working.",
    lead: "We build modern, responsive websites and web applications that help your business grow online, and that your team can update without calling us.",
    featuresTitle: "Our services",
    features: [
      { title: "Frontend development", body: "Modern, responsive interfaces built with React, Next.js and TypeScript." },
      { title: "Backend development", body: "Robust server-side applications with secure APIs and database integration." },
      { title: "Responsive design", body: "Displays properly on every device: desktop, tablet and mobile." },
      { title: "Fast performance", body: "Optimised for speed so pages load quickly." },
      { title: "SEO ready", body: "Built with SEO best practices to help your search engine rankings." },
      { title: "Cross-browser", body: "Compatible with all major browsers for maximum reach." },
    ],
    whyTitle: "Why choose our web development?",
    why: [
      { title: "A modern stack", body: "We use current technologies and frameworks to build applications that last." },
      { title: "UK support", body: "A fast, friendly UK-based support team, available whenever you need help." },
    ],
  },
  "web-design": {
    slug: "web-design",
    headline: "Designs people trust at first glance.",
    lead: "We create user-friendly website designs that look great and drive results. You review and approve every page before a line of code is written.",
    featuresTitle: "Design services",
    features: [
      { title: "UI and UX design", body: "Intuitive interfaces designed for a clear, engaging user experience." },
      { title: "Responsive design", body: "Designs that look right on every device and screen size." },
      { title: "Brand identity", body: "Consistent branding that reflects your company's values and personality." },
      { title: "Modern aesthetics", body: "Contemporary design that keeps your website fresh and appealing." },
      { title: "Conversion focused", body: "Layouts planned to turn visitors into customers and leads." },
      { title: "Custom graphics", body: "Unique graphics and visual elements tailored to your brand." },
    ],
    whyTitle: "Why professional design matters",
    why: [
      { title: "First impressions", body: "Your website is often the first interaction customers have with your brand. Make it count." },
      { title: "User trust", body: "Professional design builds trust and credibility with your audience." },
    ],
    image: { src: "/images/hero/hero-2.jpg", alt: "Someone sketching ideas in a notebook while checking their phone" },
  },
  "e-commerce": {
    slug: "e-commerce",
    headline: "An online shop that is open all hours.",
    lead: "We build online stores that drive sales and grow with your business, with payments, stock and delivery set up and tested from day one.",
    featuresTitle: "E-commerce features",
    features: [
      { title: "Product management", body: "An easy-to-use admin panel for managing products, stock and categories." },
      { title: "Payment integration", body: "Secure payment processing with a choice of payment gateways." },
      { title: "Order management", body: "Order tracking and management for smooth day-to-day operations." },
      { title: "Analytics and reports", body: "Track sales, customer behaviour and performance in one place." },
      { title: "Fast checkout", body: "A streamlined checkout that reduces abandoned baskets." },
      { title: "Mobile optimised", body: "A responsive shop that works properly on phones." },
    ],
    whyTitle: "Grow your online sales",
    why: [
      { title: "Open 24/7", body: "Your online store is always open, so customers can shop any time, anywhere." },
      { title: "Room to grow", body: "Built to scale as you expand your product range." },
    ],
    image: { src: "/images/hero/hero-3.jpg", alt: "A business owner on a call while a colleague works on a laptop" },
  },
  mobile: {
    slug: "mobile",
    headline: "Apps your customers keep on their home screen.",
    lead: "We create mobile applications for iOS and Android that engage your users and help your business grow.",
    featuresTitle: "Mobile development services",
    features: [
      { title: "Native apps", body: "High-performance native applications for iOS and Android." },
      { title: "Cross-platform", body: "One codebase that works on both iOS and Android." },
      { title: "Secure and reliable", body: "Strong security and reliability for your mobile applications." },
      { title: "App store optimisation", body: "Set up for app store visibility and more downloads." },
      { title: "User experience", body: "Intuitive interfaces designed for small screens." },
      { title: "Maintenance and updates", body: "Ongoing support and updates to keep your app current and working." },
    ],
    whyTitle: "Reach your customers anywhere",
    why: [
      { title: "A mobile-first world", body: "Most people now browse on their phones, so a mobile app keeps you within reach." },
      { title: "Direct engagement", body: "Apps give you direct access to customers through push notifications and personalised experiences." },
    ],
    image: { src: "/images/hero/hero-5.jpg", alt: "A woman checking her phone beside a laptop showing sales charts" },
  },
  seo: {
    slug: "seo",
    headline: "Get found by the people already searching for you.",
    lead: "We improve your search engine rankings and bring in organic traffic, with technical fixes, content work and regular reporting.",
    featuresTitle: "SEO services",
    features: [
      { title: "Keyword research", body: "Find the right keywords to target for visibility and traffic." },
      { title: "On-page SEO", body: "Optimise your website's content, structure and technical elements." },
      { title: "Analytics and reporting", body: "Track your SEO performance with clear analytics and regular reports." },
      { title: "Content optimisation", body: "Create and improve content that ranks well and engages your audience." },
      { title: "Link building", body: "Build quality backlinks to improve your domain authority and rankings." },
      { title: "Local SEO", body: "Optimise for local search to attract customers in your area." },
    ],
    whyTitle: "Increase your online visibility",
    why: [
      { title: "Organic traffic", body: "Attract qualified visitors who are actively searching for your products or services." },
      { title: "Long-term results", body: "SEO keeps working over time, unlike paid advertising that stops when the budget does." },
    ],
  },
  "graphic-design": {
    slug: "graphic-design",
    headline: "A brand that looks the same everywhere.",
    lead: "We create visual identities and designs that represent your brand and catch your audience's attention, online and in print.",
    featuresTitle: "Design services",
    features: [
      { title: "Brand identity", body: "Complete brand packages including logos, colour schemes and style guides." },
      { title: "Logo design", body: "Memorable logos that represent your brand's personality and values." },
      { title: "Print design", body: "Business cards, brochures, flyers and other print materials." },
      { title: "Social media graphics", body: "Eye-catching graphics for social posts, ads and campaigns." },
      { title: "Web graphics", body: "Custom graphics, icons and visual elements for websites and apps." },
      { title: "Marketing materials", body: "Banners, posters and promotional materials." },
    ],
    whyTitle: "Make your brand stand out",
    why: [
      { title: "Visual impact", body: "Professional design creates a strong first impression and builds recognition." },
      { title: "Consistent branding", body: "A cohesive identity across every touchpoint strengthens your brand." },
    ],
  },
  "social-media": {
    slug: "social-media",
    headline: "Social channels that stay active.",
    lead: "We plan, design and publish content for your social media accounts, so your channels stay active between launches and match the rest of your brand.",
    featuresTitle: "Social media services",
    features: [
      { title: "Content planning", body: "A monthly plan of posts built around your products, news and seasonal moments." },
      { title: "Post design", body: "On-brand graphics and short videos made for each platform." },
      { title: "Profile setup", body: "Accounts set up or tidied up with consistent names, images and links." },
      { title: "Paid campaigns", body: "Targeted social ads to reach new customers in the areas you serve." },
      { title: "Community replies", body: "Help keeping on top of comments and messages." },
      { title: "Monthly reporting", body: "A simple report on what was posted and how it performed." },
    ],
    whyTitle: "Why keep your channels active",
    why: [
      { title: "Stay visible", body: "Regular posts keep your business in front of people who already follow you." },
      { title: "Build trust", body: "An active, consistent profile shows new customers that you are open for business." },
    ],
  },
};
