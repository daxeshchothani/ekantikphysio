"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import TeamCard from "@/components/ui/TeamCard";
import { TEAM } from "@/lib/data";

const previewTeam = TEAM.slice(0, 4);

export default function TeamPreview() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-surface py-24"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel label="Meet The Team" className="justify-center" />
          <h2 className="mt-5 text-dark">Your Healing, Powered by People Who Care</h2>
        </div>

        <div className="mt-12 overflow-x-auto pb-3 lg:hidden">
          <div className="flex min-w-max gap-4">
            {previewTeam.map((member) => (
              <div key={member.id} className="w-[290px] snap-start">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 hidden grid-cols-1 gap-6 sm:grid-cols-2 lg:grid"
        >
          {previewTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex">
            <Link
              href="/team"
              className="inline-flex items-center rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              Meet the Full Team →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
