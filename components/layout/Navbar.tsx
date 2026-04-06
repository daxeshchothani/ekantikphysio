"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  Brain,
  ChevronDown,
  Dumbbell,
  Hand,
  Heart,
  Menu,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap = {
  "sports-injury-rehabilitation": Dumbbell,
  "post-surgical-rehabilitation": Activity,
  "chronic-pain-management": Heart,
  "neurological-physiotherapy": Brain,
  "elderly-falls-prevention": Shield,
  "manual-therapy-massage": Hand,
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isServicesPath = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        "bg-white shadow-md border-b border-primary/5"
      )}
    >
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between px-4 lg:px-0">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all",
                "border-primary/30 bg-primary/8 text-primary hover:bg-primary/15"
              )}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 16c5-1 8-5 9-10 3 4 3 11-2 15-2 2-5 2-7 1" />
              </svg>
            </motion.span>
            <span className="text-2xl lg:text-3xl font-display tracking-tight">
              <span className="text-dark transition-colors duration-300">Ekantik</span>{" "}
              <span className="text-primary font-bold">Physio</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              if (!link.children) {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative group px-1 py-2 text-sm font-semibold transition-colors duration-300",
                      "text-dark/75 hover:text-primary"
                    )}
                  >
                    {link.label}
                    <span 
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                        active 
                          ? "w-full bg-accent" 
                          : "w-0 bg-accent group-hover:w-full"
                      )}
                    />
                    {active ? (
                      <motion.span layoutId="active-link" />
                    ) : null}
                  </Link>
                );
              }

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={cn(
                      "relative inline-flex items-center gap-1.5 px-1 py-2 text-sm font-semibold transition-colors duration-300 group",
                      "text-dark/75 hover:text-primary"
                    )}
                  >
                    Services
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", servicesOpen && "rotate-180")} />
                    <span 
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                        isServicesPath 
                          ? "w-full bg-accent" 
                          : "w-0 bg-accent group-hover:w-full"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-14 w-[640px] overflow-hidden rounded-2xl border border-primary/8 bg-white shadow-xl p-4"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {link.children.map((child) => {
                            const key = child.href.replace("/services/", "") as keyof typeof iconMap;
                            const Icon = iconMap[key] ?? Activity;
                            const active = pathname === child.href;

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "group rounded-xl border border-primary/6 p-4 transition-all duration-200 hover:border-primary/15 hover:bg-primary/5",
                                  active && "border-primary/25 bg-primary/10 shadow-sm"
                                )}
                              >
                                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-110">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <p className="text-sm font-semibold leading-6 text-dark/80 transition-colors duration-200 group-hover:text-primary">
                                  {child.label}
                                </p>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/appointment"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-accent to-accent-hover px-8 py-3.5 text-sm font-bold text-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:from-accent-hover hover:to-accent"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border-2 lg:hidden transition-all duration-300",
              "border-primary/30 text-primary hover:bg-primary/8"
            )}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
