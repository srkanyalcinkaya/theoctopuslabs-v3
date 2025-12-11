"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ testimonial, companyName }: { testimonial: string; companyName: string }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {testimonial}
              </span>
            </p>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm md:text-lg font-sans max-w-3xl mx-auto mt-4 font-semibold">
              — {companyName}
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Client Testimonial",
    title: "Your Wallet",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent testimonial="The Octopus Labs transformed our digital presence. Their bespoke web development solution exceeded all our expectations." companyName="Your Wallet" />,
  },
  {
    category: "Client Testimonial",
    title: "Ogul Sigorta",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent testimonial="Outstanding service and professional approach. Our new website has significantly improved our customer engagement." companyName="Ogul Sigorta" />,
  },
  {
    category: "Client Testimonial",
    title: "Coolhub Bag",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent testimonial="Working with The Octopus Labs was a game-changer. They delivered a stunning e-commerce platform that boosted our sales." companyName="Coolhub Bag" />,
  },
  {
    category: "Client Testimonial",
    title: "Salt & Partners",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent testimonial="Professional, reliable, and results-driven. Our partnership with The Octopus Labs has been incredibly successful." companyName="Salt & Partners" />,
  },
  {
    category: "Client Testimonial",
    title: "LawLinkGlobal",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent testimonial="The team at The Octopus Labs understood our needs perfectly. Our new website reflects our professional standards beautifully." companyName="LawLinkGlobal" />,
  },
  {
    category: "Client Testimonial",
    title: "Chavinci",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent testimonial="Excellent web design and development services. The Octopus Labs helped us create a modern, user-friendly platform." companyName="Chavinci" />,
  },
];