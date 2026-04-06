"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-white py-24"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel label="Our Services" className="justify-center" />
          <h2 className="mt-5 text-dark">Therapy That Adapts To You, Not The Other Way Around</h2>
          <p className="mt-4 text-muted">
            From sport-specific rehabilitation to long-term pain care, every programme is tailored to your
            movement goals, timeline, and day-to-day demands.
          </p>
        </div>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              View All Services →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
