"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: Crumb[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 text-white">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_2px,transparent_2px,transparent_14px)]" />
      <div className="container-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/80">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center gap-2">
                <Link href={crumb.href} className="transition hover:text-accent">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
              </div>
            ))}
          </div>
          <h1 className="text-white">{title}</h1>
          {subtitle ? <p className="mt-4 max-w-3xl text-white/85">{subtitle}</p> : null}
        </motion.div>
      </div>
    </section>
  );
}
