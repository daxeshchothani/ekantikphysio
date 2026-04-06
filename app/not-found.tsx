"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-4">
      <div className="absolute -left-20 top-20 h-64 w-64 animate-float rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-10 bottom-20 h-56 w-56 animate-float rounded-full bg-primary-light/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        <p className="font-display text-[120px] leading-none text-primary">404</p>
        <h2 className="mt-2 text-dark">Page Not Found</h2>
        <p className="mt-3 text-muted">The page you're looking for has moved or doesn't exist.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="inline-flex rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              ← Back to Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/appointment"
              className="inline-flex rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
