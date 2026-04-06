"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { BLOG_POSTS } from "@/lib/data";

export default function BlogPreview() {
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
          <SectionLabel label="Clinic Insights" className="justify-center" />
          <h2 className="mt-5 text-dark">Your Recovery Doesn't End Here — It Grows Here</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border-2 border-primary px-8 py-4 font-semibold text-primary transition hover:bg-primary hover:text-white"
            >
              View All Articles →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
