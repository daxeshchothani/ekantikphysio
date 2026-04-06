"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data";

const CARD_WIDTH = 380;
const CARD_GAP = 24;

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const maxIndex = useMemo(() => Math.max(TESTIMONIALS.length - 1, 0), []);

  const scrollToIndex = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(nextIndex, maxIndex));
    setIndex(clamped);
    viewportRef.current?.scrollTo({
      left: clamped * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-24"
    >
      <div className="container-shell">
        <div className="text-center">
          <SectionLabel label="Patient Stories" className="justify-center text-accent" />
          <h2 className="mt-5 text-white">What Our London Patients Say</h2>
          <p className="mt-3 text-white/80">★★★★★ 4.9/5 from 200+ Google Reviews</p>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-primary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-primary to-transparent" />

          <motion.div
            drag="x"
            dragConstraints={{ left: -((TESTIMONIALS.length - 1) * (CARD_WIDTH + CARD_GAP)), right: 0 }}
            className="overflow-hidden"
          >
            <div ref={viewportRef} className="flex snap-x gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-[85vw] max-w-[380px] shrink-0 snap-start lg:w-[calc(33.333%-16px)]">
                  <motion.div whileHover={{ y: -4, scale: 1.01 }}>
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToIndex(index - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(index + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {TESTIMONIALS.map((testimonial, dotIndex) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => scrollToIndex(dotIndex)}
                className={`h-2.5 rounded-full transition ${dotIndex === index ? "w-8 bg-accent" : "w-2.5 bg-white/40"}`}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
