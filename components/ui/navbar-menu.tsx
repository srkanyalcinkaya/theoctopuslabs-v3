"use client";
import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "./button";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onMouseLeave={() => {
        // Only close if mouse leaves the entire item area and menu
        // The Menu component will handle the actual closing with delay
      }}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white flex items-center gap-1"
      >
        {item}
        {children && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              active === item && "rotate-180"
            )}
          />
        )}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", mass: 0.5, damping: 11.5, stiffness: 100, restDelta: 0.001, restSpeed: 0.001 }}
          onMouseEnter={() => setActive(item)} // Keep menu open when hovering over it
        >
          {active === item && (
            <>
              {/* Invisible bridge to prevent mouse leave gap */}
              <div 
                className="absolute top-full left-0 right-0 h-4"
                onMouseEnter={() => setActive(item)}
              />
              <div className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 pt-2">
                <motion.div
                  transition={{ type: "spring", mass: 0.5, damping: 11.5, stiffness: 100, restDelta: 0.001, restSpeed: 0.001 }}
                  layoutId="active" // layoutId ensures smooth animation
                  className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/20 dark:border-white/20 shadow-xl"
                  onMouseEnter={() => setActive(item)} // Keep menu open when hovering over it
                >
                  <motion.div
                    layout // layout ensures smooth animation
                    className="w-max h-full p-4"
                  >
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 150); // 150ms delay to allow mouse to move to menu
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative flex justify-center items-center gap-8 "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-40 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};

export const SolutionCategoryItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <Link 
      href={href} 
      className="flex items-center justify-between group hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg p-2 transition-colors"
    >
      <span className="text-neutral-700 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
        {title}
      </span>
      <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
    </Link>
  );
};

export const SolutionCategory = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; href: string }[];
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-sm font-semibold text-black dark:text-white mb-2">
        {title}
      </h4>
      <div className="flex flex-col space-y-1">
        {items.map((item, index) => (
          <SolutionCategoryItem key={index} title={item.title} href={item.href} />
        ))}
      </div>
    </div>
  );
};

// Mobile Menu Components
export const MobileMenuItem = ({
  item,
  children,
  isOpen,
  onToggle,
}: {
  item: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left text-black dark:text-white"
      >
        <span className="font-medium">{item}</span>
        {children && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        )}
      </button>
      {children && isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="pb-4 pl-4 space-y-2">
            {children}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const MobileSolutionCategory = ({
  title,
  items,
  onLinkClick,
}: {
  title: string;
  items: { title: string; href: string }[];
  onLinkClick?: () => void;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wider">
        {title}
      </h4>
      <div className="flex flex-col space-y-1">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={onLinkClick}
            className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <span className="text-sm text-neutral-700 dark:text-neutral-200">
              {item.title}
            </span>
            <ChevronRight className="h-4 w-4 text-neutral-400" />
          </Link>
        ))}
      </div>
    </div>
  );
};



export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveItem, setMobileActiveItem] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileActiveItem(null);
    }
  };

  const toggleMobileItem = (item: string) => {
    setMobileActiveItem(mobileActiveItem === item ? null : item);
  };

  return (
    <>
      <div
        className={cn("fixed top-[6px] inset-x-0 max-w-[1426px] mx-auto z-50 rounded-[6px] h-12 bg-white/80 backdrop-blur-[10px] flex justify-between items-center px-3", className)}
      >
        <Link href="/" className="flex justify-center items-center gap-[10px]">
          <div className="flex justify-center items-center roounded-2xl">
            <Image src="/theoctopuslabs-logo.png" alt="logo" className="rounded-sm" width={29} height={29} />
          </div>
          <div className="hidden sm:block">
            <span className="text-black tracking-tight text-md font-bold font-orbitron">The Octopus Labs</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Menu setActive={setActive}>
            <Link href="/contact" className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
              Contact
            </Link>
            <Link href="/about" className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
              About
            </Link>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/bespoke-web-development">Bespoke Web Development</HoveredLink>
                <HoveredLink href="/web-development">Web Development</HoveredLink>
                <HoveredLink href="/web-design">Web Design</HoveredLink>
                <HoveredLink href="/e-commerce">E-Commerce</HoveredLink>
                <HoveredLink href="/mobile-application-development">Mobile Application Development</HoveredLink>
                <HoveredLink href="/search-engine-optimisation">Search Engine Optimisation</HoveredLink>
                <HoveredLink href="/graphic-design">Graphic Design</HoveredLink>
                <HoveredLink href="/social-media">Social Media</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Solutions">
              <div className="text-sm grid grid-cols-2 gap-8 p-6 min-w-[600px]">
                <SolutionCategory
                  title="POS Systems"
                  items={[
                    { title: "Restaurant POS System", href: "/restaurant-pos" },
                    { title: "Retail POS System", href: "/retail-pos" },
                    { title: "Market POS", href: "/marketing-pos" },
                    { title: "Epos Now Cloud POS", href: "/epos-now" },
                  ]}
                />
                <SolutionCategory
                  title="CRM Systems"
                  items={[
                    { title: "Sage CRM", href: "/sage-crm" },
                    { title: "Spotler CRM", href: "/spotler-crm" },
                    { title: "Access CRM", href: "/access-crm" },
                  ]}
                />
                <SolutionCategory
                  title="ERP Systems"
                  items={[
                    { title: "Sage ERP", href: "/sage-erp" },
                    { title: "Access ERP", href: "/access-erp" },
                    { title: "24SevenOffice ERP", href: "/24sevenoffice-erp" },
                    { title: "CGram ERP Solution", href: "/cgram-erp" },
                  ]}
                />
                <SolutionCategory
                  title="Accounting Software"
                  items={[
                    { title: "Sage Accounting", href: "/sage-accounting" },
                    { title: "Access Accounting", href: "/access-accounting" },
                  ]}
                />
                <SolutionCategory
                  title="Business Solutions"
                  items={[
                    { title: "E-Commerce Solutions", href: "/e-commerce" },
                    { title: "Inventory Management System", href: "/inventory-management" },
                    { title: "Payment Processing System", href: "/payment-processing" },
                  ]}
                />
              </div>
            </MenuItem>
          </Menu>
          <Button className="hidden md:flex">
            <Link href="/quick-quote">Quick Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button className="text-xs px-3 py-1.5">
            <Link href="/quick-quote">Quote</Link>
          </Button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-black dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden top-[54px]"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed top-[54px] right-0 bottom-0 w-[85vw] max-w-sm bg-white dark:bg-black z-50 shadow-2xl overflow-y-auto md:hidden",
          !mobileMenuOpen && "pointer-events-none"
        )}
      >
        <div className="p-4 space-y-0">
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className="block py-4 border-b border-neutral-200 dark:border-neutral-800 text-black dark:text-white font-medium"
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={toggleMobileMenu}
            className="block py-4 border-b border-neutral-200 dark:border-neutral-800 text-black dark:text-white font-medium"
          >
            About
          </Link>
          
          <MobileMenuItem
            item="Services"
            isOpen={mobileActiveItem === "Services"}
            onToggle={() => toggleMobileItem("Services")}
          >
            <Link href="/bespoke-web-development" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Bespoke Web Development
            </Link>
            <Link href="/web-development" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Web Development
            </Link>
            <Link href="/web-design" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Web Design
            </Link>
            <Link href="/e-commerce" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              E-Commerce
            </Link>
            <Link href="/mobile-application-development" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Mobile Application Development
            </Link>
            <Link href="/search-engine-optimisation" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Search Engine Optimisation
            </Link>
            <Link href="/graphic-design" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Graphic Design
            </Link>
            <Link href="/social-media" onClick={toggleMobileMenu} className="block py-2 text-sm text-neutral-700 dark:text-neutral-200">
              Social Media
            </Link>
          </MobileMenuItem>

          <MobileMenuItem
            item="Solutions"
            isOpen={mobileActiveItem === "Solutions"}
            onToggle={() => toggleMobileItem("Solutions")}
          >
            <div className="space-y-6 pt-2">
              <MobileSolutionCategory
                title="POS Systems"
                items={[
                  { title: "Restaurant POS System", href: "/restaurant-pos" },
                  { title: "Retail POS System", href: "/retail-pos" },
                  { title: "Market POS", href: "/marketing-pos" },
                  { title: "Epos Now Cloud POS", href: "/epos-now" },
                ]}
                onLinkClick={toggleMobileMenu}
              />
              <MobileSolutionCategory
                title="CRM Systems"
                items={[
                  { title: "Sage CRM", href: "/sage-crm" },
                  { title: "Spotler CRM", href: "/spotler-crm" },
                  { title: "Access CRM", href: "/access-crm" },
                ]}
                onLinkClick={toggleMobileMenu}
              />
              <MobileSolutionCategory
                title="ERP Systems"
                items={[
                  { title: "Sage ERP", href: "/sage-erp" },
                  { title: "Access ERP", href: "/access-erp" },
                  { title: "24SevenOffice ERP", href: "/24sevenoffice-erp" },
                  { title: "CGram ERP Solution", href: "/cgram-erp" },
                ]}
                onLinkClick={toggleMobileMenu}
              />
              <MobileSolutionCategory
                title="Accounting Software"
                items={[
                  { title: "Sage Accounting", href: "/sage-accounting" },
                  { title: "Access Accounting", href: "/access-accounting" },
                ]}
                onLinkClick={toggleMobileMenu}
              />
              <MobileSolutionCategory
                title="Business Solutions"
                items={[
                  { title: "E-Commerce Solutions", href: "/e-commerce" },
                  { title: "Inventory Management System", href: "/inventory-management" },
                  { title: "Payment Processing System", href: "/payment-processing" },
                ]}
                onLinkClick={toggleMobileMenu}
              />
            </div>
          </MobileMenuItem>
        </div>
      </motion.div>
    </>
  );
}