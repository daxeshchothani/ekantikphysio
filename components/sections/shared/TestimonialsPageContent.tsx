"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsPageContent() {
  return (
    <>
      <PageHero
        title="Patient Testimonials"
        subtitle="Real stories from real Londoners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-12"
      >
        <div className="container-shell text-center text-lg font-semibold text-dark">
          4.9/5 ★★★★★ — Based on 200+ verified reviews
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-24"
      >
        <div className="container-shell columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <motion.div whileHover={{ y: -4, scale: 1.01 }}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex">
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover"
            >
              Read our reviews on Google
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <BookingCTA />
    </>
  );
}
