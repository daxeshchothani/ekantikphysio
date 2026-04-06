"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import BlogCard from "@/components/ui/BlogCard";
import BookingCTA from "@/components/ui/BookingCTA";
import PageHero from "@/components/ui/PageHero";
import { BLOG_POSTS } from "@/lib/data";

const categories = ["All", "Pain Management", "Sports Rehab", "Surgical Recovery", "Elderly Care", "Neurological"];

interface NewsletterForm {
  email: string;
}

export default function BlogPageContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { register, handleSubmit, reset } = useForm<NewsletterForm>();
  const filtered = useMemo(
    () => (activeCategory === "All" ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <PageHero
        title="Physiotherapy Blog"
        subtitle="Expert advice and recovery guides from our London team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-10"
      >
        <div className="container-shell flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category ? "bg-primary text-white" : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-white py-24"
      >
        <div className="container-shell grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface py-14"
      >
        <div className="container-shell mx-auto max-w-2xl rounded-2xl bg-white p-6 text-center shadow-lg">
          <h3 className="text-dark">Get Monthly Recovery Insights</h3>
          <form
            onSubmit={handleSubmit(() => reset())}
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
              className="w-full rounded-full border border-primary/20 px-4 py-3 outline-none"
            />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="rounded-full bg-accent px-6 py-3 font-bold text-dark">
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.section>

      <BookingCTA />
    </>
  );
}
