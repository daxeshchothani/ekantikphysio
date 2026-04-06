"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AccordionItem from "@/components/ui/AccordionItem";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";
import { FAQS } from "@/lib/data";

export default function FaqPageContent() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);
  const left = FAQS.slice(0, 6);
  const right = FAQS.slice(6, 12);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your first visit."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-24"
      >
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          {[left, right].map((column, idx) => (
            <div key={idx} className="space-y-4">
              {column.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="container-shell mt-12 text-center">
          <h3 className="text-dark">Still have questions?</h3>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-4 inline-flex">
            <Link href="/contact" className="rounded-full bg-accent px-8 py-4 font-bold text-dark transition hover:bg-accent-hover">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <BookingCTA />
    </>
  );
}
