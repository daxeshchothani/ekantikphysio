"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark/70 backdrop-blur-sm"
            aria-label="Close mobile menu"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-white p-6 shadow-2xl"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" onClick={onClose} className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 16c5-1 8-5 9-10 3 4 3 11-2 15-2 2-5 2-7 1" />
                  </svg>
                </span>
                <span className="text-2xl font-display text-dark">Ekantik <span className="text-primary">Physio</span></span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-2">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.href} className="rounded-2xl border border-primary/10">
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-semibold text-dark"
                      >
                        Services
                        <ChevronDown
                          className={cn("h-5 w-5 text-primary transition", servicesOpen && "rotate-180")}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {servicesOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-primary/10"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className={cn(
                                  "block px-4 py-3 text-base transition hover:bg-surface",
                                  pathname === child.href ? "text-primary" : "text-muted"
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-2xl px-4 py-3 text-lg font-semibold transition hover:bg-surface",
                      pathname === link.href ? "text-primary" : "text-dark"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8">
              <Link
                href="/appointment"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-center font-bold text-dark transition hover:bg-accent-hover"
              >
                Book Appointment
              </Link>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
