"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 500, suffix: "+", label: "Patients Successfully Treated" },
  { end: 10, suffix: "+", label: "Years of Clinical Excellence" },
  { end: 6, suffix: "", label: "Specialist Services Offered" },
  { end: 98, suffix: "%", label: "Patient Satisfaction Rate" },
];

export default function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-primary py-16"
    >
      <div className="container-shell hidden grid-cols-2 gap-6 lg:grid lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={index < stats.length - 1 ? "lg:border-r lg:border-white/20 lg:pr-6" : ""}
          >
            <p className="text-accent">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <div className="overflow-x-auto pb-2">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -220, 0] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex min-w-max gap-4 px-4"
          >
            {[...stats, ...stats].map((stat, idx) => (
              <div key={`${stat.label}-${idx}`} className="w-56 rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-accent">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/85">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
